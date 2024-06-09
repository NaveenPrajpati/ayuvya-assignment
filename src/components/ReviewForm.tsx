"use client";
import { useState } from "react";
import { CiBatteryFull } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import { IoMdClose, IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import {
  MdBatteryFull,
  MdNetworkWifi3Bar,
  MdOutlineNetworkCell,
} from "react-icons/md";

type proptye = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
};

const StarRating = ({ rating, setRating }: proptye) => {
  const handleClick = (index: number) => {
    setRating(index);
  };

  return (
    <div className="flex mt-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <svg
          key={index}
          onClick={() => handleClick(index)}
          className={`w-8 h-8 cursor-pointer ${
            index <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927C9.308 2.354 10 2.354 10.24 2.927l1.64 3.32 3.662.53c.375.054.525.516.253.778l-2.65 2.58.625 3.64c.065.38-.333.671-.68.49L10 13.39l-3.265 1.716c-.347.18-.746-.11-.68-.49l.625-3.64-2.65-2.58c-.272-.262-.122-.724.253-.778l3.662-.53 1.64-3.32z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewForm = () => {
  const [safetyRating, setSafetyRating] = useState<number>(0);
  const [communicationRating, setCommunicationRating] = useState<number>(0);
  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [selectedPraise, setSelectedPraise] = useState<string | null>(null);
  const praiseData = ["Adventurous", "Clean", "Good listener"];

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return (
    <div className="max-w-lg mx-auto px-2 bg-white rounded-2xl shadow-md text-black">
      <div className="flex justify-between items-center text-xs font-bold">
        <div className=" font-semibold">{`${hours}:${minutes}`}</div>
        <div className="flex items-center gap-x-1">
          <MdOutlineNetworkCell />
          <MdNetworkWifi3Bar />
          <MdBatteryFull className=" rotate-90" size={18} />
        </div>
      </div>
      <IoMdClose className=" text-black font-bold" size={22} />
      <h2 className="text-2xl font-bold mb-4 text-black">Leave a review</h2>

      <div className="mb-4">
        <label className="text-lg font-bold text-gray-700">Safety</label>
        <p className=" text-xs text-gray-400">
          Lorem ipsum dolor sit amet dsf dsf s
        </p>
        <StarRating rating={safetyRating} setRating={setSafetyRating} />
      </div>

      <div className="mb-4">
        <label className="text-lg font-bold text-gray-700">Communication</label>
        <p className=" text-xs text-gray-400">
          Lorem ipsum dolor sit amet dsaf saf svsv{" "}
        </p>
        <StarRating
          rating={communicationRating}
          setRating={setCommunicationRating}
        />
      </div>

      <div className="mb-4">
        <label className="text-lg font-bold text-gray-700">
          Would you recommend Trausti?
        </label>
        <p className=" text-xs text-gray-400">Lorem ipsum dolor sit amet</p>
        <div className="flex gap-10 mt-3">
          <button
            className="flex items-center gap-2"
            onClick={() => setRecommend(true)}
          >
            <IoMdThumbsDown
              fontSize={26}
              className={` ${
                recommend === true ? " text-green-500" : "text-gray-300"
              }`}
            />
            <p
              className={` font-semibold ${
                recommend === true ? " text-green-500" : "text-gray-300"
              }`}
            >
              No
            </p>
          </button>
          <button
            onClick={() => setRecommend(false)}
            className="flex items-center gap-2"
          >
            <IoMdThumbsUp
              fontSize={26}
              className={` ${
                recommend === false ? " text-green-500" : "text-gray-300"
              }`}
            />
            <p
              className={` font-semibold ${
                recommend === false ? " text-green-500" : "text-gray-300"
              }`}
            >
              Yes
            </p>
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-lg font-bold text-gray-700">Praise</label>
        <p className=" text-xs text-gray-400">Lorem ipsum dolor sit amet</p>
        <div className="flex mt-3 gap-x-1">
          {praiseData.map((item, index) => (
            <span
              onClick={() => setSelectedPraise(index)}
              key={index}
              className={`px-3 py-2 ${
                selectedPraise == index ? "bg-green-300" : "bg-gray-100"
              }  rounded-full text-black font-medium text-sm cursor-pointer`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
