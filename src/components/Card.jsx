import React from "react";

export const Card = (({user , handleRemove ,id})=>{

    return (  
        <div className="card bg-white w-44 px-3   rounded-md">
            <div className="image w-10 max-h-8 mx-auto mt-3  rounded-full">
                <img className=" object-cover rounded-full" src={user.URL} alt="" />
            </div>
           <div >
            <h2 className="text-center mt-2 text-xl font-semibold" >{user.Name}</h2>
            <h4 className="opacity-70 text-md text-center">{user.Email}</h4>
            <p className="text-xs text-center mt-2 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, quas.</p>
           </div>
           <div className="flex justify-center items-center">
           <button onClick={()=>handleRemove(id)} className="text-sm font-semibold mx-auto bg-orange-600 m-2 px-2 py-1 rounded-md text-white " >Remove it </button>

           </div>
        </div>
    )


})

