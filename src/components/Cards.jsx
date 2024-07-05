import React from "react";
import { Card } from "./Card";
export const Cards = (({users ,handleRemove})=>{
    return (
        // this is a card component
        <div className="overflow-auto max-h-80 px-40 w-full h-60  flex justify-center flex-wrap gap-5 items-center">
            {
                users.map((item, index)=>{
                   return(
                       <Card handleRemove={handleRemove} key={index} id={index} user={item}/>
                       
                   ) 

                })
            }
            
        </div>
    )



})