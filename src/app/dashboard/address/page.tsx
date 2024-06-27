
import React from 'react';
import { getUserAddress } from '@/helpers/account';


const Page = async () => {
const userAddress = await getUserAddress()

    return (
        <div className=''>
            
            <div className='grid grid-cols-1 gap-4 p-4'>
                <h1 className='text-black text-2xl font-bold'>Billing Address</h1>
                {userAddress ? (
                    <div>
                        <h6>{userAddress.name}</h6>
                        <p>{userAddress.address}, {userAddress.city}, </p>
                          <p>  {userAddress.state} {userAddress.zipCode}</p>
                        <p>Mobile: {userAddress.phone}</p>
                    </div>
                ) : (
                    <div className='w-full bg-stone-200 text-[#555] font-semibold p-4'>
                        You do not have any billing address saved
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;