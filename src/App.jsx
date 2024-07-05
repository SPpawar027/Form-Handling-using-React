import React from 'react';
import { Cards } from './components/Cards';
import { Form } from './components/Form';
import { useState } from'react';

function App (){
  const [users, setusers ] = useState([])
  const HandleData = ((data)=>{
    return setusers([...users ,data])
  })

  const handleRemove = ((id)=>{
    return (
        setusers(()=>users.filter((item,index)=>index!=id))
    )
  })

  return (
    <div className="bg-zinc-300 flex flex-col justify-center items-center w-full h-screen">
      <Cards handleRemove={handleRemove} users={users}/>
      <Form  HandleData={HandleData}/>
    </div>
  )


}
export default App;
