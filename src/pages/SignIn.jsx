import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignIn() {

  //hooks
  const [showPassword, setShowPassword]=useState(false);

  const [formData,setFormData]=useState({
    email: "",
    password: ""
  });

  const {email,password}=formData;

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,

    }))
  }

  return (
    <section>
      <h1 className="text-3xl text-center font-bold mt-6">Sign In</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
            <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&
            w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&
            ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="key"
            className="w-full rounded-2xl"
            />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form >
                    <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transion ease-in-out mt-6" 
                    type="email" id="email" value={email} placeholder="Email Address" onChange={onChange}/>
           <div>
                   <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transion ease-in-out mt-6 mb-6" 
           type={showPassword ? "text" : "password"} id="password" value={password} placeholder="Password" onChange={onChange}
           />
            
           </div>

           <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
            <p>Don't have a account ? 
              <Link to="/sign-up" className="text-red-600 hover:text-red-800 ml-1">register</Link>
              </p>

              <p>
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800">forgot password ?</Link>

              </p>
           </div>
           <button type="submit" className="w-full  bg-blue-600 text-white hover:text-blue-800 mt-2 px-7 py-3 text-sm font-medium uppercase rounded
            shadow-md transion duration-150 ease-in-out hover:shadow-md active:bg-blue-900">Sign In</button>

            <div className="flex items-center before:border-t before:flex-1 before:border-gray-300 my-4
            after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth/>
            </form>

           

        </div>
      </div>
    </section>
  )
}
