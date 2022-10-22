// import { useRef, useEffect, useState } from "react";
// import moon from "./moon.png";
// import land from "./land.png";
// import cat from "./cat.gif";
// import topdesign from "./topdesign.svg";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";




// function App() {

//   const [topdesign,setTopdesign] = useState('-top-[100%]')
//   const [topbottom,setBottomdesign] = useState('-bottom-[100%]')
//   const [toptextOpacity,setToptextopacity] = useState('opacity-0')
//   const [topdesignWidth , setTopdesignWidth] = useState(200)

//   const [count, setCount] = useState(10) 
//   const ref = useRef();


  


// useEffect(() => {
// setTimeout(() => {
//   setTopdesign('top-[100px]')
//   setBottomdesign('bottom-[0px]')
// }, 1000);
// setTimeout(() => {
//   setBottomdesign('bottom-[0px]')
// }, 500);
// setTimeout(() => {
//   setToptextopacity('opacity-1')
// }, 1500);
// }, [])


// const onScroll = ()=>{
//   if (topdesignWidth == 200){
//   setTopdesignWidth(20);
//   setToptextopacity('opacity-0')
//   setTopdesign('top-[600px]')
//   }
//   else{
//   setTopdesignWidth(200);
//   setTopdesign('top-[100px]')
//   setToptextopacity('opacity-1')
//   }
//     // console.log(topdesign);
//     // console.log(count);
//   };
  



//   return (
//     <div  >


//       <Parallax pages={4} ref={ref}>
//         <ParallaxLayer   offset={0} speed={0.1}>
//           <div className="w-[100vw] h-[100vh] flex flex-col relative justify-center items-center" onWheel={onScroll}>
//           <img src="./Images/topdesign1.png" className={`transition-all duration-[2000ms] ease-in  absolute ${topdesign}`}  alt="" width={`${topdesignWidth}`} height={200}/>
          <p className={`text-2xl font-semibold text-[#2a60a5] absolute right-[50px] bottom-[150px] transition-all duration-[2500ms] ease-in ${toptextOpacity}`}>A PURIFED ECOSYSTEM FOR WEB3</p>
//           <img src="./Images/1stbottom.png" className={`transition-all duration-[1500ms] ease-in  absolute ${topbottom}`} alt="" width={300} height={300}/>
//           </div>
//         </ParallaxLayer>
//         <ParallaxLayer   offset={1} speed={0.1}>
//           <div className="w-[100vw]  flex flex-col justify-between items-center">
//           <img src="./Images/2ndpgdesign.png" className="" alt="" width={200} height={200}/>
//           <img src="./Images/2ndpgbase.png" className="" alt="" width={300} height={300}/>
//           </div>
//         </ParallaxLayer>
//         <ParallaxLayer   offset={2} speed={0.1}>
//           <div className="w-[100vw] h-full flex flex-col justify-end gap-24 items-center">
//           <div className="flex flex-col justify-center items-center">
//           <div className="flex justify-center items-end gap-[2px]">
//           <img src="./Images/cube.png" className="animate-pulse" alt="" width={30} />

        //   </div>
        //   <div className="flex justify-center items-end gap-[2px]">
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={30} />
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={35} />
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={40} />
        //   </div>
        //   <div className="flex justify-center items-end gap-[2px]">
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={50} />
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={70} />
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={60} />
        //   </div>
        //   <div className="flex justify-center items-center gap-[2px]">
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={70} />
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={90} />
        //   <img src="./Images/cube.png" className="animate-pulse" alt="" width={70} />
        //   </div>
        //   </div>
//           <img src="./Images/cubebase.png" className="" alt="" width={300} height={300}/>
//           </div>
//         </ParallaxLayer>
//         <ParallaxLayer   offset={3} speed={0.1}>
//           <div className="w-[100vw] flex flex-col gap-4 justify-between items-center">
//           <img src="./Images/bottomtop.png" className="" alt="" width={400} />
//           <div className="flex gap-10">
        //   <img src="./Images/bottomdesign1.png" className="" alt="" width={70} />
        //   <img src="./Images/bottomdesign2.png" className="" alt="" width={70} />
        //   <img src="./Images/bottomdesign3.png" className="" alt="" width={70} />
//           </div>
//           <div className="flex gap-10">
            // <p className="text-xl font-semibold text-[#2a60a5]">PURIFY.</p>
            // <p className="text-xl font-semibold text-[#2a60a5]">SUSTAIN.</p>
            // <p className="text-xl font-semibold text-[#2a60a5]">EARN</p>
//           </div>
//           <img src="./Images/bottombase.png" className="w-full" alt=""/>
//           </div>
//         </ParallaxLayer>


// {/*       
//         <ParallaxLayer
//           offset={2}
//           speed={1}
//           >
//           <div className=" w-[100vw] h-[100vh] flex flex-col justify-between items-center">
//           <img src="./Images/bottomtop.png" className="" alt="" width={100} height={100}/>
//           <img src="./Images/basebottom.png" className="w-full" alt="" />
//           </div>

//         </ParallaxLayer> */}
// {/* 
//         <ParallaxLayer
//           sticky={{ start: 0.9, end: 2.5 }}
//           style={{ textAlign: 'center' }}
//         >
//           <img src={cat} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={0.2}
//           speed={0.05}
//           onClick={() => ref.current.scrollTo(3)}
//         >
//           <h2>Welcome to my website</h2>
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={3}
//           speed={2}
//           onClick={() => ref.current.scrollTo(0)}
//         >
//           <h2>Hi Mom!</h2>
//         </ParallaxLayer> */}
//       </Parallax>
//     </div>
//   );
// }

// export default App;
