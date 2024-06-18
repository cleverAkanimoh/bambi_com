import { IoHomeOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaVimeoV } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";


const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="mt-10 bg-secondary pt-20 md:pt-24 text-white">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 pb-14 md:pb-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-semibold">About Us</h1>
                    <p  className="text-[14px]">We create games that inspire growth and development, from
                        communication skills and physical health to innovation and creativity, which all play
                        big roles in shaping our children for a positive future.</p>
                    <div className="flex gap-2 items-center">
                        <a title="Facebook" className="text-primary p-2 hover:text-white hover:bg-[#353535] text-center grid place-items-center rounded-full bg-white" href="#"><FaFacebookF  /></a>
                        <a title="Twitter" className="text-primary p-2 hover:text-white hover:bg-[#151515] text-center grid place-items-center rounded-full bg-white" href="#"><TiSocialTwitter  /></a>
                        <a title="LinkedIn" className="text-primary p-2 hover:text-white hover:bg-[#151515] text-center grid place-items-center rounded-full bg-white" href="#"><FaLinkedinIn  /></a>
                        <a title="Youtube" className="text-primary p-2 hover:text-white hover:bg-[#151515] text-center grid place-items-center rounded-full bg-white" href="#"><TfiYoutube  /></a>
                        <a title="Vimeo" className="text-primary p-2 hover:text-white hover:bg-[#151515] text-center grid place-items-center rounded-full bg-white" href="#"><FaVimeoV  /></a>


                    </div>

                </div>
                <div className="flex flex-col gap-4">

                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-2 items-center"><IoHomeOutline /><span>147 Akowonjo Road, Lagos</span> </li>
                        <li className="flex gap-2 items-center hover:!text-primary"><MdMailOutline /><a href="mailto:info@example.com">
                            info@teenscancode.com.ng</a></li>
                        <li className="flex gap-2 items-center hover:!text-primary"><MdOutlinePhone /><a href="tel:+012-3456-789"> +234 7035 715 049</a></li>
                    </ul>

                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Information</h2>
                    <a className="text-[14px]" href="#">Terms and Conditions</a>

                </div>
                <form className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Sign Up for Newsletter</h2>
                    <div className="flex flex-col gap-2">
                        <input className="w-full p-2 outline-none ring-0 bg-slate-100 focus:bg-white border focus:border-primary" type="email" placeholder="info@teenscancode.com.ng" name="email" />
                        <button

                            type="submit"
                            className='text-white w-full hover:text-black text-center font-bold bg-primary rounded-md p-3'
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className="text-[14px]">Join over 1,000 people who get free and fresh content
                        delivered automatically each time we publish</p>

                </form>

            </div>
            <div className="bg-primary py-10 px-4 md:p-6 text-center flex items-center justify-center ">
                <p className="flex gap-1 items-center">&copy; {year} <span className="font-bold">Bambi</span> Made with <GoHeartFill className="text-red-600" /> {" "}
                    by <a href="https://virtuallysafe.org/">Virtually Safe.</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer