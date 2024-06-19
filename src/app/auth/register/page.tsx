

const page = () => {
  return (
<div className='min-h-screen flex items-center justify-center py-10'>
            <form action="" className='bg-[#efefef] text-center w-[90%] mx-auto md:w-1/2 lg:w-2/5 flex flex-col gap-8 items-center px-6 py-12'>
            <div>

                <h1 className='text-3xl font-bold'>Create account</h1>
                <p className='text-[#555] mt-3'>Please register using account details below</p>
            </div>
                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="text" placeholder="First Name" name="firstName" />
                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="text" placeholder="Last Name" name="lastName" />
                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="email" placeholder="Email" name="email" />

                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="password" placeholder="Enter your password" name="email" />
                
                    <label htmlFor="newsletter" className='flex items-center gap-2 text-[#555]'>
                        <input type="checkbox" className='!border h-4 w-4  !border-primary' name="newsletter" id="newsletter" />
                        Subscribe to our newsletter</label>


                
                <button

                    type="submit"
                    className='self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-4 hover:bg-primary hover:text-white transition-all ease-in-out duration-200'


                >
                    Register
                </button>
            
            </form>

        </div>
  )
}

export default page