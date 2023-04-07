import React from "react";
import { styles } from "../style";

const Banner = () => {
  return (
    <div className="h-[50vh] max-w-2xl mx-auto text-center">
      <h2 className={`${styles.heroHeadText} drop-shadow sm:pt-28 pt-20 `}>
        Let the Game begin
      </h2>
      <p className={`${styles.heroSubText} drop-shadow`}>
        Gaming with new perspective
      </p>
    </div>
  );
};

export default Banner;
