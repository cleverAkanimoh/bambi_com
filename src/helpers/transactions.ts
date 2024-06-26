"use server";

import { getCompleteUserMetadata } from "@/lib/prismaHelpers"

export const getCurrentUserOrders = async () => {
    const user = await getCompleteUserMetadata()

    return user?.Transactions;
}
