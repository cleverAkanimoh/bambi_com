import { getCompleteUserMetadata, getCurrentUser } from "@/lib/prismaHelpers";
import Breadcrumbs from '@/components/Breadcrumbs';

interface PaymentMethod {
    cardNumber: string;
    expiryDate: string;
    cardHolderName: string;
}

const Page = async () => {


    const user = await getCurrentUser();
    const paymentMethod = user?.paymentMethod;



    return (
        <div className=''>
            {/* <Breadcrumbs active="Payment Method" /> */}
            <div className='grid grid-cols-1 gap-4 p-4'>
                <h1 className='text-black text-3xl font-bold'>Payment Method</h1>
                {paymentMethod ? (
                    <div className='w-full text-[#555] font-semibold p-4'>
                        <p>{paymentMethod}</p>
                    </div>
                ) : (
                    <div className='w-full bg-stone-200 text-[#555] font-semibold p-4'>
                        You do not have any payment method saved
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
