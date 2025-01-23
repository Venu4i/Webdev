import React from "react";
import { useState } from "react";

function Home(){
    const [clicked, setClicked] = useState(false);

        const Click = () => {
          const instagramProfileUrl ="https://www.instagram.com/venuvermaa?igsh=MWFqcG1oaWVndDZmdw==" ;
          window.open(instagramProfileUrl, "_blank");
          setClicked(true);
        }


      
    return(
        <>
        <div className="max-w-screen-2xl container mx-auto px-4 pmd:px-20 py-20 my-20 "> 
           <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                 <span> Hello!</span>
                 <h1>I am Venu Verma</h1>
                 <p > Registraton Number: 20243316  </p>
                    <button  className={`mt-4 px-6 py-2 rounded-lg transition ${
                clicked ? 'bg-gray-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
     onClick={Click} >My instagram  </button >
                
                    </div>
              <div>
                <img className="rounded-full md:h-450 md:ml-40 md:mt-16 "  src="" alt="Display picture" />
              </div>
            </div> 
        </div>
        </>
    )
}

export default  Home  ;