"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { SignUpType } from "@/types/signUpType";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDbUser } from "@/lib/prismaHelpers";
import { generateUniqueString } from "@/lib/utils";

export const registerUserAction = async ({
  companyName,
  name,
  jobTitle,
  dateOfHire,
  country,
  state,
  email,
  password,
  cv,
}: SignUpType) => {
  const userAlreadyExist = await prisma.user.findUnique({ where: { email } });

  if (userAlreadyExist) throw new Error("User with email already exist");

  const hashedPassword = await bcrypt.hash(password, 20);

  function lower(value: string) {
    return `${value.toLowerCase()}`;
  }

  const lowerEmail = lower(email);
  const emailToken = generateUniqueString();

  const user = await prisma.user.create({
    data: {
      name: lower(name),
      email: lowerEmail,
      password: hashedPassword,
      emailToken,
    },
  });

  const userProfile = await prisma.userProfile.create({
    data: {
      userId: user.id,
      companyName: lower(companyName),
      jobTitle: lower(jobTitle),
      dateOfHire: dateOfHire.toString(),
      country: lower(country),
      state: lower(state),
      email: lowerEmail,
      cv,
    },
  });

  console.log("sign up was a success");
  console.log(user.emailToken);

  return { user, userProfile };
};

export const loginUserAction = async ({
  email,
  password,
  callbackUrl,
}: {
  email: string;
  password: string;
  callbackUrl: string;
}) => {
  const credentials = {
    email,
    password,
    redirect: false,
    redirectTo: callbackUrl,
  };

  const userFound = await getDbUser({ email });

  if (!userFound) throw new Error("No user with these credentials was found");

  const passwordMatch = await bcrypt.compare(password, userFound?.password);

  if (!passwordMatch) throw new Error("Invalid Credentials");

  await signIn("credentials", credentials);
  revalidatePath(callbackUrl);
  redirect(callbackUrl);
};

export const logOutUserAction = async () => {
  await signOut();
  redirect("/");
};
