/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";
const Card = ({ actor , handleSetBookmark}) => {
   const { image, name, role, salary, id } = actor;
   return (
      <div className=" card bg-base-100 shadow-xl">
         <figure className="pt-6">
            <img className="w-2/3 " src={image} alt={name} />
         </figure>
         <div className="my-10 space-y-4 text-center">
            <h2 className="font-bold text-3xl">{name}</h2>
            <p className="font-semibold text-xl px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam, sunt libero exercitationem reiciendis quibusdam!</p>
            <div className=" flex justify-around font-bold text-xl ">
                <p>Salary : {salary}$</p>
                <p>Role : {role}</p>
            </div>
            <div className="card-actions justify-center mt-4">
               <button onClick={()=> handleSetBookmark(actor)} className="btn btn-success text-xl font-bold">Select</button>
            </div>
         </div>
      </div>
   );
};
Card.propTypes = {
   actor: PropTypes.object.isRequired,
   handleSetBookmark : PropTypes.func
};
export default Card;
