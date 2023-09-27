import React from "react";
// import FoodData from '../data/FoodData';
import { AiFillStar } from "react-icons/ai";

const FoodCard = ({ name, id, price, desc, rating, img }) => {
  return (
    <div className="font-bold w-[250px] bg-gray-100 p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[140px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;