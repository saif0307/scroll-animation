import react, { useEffect, useState } from "react";
// import {useParallax} from 'react-scroll-parallax'
import useScrollProgress from "./useScrollProgress";
const Section = () => {
  const [completion, setCompletion] = useState(-320);

  // const updateScrollCompletion = () => {
  //     const currentProgress = (window.scrollY / 2) * 2;
  //     setCompletion(currentProgress)
  // }
  // window.addEventListener('scroll', updateScrollCompletion);

  console.log(useScrollProgress());

  return (
    <div className="h-[2000px] relative">
      <div className={`flex flex-col items-center `}>
        <img
          src="./Images/topdesign1.png"
          alt=""
          width={200}
          height={200}
          style={{ transform: `translateY(${completion}px)` }}
          className={` transition-all  ease-in `}
          id="img1"
        />

        <img
          src="./Images/1stbottom.png"
          className={`fixed transition-all   ease-in bottom-0`}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Section;
