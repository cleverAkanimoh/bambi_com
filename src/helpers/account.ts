import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getCompleteUserMetadata, getCurrentUser } from "@/lib/prismaHelpers";


export type AccountInfoTypes ={
    firstName: string
    lastName: string
    email: string
    password: string
    displayName: string
}


export const updateAccountInfo = async({firstName, lastName, email, password, displayName}:AccountInfoTypes)=>{
    const hashedPassword = await bcrypt.hash(password, 20);
    const user = await getCurrentUser()
    
    const newUser = prisma.user.update({
        where:{
            id: user?.id
        },
        data:{
            name:`${firstName} ${lastName}`,
            email: email,
            password:hashedPassword,
            displayName: displayName

        }
    })
}

export const getUserAddress = async () => {
    const user = await getCurrentUser();
    if (!user) return null;
  
    const address = user.address ? {...user} : null; 
    return address;
  }
  