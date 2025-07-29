import React from "react";
import { Link } from "react-router-dom";
import { TbShoe } from "react-icons/tb";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineSubtitles } from "react-icons/md";
import { useState } from "react";
import ShoeModal from "./ShoeModal";

//reusable component for shoe card.
const ShoeSingleCard = ({ shoe }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={shoe._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {shoe.brand}
      </h2>
      <h4 className="my-2 text-gray-500">{shoe._id}</h4>
      <div className="flex justify-start shoes-center gap-x-2">
        <TbShoe className="text-red-300 text-2xl" />
        <h2>Title:</h2>
        <h2>{shoe.title}</h2>
      </div>
      <div className="flex justify-start shoes-center gap-x-2">
        <MdOutlineSubtitles className="text-red-300 text-2xl" />
        <h2>Model:</h2>
        <h2>{shoe.model}</h2>
      </div>
      <div className="flex justify-between shoes-center gap-x-2 mt-4 p-4">
        <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer" 
        onClick = {() => setShowModal(true)}/>
        <Link to={`/shoes/details/${shoe._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/shoes/edit/${shoe._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/shoes/delete/${shoe._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <ShoeModal shoe = {shoe} onClose = {() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ShoeSingleCard;
