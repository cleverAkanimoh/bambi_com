"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDbUser } from "@/lib/prismaHelpers";
import { SignUp } from "@/types";
import { generateUniqueString } from "@/lib/utils";
// import { signIn, signOut } from "../../auth";

export const registerUserAction = async ({
  email,
  firstName,
  lastName,
  password,
}: SignUp) => {
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
      name: lower(firstName + " " + lastName),
      email: lowerEmail,
      password: hashedPassword,
      emailToken,
    },
  });

  return { user };
};

export const loginUserAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const userFound = await getDbUser({ email });

  if (!userFound) throw new Error("No user with these credentials was found");

  const passwordMatch = await bcrypt.compare(password, userFound.password);

  if (!passwordMatch) throw new Error("Invalid Credentials");

  return userFound;
};

