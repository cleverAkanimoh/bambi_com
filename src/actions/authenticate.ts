"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDbUser } from "@/lib/prismaHelpers";
import { generateUniqueString } from "@/lib/utils";
import { signIn, signOut } from "../../auth";
import { AuthError } from "next-auth";

export const registerUserAction = async (
  prevState: string | undefined,
  data: FormData
) => {
  const email = data.get("email") as string;
  const firstName = data.get("firstName") as string;
  const lastName = data.get("lastName") as string;
  const password = data.get("password") as string;

  if (firstName === "" || lastName === "" || email === "" || password === "")
    return "Please ensure all field are filled";

  const userAlreadyExist = await prisma.user.findUnique({ where: { email } });

  if (userAlreadyExist) return "User with this credentials already exist";

  const hashedPassword = await bcrypt.hash(password, 20);

  function lower(value: string) {
    return `${value.toLowerCase()}`;
  }

  const lowerEmail = lower(email);
  const emailToken = "";
  // generateUniqueString();

  await prisma.user.create({
    data: {
      name: lower(firstName + " " + lastName),
      email: lowerEmail,
      password: hashedPassword,
      emailToken,
    },
  });
  // revalidatePath("/auth/login", "layout");
  redirect("/auth/login?success=account has been created");
};

export const loginUserAction = async (
  prevState: string | undefined,
  data: FormData
) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const userFound = await getDbUser({ email });

  if (!userFound) return "No user with these credentials was found";

  const passwordMatch = await bcrypt.compare(password, userFound?.password);

  if (!passwordMatch) return "Invalid Credentials";

  try {
    const user = await signIn("credentials", data);
    redirect("/");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error?.type) {
        case "CallbackRouteError":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }
};

// try {
//   const user = await signIn("credentials", formData);
//   return user;
// } catch (error) {
//   if (error instanceof AuthError) {
//     switch (error?.type) {
//       case "CallbackRouteError":
//         return "Invalid credentials.";
//       default:
//         return "Something went wrong.";
//     }
//   }

//   throw error;
// }

export const logOutUserAction = async () => {
  await signOut({ redirectTo: "/" });
};
