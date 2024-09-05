/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useContext, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { SlideContext } from "../../../../layout/Root";
import "./Banner.css";

const Banner = () => {
  const slideData = useContext(SlideContext);
  const setSlideNo = slideData?.setSlideNo;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  console.log(currentSlide);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 0,
      },
      vertical: window.innerWidth > 768 ? true : false,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
        setSlideNo(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    }
    // [
    //   (slider) => {
    //     let timeout;
    //     let mouseOver = false;
    //     function clearNextTimeout() {
    //       clearTimeout(timeout);
    //     }
    //     function nextTimeout() {
    //       clearTimeout(timeout);
    //       if (mouseOver) return;
    //       timeout = setTimeout(() => {
    //         slider.next();
    //       }, 3000);
    //     }
    //     slider.on("created", () => {
    //       // this is to stop autoplay when the mouse enters the slider
    //       //   slider.container.addEventListener("mouseover", () => {
    //       //     mouseOver = true;
    //       //     clearNextTimeout();
    //       //   });

    //       // this is to start autoplay when the mouse leaves the slider
    //       slider.container.addEventListener("mouseout", () => {
    //         mouseOver = false;
    //         nextTimeout();
    //       });
    //       nextTimeout();
    //     });
    //     slider.on("dragStarted", clearNextTimeout);
    //     slider.on("animationEnded", nextTimeout);
    //     slider.on("updated", nextTimeout);
    //   },
    // ]
  );

  return (
    <div>
      <div className="relative navigation-wrapper">
        <div className={`absolute bottom-10 left-10 z-10 duration-300 flex gap-5 ${currentSlide === 1 && "text-black"}`}>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
        </div>
        <div ref={sliderRef} className="keen-slider h-[100dvh] sm:h-[59.375rem] max-h-[930px]">
          {/* slide 1 */}
          <div className="keen-slider__slide number-slide1">
            <div className="max-w-[1440px] w-10/12 mx-auto flex flex-col justify-center sm:items-center h-full">
              <div className="text-white sm:pl-[15rem] md:pl-[21.25rem] mt-8 text-right sm:text-left sm:-mt-24 md:mt-0">
                <motion.p
                  className="text-[#777777] text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] tracking-wider uppercase font-light mb-8 sm:ml-6 md:ml-8"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 100,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                  initial="initial"
                  whileInView="animate"
                >
                  Hi, My name is <span className="text-white">Jhon</span> and I love
                </motion.p>
                <motion.h1
                  className="sm:-ml-4 text-[3rem] sm:text-[3.9rem] md:text-[4.375rem] leading-[1.2] font-thin font-josefin"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 100,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                  initial="initial"
                  whileInView="animate"
                >
                  Sketching & <span className="block uppercase md:ml-[7.8125rem] text-black">Painting</span>
                </motion.h1>
                <motion.button
                  onClick={() => {
                    document.getElementById("name-input").focus();
                    document.getElementById("book-now")?.scrollIntoView();
                  }}
                  className="font-josefin text-sm sm:text-base border border-[#ffffff33] px-6 pt-3 pb-2 mt-7 sm:ml-[6.25rem] rounded-full uppercase duration-300 hover:border-white active:scale-90"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 100,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        delay: 0.5,
                      },
                    },
                  }}
                  initial="initial"
                  whileInView="animate"
                >
                  My portfolio
                </motion.button>
              </div>
            </div>
          </div>

          {/* slide 2 */}
          <div className="keen-slider__slide number-slide2">
            <BannerComponent />
          </div>
        </div>
        <div className="absolute bottom-10 right-10 md:static">
          {loaded && instanceRef.current && (
            <>
              <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

              <Arrow
                onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <button
      onClick={props.onClick}
      className={`btn-arr md:opacity-0 size-10 md:size-[4.375rem] flex justify-center items-center text-2xl bg-[#252525] text-white rounded-full arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
    >
      {props.left && <FaAngleLeft className="btn-arr-child" />}
      {!props.left && <FaAngleRight className="btn-arr-child" />}
    </button>
  );
}

function BannerComponent() {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto flex flex-col justify-center items-center h-full sm:pt-[7.5rem] md:pt-[17.5rem]">
      <div className="text-white text-center">
        <motion.h1
          className="md:max-w-[60.625rem] mx-auto text-[3.125rem] md:text-[5.625rem] font-bold leading-[3.75rem] md:leading-[6.25rem] tracking-[-0.02rem]"
          variants={{
            initial: {
              opacity: 0,
              y: -100,
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
        >
          Your Trusted Private Hire Company
        </motion.h1>
        <motion.p
          className="md:max-w-[31.25rem] text-[#cacaca] mx-auto text-xl md:text-[1.875rem] leading-7 md:leading-[2.5rem] font-medium mt-[2.6875rem] mb-10"
          variants={{
            initial: {
              opacity: 0,
              y: 100,
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
        >
          Enjoy a comfortable trip with surtys private hire
        </motion.p>
        <motion.button
          onClick={() => {
            document.getElementById("name-input").focus();
            document.getElementById("book-now")?.scrollIntoView();
          }}
          className="font-semibold bg-primary-color text-dark text-lg rounded-[2.4375rem] py-[1.3438rem] px-[3.6875rem] duration-[.4s] hover:bg-white active:scale-90"
          variants={{
            initial: {
              opacity: 0,
              y: -50,
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
}
