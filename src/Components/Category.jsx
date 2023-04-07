import React from "react";
import { styles } from "../style";

const categories = [
  "Action",
  "Adventure",
  "Arcade",
  "Fighting",
  "Horror",
  "Logic",
  "Puzzle",
  "Racing",
  "RPG",
  "Shooter",
  "Simulators",
  "Sports",
  "Strategy",
];

const CategoryBtn = ({ category }) => {
  return (
    <button className="hover:scale-105 bg-gray-300 rounded-2xl py-1 px-6 text-black font-semibold border hover:border-orange-200 hover:text-orange-500 transition">
      {category}
    </button>
  );
};

const Category = () => {
  return (
    <div className="text-gray-200 flex sm:flex-row flex-col-reverse sm:gap-2 gap-10 justify-center items-center sm:mx-10 py-10">
      <div className="sm:w-1/3 flex flex-col gap-3 sm:text-start text-center sm:items-start items-center">
        <h3 className={`${styles.sectionHeadText} text-white`}>
          Game Categories
        </h3>
        <h2 className={`${styles.sectionSubText} text-white`}>
          Find Latest and Trending Games...{" "}
        </h2>
        <button className="rounded-2xl text-semibold sm:text-[18px] text-[16px] text-white bg-orange-500 py-3 px-5 sm:w-[200px] w-[160px] hover:bg-orange-600">
          Browse Now &rarr;
        </button>
      </div>
      <div className="sm:w-1/2 text-center mx-4">
        <h2 className={`${styles.sectionHeadText} mb-2`}>
          Trending Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <CategoryBtn category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
