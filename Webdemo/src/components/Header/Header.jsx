import React, { useState } from "react"
import {IoCloseSharp} from "react-icons/io5"
import {AiOutlineMenu} from "react-icons/ai"
import pic from '../../../src/logo.png'
function Header(){
   const [menu, setMenu]= useState(false)
   const Navitems=[
    {
        if:1,
        text:"Home"
    },
    {
        if:2,
        text:"Grid"
    },
    {
        if:3,
        text:"LinkedIn"
    }
   ]

    return(
        <>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow:md fixed top=0 left=0 right=0">

        <div className="flex justify-between items-center h-16">

{/* left side */}
    <div className="flex space-x-2 ">
<img src= {pic} className= "h-12 w-16 rounded-full" alt="logo" />
<h1 className="font-semibold text-xl cursor-pointer">Venu <span className="text-green-500 text-2xl">V</span>
<p className="text-sm" >Student </p>
</h1>
</div>

{/* right side */}
<div>
{/* desktop device navbar */}
  <ul className="hidden md:flex space-x-8">
    {/* <li>Home</li>
    <li>Grid</li>
    <li>LinkedIn</li> */}
    {
        Navitems.map(({id,text})=>(
            <li lassName="hover:scale-105 duration 200 cursor-pointer" key={id}>{text}</li>
        ))
    }
  </ul>
</div> 
{/* menu bar- in main div only */}
<div onClick={()=>setMenu(!menu)} className="md:hidden ">{!menu ? < AiOutlineMenu size={24}  /> : <IoCloseSharp size={24}/>}
</div>
        </div>

        {/* small device navbar */}
        {menu &&
         <div>
         <ul className="md:hidden flex flex-col items-center justify-center space-y-4">
         {
        Navitems.map(({id,text})=>(
            <li className="hover:scale-105 duration 200 cursor-pointer font-semibold text-xl"  key={id}>{text}</li>
        ))
    }     
         </ul>
     </div>
        }
       
        </div>
        </>
    )
}

export default Header;