import { useState } from "react";
import IMAGE from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";




const Navebar = () => {

    const [open, setOPen]= useState(false);

  return (<>
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
           <IMAGE Src="logo.png" h={32} w={32} alt="logo"/>
            
            <span>Vivek Patel</span>  
        </Link>
        <div className="md:hidden">
             <div className="cursor-pointer text-4xl" onClick={()=> setOPen((prev)=> !prev)}>
            {open ? "X": "☰"} </div>
            <div className={`w-full h-screen flex flex-col items-center justify-center  gap-8 text-lg absolute top-16  transition-all ease-in-out bg-white ${ open ? "-right-0" : "-right-[100%]"}`}>
            <Link to="/">Home</Link>
            <Link to="/posts">Tranding</Link>
            <Link to="">Most Popular</Link>
            <Link to="/About">About</Link>
            <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            login
          </button>
        </Link>
        
            </div>
        </div>
        <div className="hidden md:flex item-center gap-8 xl:gap12 font-medium">
        <Link to ="/">Home        </Link>
        <Link to ="/posts">Tranding    </Link>
        <Link to ="">Most Popular</Link>
        <Link to ="/About">About       </Link>
       
         <SignedOut>
         <Link to ="/login">
            <button className="py-2 px-8 mt-[-10px] rounded-3xl bg-blue-800 text-white">
            login
          </button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    
        </div>

    </div>
    </>
  )
}

export default Navebar