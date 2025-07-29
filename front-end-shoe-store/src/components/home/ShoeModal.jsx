import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { TbShoe } from "react-icons/tb";
import { MdOutlineSubtitles } from "react-icons/md";

const ShoeModal = ({ shoe, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">{shoe.brand}</h2>
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
      </div>
    </div>
  );
};

export default ShoeModal;
