import { useRef, useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SmothScrolling from "./Components/SmothScrolling";

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
  const [topimageWidth, setTopimagewidth] = useState(9);
  const [secondimageWidth, setSecondimagewidth] = useState(1);
  const ref = useRef();
  const onScroll = () => {
    console.log("first-----------------");
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;

    if (ScrollPercent < 11) {
      setTopimagewidth(9);
    } else if (ScrollPercent < 13) {
      setTopimagewidth(0);
      setSecondimagewidth(1);
    } else if (ScrollPercent < 23) {
      setSecondimagewidth(1);
    } else if (ScrollPercent > 95) {
      setSecondimagewidth(9);
    } else if (ScrollPercent > 70) {
      setSecondimagewidth(1);
    } else if (ScrollPercent > 52) {
      setSecondimagewidth(9);
    } else if (ScrollPercent > 40) {
      setSecondimagewidth(1);
    } else if (ScrollPercent > 23) {
      setSecondimagewidth(9);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div>

      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(50, -50), MoveOut(0, 1100))}>
            <img
              src="./Images/topdesign1.png"
              style={{ transform: `scale(0.${topimageWidth})` }}
              className={`transition-all animate-wiggle duration-[200ms] ease-linear`}
              alt=""
              width={250}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator
            animation={batch(
              Sticky(70, 70),
              MoveIn(2000, 0),
              MoveOut(0, -1000),
              Fade()
            )}
          >
            <p
              className={`text-3xl text-[#2a60a5] font-bold transition-all duration-[2500ms]`}
            >
              A PURIFED ECOSYSTEM FOR WEB3
            </p>
          </Animator>
          <Animator animation={batch(Sticky(50, 80), MoveOut(0, -1000))}>
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
              Sticky(50, 30),
              FadeIn(),
              MoveIn(10, 600),
              MoveOut(0, 230)
            )}
          >
            <img
              src="./Images/2ndpgdesign.png"
              style={{ transform: `scale(0.${secondimageWidth})` }}
              className={`transition-all animate-wiggle duration-[500ms] ease-in`}
              alt=""
              width={250}
              
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator
            animation={batch(
              Sticky(30, 70),
              MoveIn(-1000, 0),
              MoveOut(0, -1000),
              Fade()
            )}
          >
            <p
              className={`text-3xl text-[#2a60a5] font-bold transition-all duration-[2500ms] ease-in`}
            >
              THAT FILTERS CONTENT
            </p>
          </Animator>
      {/* <SmothScrolling /> */}

          <Animator
            animation={batch(Sticky(50, 85), MoveOut(0, -1000), FadeIn())}
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
              Sticky(50, 30),
              FadeIn(),
              MoveIn(-10, 600),
              MoveOut(0, 300)
            )}
          >
            <div
              style={{ transform: `scale(0.${secondimageWidth})` }}
              className={`flex flex-col justify-center items-center transition-all duration-[200ms] ease-linear`}
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
          <Animator
            animation={batch(Sticky(50, 90), MoveOut(0, -600), FadeIn())}
          >
            <img src="./Images/cubebase.png" className="" alt="" width={400} />
          </Animator>
          <Animator animation={batch(Sticky(76, 90), MoveOut(0, -600), Fade())}>
            <p
              className={`text-3xl text-[#2a60a5] font-bold transition-all duration-[2500ms] ease-in`}
            >
              THAT FILTERS CONTENT
            </p>
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
          <Animator animation={batch(Sticky(50, 5))}>
            <img
              src="./Images/bottomtop.png"
              className="transition-all   ease-in"
              alt=""
              width={400}
            />
          </Animator>
          <Animator animation={batch(Sticky(50, 25), FadeIn())}>
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-center items-center gap-4">
                <div>
                  <img
                    src="./Images/bottomdesign1.png"
                    className="transition-all duration-[500ms] ease-in"
                    alt=""
                    width={120}
                    style={{ transform: `scale(0.${secondimageWidth})` }}
                  />
                </div>
                <div>
                  <img
                    src="./Images/bottomdesign3.png"
                    className="transition-all  duration-[500ms]  ease-in"
                    alt=""
                    width={120}
                    style={{ transform: `scale(0.${secondimageWidth})` }}
                  />
                </div>
                <div>
                  <img
                    src="./Images/bottomdesign2.png"
                    className="transition-all duration-[500ms]   ease-in"
                    alt=""
                    width={120}
                    style={{ transform: `scale(0.${secondimageWidth})` }}
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
  );
}

export default App;
