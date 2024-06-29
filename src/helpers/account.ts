"use server"
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/prismaHelpers";


export type AccountInfoTypes = {
    firstName: string
    lastName: string
    email: string
    password: string
    displayName: string

}
export type BillingAddressTypes = {
    name: string
    email: string
    country:string
    city: string
    address?: string
}


export const updateAccountInfo = async ({ firstName, lastName, email, password, displayName }: AccountInfoTypes) => {
    const hashedPassword = await bcrypt.hash(password, 20);
    const user = await getCurrentUser()
    if (!user) throw new Error("User not found");

    prisma.user.update({
        where: {
            email: user.email,
        },
        data: {
            name: `${firstName} ${lastName}`,
            email: email,
            password: hashedPassword,
            displayName: displayName

        }
    })
}
export const updateBillingDetails = async ({ name, email, country, city, address }: BillingAddressTypes) => {
    const user = await getCurrentUser();
    if (!user) throw new Error("User not found");

    await prisma.user.update({
        where: {
            email: user.email,
        },
        data: {
            name,
            email,
            country,
            city,
            address,
        },
    });
};

export const getUserAddress = async () => {
    const user = await getCurrentUser();
    if (!user) return null;

    const address = user.address ? { ...user } : null;
    return address;
}
