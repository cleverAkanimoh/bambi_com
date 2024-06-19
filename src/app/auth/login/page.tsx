import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='min-h-screen flex items-center justify-center py-10'>
            <form action="" className='bg-[#efefef] text-center w-[90%] mx-auto md:w-1/2 lg:w-2/5 flex flex-col gap-8 items-center px-6 py-12'>
            <div>

                <h1 className='text-3xl font-bold'>Login</h1>
                <p className='text-[#555] mt-3'>Please Login using account details below</p>
            </div>
                <input className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="email" placeholder="Email" name="email" />

                <input className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="password" placeholder="Enter your password" name="email" />
                <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                    <label htmlFor="rememberMe" className='flex items-center gap-2 text-[#555]'>
                        <input type="checkbox" className='border-2 h-3 w-3  border-primary' name="rememberMe" id="rememberMe" />
                        Remember me</label>

                    <Link href="#" className='text-[#555] hover:text-primary transition-all ease-in-out duration-200'>Forgot password?</Link>

                </div>
                <button

                    type="submit"
                    className='self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-4 hover:bg-primary hover:text-white transition-all ease-in-out duration-200'


                >
                    Login
                </button>
                <Link href="/register" className='self-start text-[#585858] hover:text-primary transition-all ease-in-out duration-200 hover:underline'>Create account</Link>
            </form>

        </div>
    )
}

export default page