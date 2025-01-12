import React from "react";

const Card = ({person}) => {
    const{image,name,profession}=person;
 
  return (
      <div className="w-60 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img className="w-full h-full object-cover"src={image} alt="card-image"/>
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold text-2xl">{name}</h2>
            <p className="text-md mt-5">{profession}</p>
          </div>
        </div>
    
  );
};

export default Card;
