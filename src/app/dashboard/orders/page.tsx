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
    const formattedOrderDates = user?.map(order => new Date(order.createdAt).toLocaleDateString());
    



    return (
        <div className=''>
            {/* <Breadcrumbs active="Payment Method" /> */}
            <div className='grid grid-cols-1 gap-4 p-4'>
                <h1 className='text-black text-2xl font-bold'>Orders</h1>
                {formattedOrderDates ? (
                    <div className='w-full text-[#555] font-semibold p-4'>
                        <p>{formattedOrderDates}</p>
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
