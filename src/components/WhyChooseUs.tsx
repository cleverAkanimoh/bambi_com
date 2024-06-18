import { LiaGlobeSolid } from "react-icons/lia";
import { FaPlane } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-10 mt-8">
        <div className="text-center">

        <h1 className="text-2xl">Why Choose Us</h1>
        <p className="text-sm mt-2">Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
        <div className="text-center mb-6 flex flex-col !items-center gap-4 justify-center">
        <LiaGlobeSolid className="text-4xl text-center text-secondary" />
                        <h4 className="text-xl">Free Shipping</h4>
                        <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>
        <div className="text-center mb-6 flex flex-col !items-center gap-4 justify-center">
        <FaPlane className="text-4xl text-center text-secondary" />
        <h4 className="text-xl">Fast Delivery</h4>
        <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>
        <div className="text-center mb-6 flex flex-col !items-center gap-4 justify-center">
        <FaComments className="text-4xl text-center text-secondary" />
                        <h4 className="text-xl">Free Shipping</h4>
                        <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>
     
        </div>
    </div>
  )
}

export default WhyChooseUs