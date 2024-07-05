import React from "react";
import { useForm } from "react-hook-form";
export const Form = (({HandleData})=>{
    const {register , handleSubmit ,reset} = useForm();
    const handleformSubmit =((data)=>{
           HandleData(data);
            reset();
        
    }
    
    )
    return (
        <div className="m-3 gap-2 flex ">
            <form className="m-3 gap-2 flex " onSubmit={handleSubmit(handleformSubmit)}>
            <input  {...register("Name")} className="px-2 font-semibold  rounded-md outline-none text-base"type="text" placeholder="Name" />
            <input  {...register("Email")} className="px-2 font-semibold  rounded-md outline-none text-base"type="text" placeholder="Email" />
            <input  {...register("URL")} className="px-2 font-semibold  rounded-md outline-none text-base"type="text" placeholder="IMG url"/> 
            <input       className="px-4 py-2 bg-orange-500 rounded-md text-white font-semibold cursor-pointer"  type="submit" />
      
            </form>
              </div>
    )

})