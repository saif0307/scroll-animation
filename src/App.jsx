import { useRef, useEffect, useState} from "react";

import { Parallax } from "react-scroll-parallax";

import {
  ScrollContainer,
  Animator,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function App() {
  const [topimageWidth, setTopimagewidth] = useState(250);
  const [secondimageWidth, setSecondimagewidth] = useState(1);
  const [cubewidth, setCubewidth] = useState(0);
  const [imageScale ,setImagescale]= useState(false);
  const [topImagePadding ,setTopImagePadding] = useState(-40);
  const [secondImagePadding, setSecondimagePadding] = useState(90);
  const [cubePadding, setCubepadding]  = useState(90);

  const ref = useRef();

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    console.log(ScrollPercent,'scrollpercent')
    
    if (ScrollPercent < 10 ) {
      setTopimagewidth(250);
      setTopImagePadding(-50);
      setImagescale(false);
    } else if (ScrollPercent < 11 ) {
      setImagescale(true);
      setTopimagewidth(50);
      setTopImagePadding(-25);
      setSecondimagewidth(10);

    } else if (ScrollPercent < 14) {
      setTopimagewidth(20);
      setTopImagePadding(-25);
    } else if (ScrollPercent < 21) {
      setSecondimagewidth(40);
      setImagescale(true);
      setSecondimagePadding(50);
    } else if (ScrollPercent > 95) {
      setSecondimagewidth(250);
    } 
    else if (ScrollPercent > 71) {
      setSecondimagewidth(1);
      setCubewidth(0);
      setCubepadding(33);
    }else if (ScrollPercent > 70) {
      setSecondimagewidth(1);
      setCubewidth(2);
      setCubepadding(33);
    } else if (ScrollPercent > 52) {
      setSecondimagewidth(250);
      setCubewidth(9);
      setCubepadding(20);
    } 
    else if (ScrollPercent > 40) {
      setSecondimagewidth(20);
      setSecondimagePadding(65);
      setCubewidth(1);
    }else if (ScrollPercent > 38) {
      setSecondimagewidth(50);
      setSecondimagePadding(60);
      setCubewidth(1);
    } 
else if (ScrollPercent > 21) {
      setSecondimagewidth(250);
      setImagescale(false);
      setSecondimagePadding(40);
    }
  };


  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
      // setTimeout(()=>{
      //   const body = document.body,
      //     jsScroll = document.getElementsByClassName("js-scroll")[0],
      //     height = jsScroll.getBoundingClientRect().height - 1,
      //     speed = 0.05;
    
      //   var offset = 0;
    
      //   body.style.height = Math.floor(height) + "px";
    
      //   function smoothScroll() {
      //     offset += (window.pageYOffset - offset) * speed;
      //     var scroll = "translateY(-" + offset + "px) translateZ(0) ";
      //     jsScroll.style.transform = scroll;
      //     onScroll(offset,height)
      //     let raf = requestAnimationFrame(smoothScroll);
      //   }
    
      //   smoothScroll();
      //   console.log(height, "height");
      //   console.log(offset, "offset");
      //   console.log(jsScroll.getBoundingClientRect().height, "vxv");
      //   console.log(jsScroll, "sdfd");
      // },2000)
    },[])  
  


  return (
    <div >
    <div className="">
      <ScrollContainer className="transition-all duration-[1000] ">
        <ScrollPage page={0} className='z-20'>
          <Animator animation={batch(Sticky(50, topImagePadding), MoveOut(-20, window.innerHeight*1.4))}>
            <img
              src="./Images/topdesign1.png"
              // style={{ transform: `scale(0.${topimageWidth})` }}
              className={`transition-all duration-1000 ${imageScale ? 'transition': 'animate-wiggle' }`}
              alt=""
              width={topimageWidth}
            />
          </Animator> 
        </ScrollPage>
        <ScrollPage page={1} className='z-0'>
          <Animator
            animation={batch(
              StickyIn(78, 50),
              FadeIn(),
              FadeOut(0,-200)
            )}
          >
            <p
              className={`text-3xl text-[#2a60a5] font-bold transition-all duration-[2500ms] whitespace-nowrap`}
            >
              A PURIFED ECOSYSTEM FOR WEB3
            </p>
          </Animator>
          <Animator animation={batch(Sticky(50, 80), MoveOut(0, -1000)) }>
            <img
              src="./Images/1stbottom.png"
              className=""
              alt=""
              width={300}
              height={300}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator
            animation={batch(
              Sticky(50, secondImagePadding),
              FadeIn(),
              MoveIn(20, 200),
              MoveOut(0, 200)
            )}
          >
            <img
              src="./Images/2ndpgdesign.png"
              // style={{ transform: `scale(0.${secondimageWidth})` }}
              className={` ${imageScale ? 'transition-all': 'animate-wiggle'}`}
              alt=""
              width={secondimageWidth}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator
            animation={batch(
              Sticky(22, 50),

              FadeIn(),
              FadeOut(0,-200)


            )}  >
            <p
              className={`text-3xl text-[#2a60a5] font-bold transition-all duration-[2500ms] ease-in`}
            >
              THAT FILTERS CONTENT
            </p>
          </Animator>

          <Animator
            animation={batch(Sticky(50, 90), MoveOut(0, -1000), FadeIn())}
          >
            <img
              src="./Images/2ndpgbase.png"
              className=""
              alt=""
              width={300}
              height={300}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator
            animation={batch(
              Sticky(50, cubePadding),
              FadeIn(),
              MoveIn(-10, 600),
              MoveOut(0, 300)
            )}
          >
            <div
              style={{ transform: `scale(0.${cubewidth})` }}
              className={`flex flex-col z-10 justify-center items-center transition-all duration-[200ms] ease-linear`}
            >
              <div className="flex justify-center items-end gap-[2px]">
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={30}
                />
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={35}
                />
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={40}
                />
              </div>
              <div className="flex justify-center items-end gap-[2px]">
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={50}
                />
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={70}
                />
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={60}
                />
              </div>
              <div className="flex justify-center items-center gap-[2px]">
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={70}
                />
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={90}
                />
                <img
                  src="./Images/cube.png"
                  className="animate-wiggle"
                  alt=""
                  width={70}
                />
              </div>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
        <Animator animation={batch(Sticky(78, 95),FadeIn(), FadeOut(0,-200))}>
            <p
              className={`text-3xl text-[#2a60a5] w-full font-bold transition-all duration-[2500ms] ease-in whitespace-nowrap`}
            >
              AND CREDITS LEGITIMACY
            </p>
          </Animator>
          <Animator
            animation={batch(Sticky(50, 88), MoveOut(0, -600), FadeIn() )}
          >
            <img src="./Images/cubebase.png" className="z-0" alt="" width={400} />
          </Animator>

        </ScrollPage>
        <ScrollPage page={6}>
          <Animator
            animation={batch(
              Sticky(50, 40),
              FadeIn(),
              MoveIn(10, 500),
              MoveOut(0, 200)
            )}
          ></Animator>
        </ScrollPage>
        <ScrollPage page={7}>
          <Animator animation={batch(Sticky(50, 7))}>
            <img
              src="./Images/bottomtop.png"
              className="transition-all   ease-in"
              alt=""
              width={400}
            />
          </Animator>
          <Animator animation={batch(Sticky(50, 30), FadeIn())}>
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-center items-center gap-4">
                <div>
                  <img
                    src="./Images/bottomdesign1.png"
                    className="transition-all duration-[500ms]  ease-in"
                    alt=""
                    width={120}
                    // style={{ transform: `scale(0.${secondimageWidth})` }}
                  />
                </div>
                <div>
                  <img
                    src="./Images/bottomdesign3.png"
                    className="transition-all  duration-[500ms]   ease-in"
                    alt=""
                    width={120}
                    // style={{ transform: `scale(0.${secondimageWidth})` }}
                  />
                </div>
                <div>
                  <img
                    src="./Images/bottomdesign2.png"
                    className="transition-all duration-[500ms]    ease-in"
                    alt=""
                    width={120}
                    // style={{ transform: `scale(0.${secondimageWidth})` }}
                  />
                </div>
              </div>
              <div className="flex gap-4 w-full justify-between items-center">
                <p className="text-xl font-semibold text-[#2a60a5]">PURIFY.</p>
                <p className="text-xl font-semibold text-[#2a60a5]">SUSTAIN.</p>
                <p className="text-xl font-semibold text-[#2a60a5]">EARN.</p>
              </div>
            </div>
          </Animator>
          <Animator animation={FadeIn()}>
            <img
              src="./Images/bottombase.png"
              className="w-[100vw] fixed bottom-0"
              alt=""
            />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
    </div>
  );
}

export default App;
