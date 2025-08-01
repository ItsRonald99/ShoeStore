import { Link } from "react-router-dom";
import { TbShoe } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineSubtitles } from "react-icons/md";
import ShoeSingleCard from "./ShoeSingleCard";

const ShoesCard = ({ shoes }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shoes.map((item) => (
        <ShoeSingleCard key={item._id} shoe={item} />
      ))}
    </div>
  );
};

export default ShoesCard;
