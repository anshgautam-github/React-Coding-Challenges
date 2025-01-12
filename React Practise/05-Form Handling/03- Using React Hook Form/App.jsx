//npm i react-hook-form

import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
 
  const {register,handleSubmit}=useForm();

  return (
    <div className="p-4">
      <h5>Form</h5>
      <form action="" onSubmit={handleSubmit((data)=>console.log(data))}>
        <input {...register("name")} className="border-2 px-1 py-1 mx-2" type="text" placeholder="Name"autoComplete="off"/>
        <input {...register("password")} type="password" placeholder="password"autoComplete="off"/>
        <input
         className="px-3 py-1 bg-sky-600 rounded-sm text-white text-sm"
          type="submit"
        />
      </form>
    </div>
  );
};

export default App;
