import { getCompleteUserMetadata, getCurrentUser } from "@/lib/prismaHelpers";
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCurrentUserOrders } from "@/helpers/transactions";

interface PaymentMethod {
    cardNumber: string;
    expiryDate: string;
    cardHolderName: string;
}

const Page = async () => {

    const user = await getCurrentUserOrders();
    const orderDate = user?.map(user=>user.createdAt.toDateString());



    return (
        <div className=''>
            {/* <Breadcrumbs active="Payment Method" /> */}
            <div className='grid grid-cols-1 gap-4 p-4'>
                <h1 className='text-black text-3xl font-bold'>Payment Method</h1>
                {orderDate ? (
                    <div className='w-full text-[#555] font-semibold p-4'>
                        <p>{orderDate}</p>
                    </div>
                ) : (
                    <div className='w-full bg-stone-200 text-[#555] font-semibold p-4'>
                        You do not have any orders saved
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
