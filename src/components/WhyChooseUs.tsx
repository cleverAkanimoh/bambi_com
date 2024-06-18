import { LiaGlobeSolid } from "react-icons/lia";
import { FaPlane } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="w-[90%] mx-auto flex-col gap-10 mt-8">
        <div className="text-center">

        <h1 className="text-2xl">Why Choose Us</h1>
        <p className="text-sm mt-2">Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center mb-6">
        <LiaGlobeSolid className="text-4xl text-secondary" />
                        <h4 className="text-xl">Free Shipping</h4>
                        <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>
        <div className="text-center mb-6">
        <FaPlane className="text-4xl text-secondary" />
        <h4 className="text-xl">Fast Delivery</h4>
        <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>
        <div className="text-center mb-6">
        <FaComments className="text-4xl text-secondary" />
                        <h4 className="text-xl">Free Shipping</h4>
                        <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>
     
        </div>
    </div>
  )
}

export default WhyChooseUs