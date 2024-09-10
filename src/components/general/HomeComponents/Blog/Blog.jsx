import { GrAnnounce } from "react-icons/gr";
import blog11 from "../../../../assets/blogs-slides/blog-1-1.jpg";
import blog12 from "../../../../assets/blogs-slides/blog-1-2.jpg";
import blog13 from "../../../../assets/blogs-slides/blog-1-3.jpg";
import blog21 from "../../../../assets/blogs-slides/blog-2-1.jpg";
import blog22 from "../../../../assets/blogs-slides/blog-2-2.jpg";
import blog23 from "../../../../assets/blogs-slides/blog-2-3.jpg";
import blog31 from "../../../../assets/blogs-slides/blog-3-1.jpg";
import blog32 from "../../../../assets/blogs-slides/blog-3-2.jpg";
import blog33 from "../../../../assets/blogs-slides/blog-3-3.jpg";
import blog41 from "../../../../assets/blogs-slides/blog-4-1.jpg";
import blog42 from "../../../../assets/blogs-slides/blog-4-2.jpg";
import blog43 from "../../../../assets/blogs-slides/blog-4-3.jpg";
import SectionHeader from "../../../shared/SectionHeader/SectionHeader";
import "./Blog.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Blog = () => {
  return (
    <div className="pb-10">
      <SectionHeader title="Blog" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" />

      <div>
        {/* blog 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mt-8">
          <div>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3300,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Navigation]}
              className="flex justify-center items-center"
            >
              <SwiperSlide>
                <img src={blog11} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={blog12} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={blog13} />
              </SwiperSlide>

              <div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </Swiper>
          </div>

          <div className="max-w-[39.375rem] mx-auto text-center flex flex-col items-center justify-center px-8 sm:px-0">
            <h1 className="mb-5 font-josefin font-thin text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.5px] leading-[1.2]">Acrylic</h1>
            <p className="text-sm font-light leading-[1.875] mb-9">
              <strong className="font-bold">Acrylic painting,</strong> technique in which pigments are mixed with hot, liquid wax. After all of the colours have
              been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.
            </p>
            <button onClick={() => document.getElementById("portfolio")?.scrollIntoView()} className="blog-btn flex uppercase duration-300 active:scale-[0.8]">
              <span className="blog-btn-icon p-4 h-full bg-white text-xl text-secondary-color relative after:size-4 after:absolute after:bg-white after:translate-y-[-50%] after:top-[50%] after:rotate-45 after:right-[-0.5rem] duration-300 after:duration-300">
                <GrAnnounce />
              </span>
              <span className="blog-btn-text pt-4 pb-3 px-6 font-josefin bg-secondary-color duration-300">View Gallery</span>
            </button>
          </div>
        </div>

        {/* blog 2 */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 md:gap-0 mt-8 md:mt-0">
          <div className="max-w-[39.375rem] mx-auto text-center flex flex-col items-center justify-center px-8 sm:px-0">
            <h1 className="mb-5 font-josefin font-thin text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.5px] leading-[1.2]">
              Encaustic
            </h1>
            <p className="text-sm font-light leading-[1.875] mb-9">
              <strong className="font-bold">Encaustic painting,</strong> technique in which pigments are mixed with hot, liquid wax. After all of the colours
              have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform
              film.
            </p>
            <button onClick={() => document.getElementById("portfolio")?.scrollIntoView()} className="blog-btn flex uppercase duration-300 active:scale-[0.8]">
              <span className="blog-btn-icon p-4 h-full bg-white text-xl text-secondary-color relative after:size-4 after:absolute after:bg-white after:translate-y-[-50%] after:top-[50%] after:rotate-45 after:right-[-0.5rem] duration-300 after:duration-300">
                <GrAnnounce />
              </span>
              <span className="blog-btn-text pt-4 pb-3 px-6 font-josefin bg-secondary-color duration-300">View Gallery</span>
            </button>
          </div>

          <div>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3300,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Navigation]}
              className="flex justify-center items-center"
            >
              <SwiperSlide>
                <img src={blog21} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={blog22} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={blog23} />
              </SwiperSlide>
              <div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </Swiper>
          </div>
        </div>

        {/* blog 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mt-8 md:mt-0">
          <div>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3300,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Navigation]}
              className="flex justify-center items-center"
            >
              <SwiperSlide>
                <img src={blog31} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={blog32} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={blog33} />
              </SwiperSlide>
              <div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </Swiper>
          </div>

          <div className="max-w-[39.375rem] mx-auto text-center flex flex-col items-center justify-center px-8 sm:px-0">
            <h1 className="mb-5 font-josefin font-thin text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.5px] leading-[1.2]">
              Oil Painting
            </h1>
            <p className="text-sm font-light leading-[1.875] mb-9">
              <strong className="font-bold">Oil Painting,</strong> technique in which pigments are mixed with hot, liquid wax. After all of the colours have
              been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.
            </p>
            <button onClick={() => document.getElementById("portfolio")?.scrollIntoView()} className="blog-btn flex uppercase duration-300 active:scale-[0.8]">
              <span className="blog-btn-icon p-4 h-full bg-white text-xl text-secondary-color relative after:size-4 after:absolute after:bg-white after:translate-y-[-50%] after:top-[50%] after:rotate-45 after:right-[-0.5rem] duration-300 after:duration-300">
                <GrAnnounce />
              </span>
              <span className="blog-btn-text pt-4 pb-3 px-6 font-josefin bg-secondary-color duration-300">View Gallery</span>
            </button>
          </div>
        </div>

        {/* blog 4 */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 md:gap-0 mt-8 md:mt-0">
          <div className="max-w-[39.375rem] mx-auto text-center flex flex-col items-center justify-center px-8 sm:px-0">
            <h1 className="mb-5 font-josefin font-thin text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.5px] leading-[1.2]">Impasto</h1>
            <p className="text-sm font-light leading-[1.875] mb-9">
              <strong className="font-bold">Impasto,</strong> technique in which pigments are mixed with hot, liquid wax. After all of the colours have been
              applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.
            </p>
            <button onClick={() => document.getElementById("portfolio")?.scrollIntoView()} className="blog-btn flex uppercase duration-300 active:scale-[0.8]">
              <span className="blog-btn-icon p-4 h-full bg-white text-xl text-secondary-color relative after:size-4 after:absolute after:bg-white after:translate-y-[-50%] after:top-[50%] after:rotate-45 after:right-[-0.5rem] duration-300 after:duration-300">
                <GrAnnounce />
              </span>
              <span className="blog-btn-text pt-4 pb-3 px-6 font-josefin bg-secondary-color duration-300">View Gallery</span>
            </button>
          </div>

          <div>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3300,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Navigation]}
              className="flex justify-center items-center"
            >
              <SwiperSlide>
                <img src={blog41} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={blog42} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={blog43} />
              </SwiperSlide>
              <div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
