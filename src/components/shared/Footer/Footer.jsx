import { FaSquareFull } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { LuClock3, LuLink } from "react-icons/lu";
import { RxBoxModel } from "react-icons/rx";
import recentArt1 from "../../../assets/recent/recent-1.jpg";
import recentArt2 from "../../../assets/recent/recent-2.jpg";
import recentArt3 from "../../../assets/recent/recent-3.jpg";
import recentArt4 from "../../../assets/recent/recent-4.jpg";
import recentArt5 from "../../../assets/recent/recent-5.jpg";
import recentArt6 from "../../../assets/recent/recent-6.jpg";

const Footer = () => {
  const tags = ["Abstract", "Art", "Artwork", "Canvas", "Design", "Gallery", "Illustration", "Modern", "Painting", "Photography", "Sculpture"];
  const recentImages = [recentArt1, recentArt2, recentArt3, recentArt4, recentArt5, recentArt6];
  const recentNews = [
    { id: 1, title: "Quisque egestas rhoncus mauris", date: "17 Nov", comment: 0 },
    { id: 2, title: "Integer sed condimentum lacus", date: "17 Nov", comment: 0 },
    { id: 3, title: "Nam sodales tincidunt nunc", date: "17 Nov", comment: 1 },
  ];

  return (
    <footer>
      <div className="flex gap-3 items-center justify-center mx-auto py-4">
        <div className="w-[33%] h-[0.05rem] bg-[#464646d7]"></div>
        <FaSquareFull className="text-[#464646d7] rotate-45 text-[0.625rem]" />
        <RxBoxModel className="text-[#464646] rotate-45 text-3xl" />
        <FaSquareFull className="text-[#464646d7] rotate-45 text-[0.625rem]" />
        <div className="w-[33%] h-[0.05rem] bg-[#464646d7]"></div>

        <FaSquareFull className="text-[#464646d7] rotate-45 text-[0.625rem]" />
        <RxBoxModel className="text-[#464646] rotate-45 text-3xl" />
        <FaSquareFull className="text-[#464646d7] rotate-45 text-[0.625rem]" />
        <div className="w-[33%] h-[0.05rem] bg-[#464646d7]"></div>

        <FaSquareFull className="text-[#464646d7] rotate-45 text-[0.625rem]" />
        <RxBoxModel className="text-[#464646] rotate-45 text-3xl" />
        <FaSquareFull className="text-[#464646d7] rotate-45 text-[0.625rem]" />
        <div className="w-[33%] h-[0.05rem] bg-[#464646d7]"></div>

        <FaSquareFull className="hidden md:block text-[#464646d7] rotate-45 text-[0.625rem]" />
        <RxBoxModel className="hidden md:block text-[#464646] rotate-45 text-3xl" />
        <FaSquareFull className="hidden md:block text-[#464646d7] rotate-45 text-[0.625rem]" />
        <div className="hidden md:block w-[33%] h-[0.05rem] bg-[#464646d7]"></div>
      </div>

      <div className="max-w-[73.125rem] w-11/12 md:w-10/12 mx-auto grid gap-[1.875rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12">
        <div>
          <div>
            <div className="w-[1.875rem] h-[0.125rem] bg-secondary-color"></div>
            <h4 className="mt-4 mb-10 font-josefin text-lg tracking-[0.0313rem] leading-[1.2] uppercase">About</h4>
          </div>

          <p className="text-sm leading-[1.875]">
            Patrick Newell’s art journey spans over a decade, evolving from cubism and surrealism to landscapes and portraits. His vibrant, eclectic style is
            inspired by iconic artists like Monet and Picasso, embracing both structure and creativity.
            <span className="block mt-5">He constantly reinvents his approach, driven by a deep passion for the act of creation.</span>
          </p>
        </div>

        <div>
          <div>
            <div className="w-[1.875rem] h-[0.125rem] bg-secondary-color"></div>
            <h4 className="mt-4 mb-10 font-josefin text-lg tracking-[0.0313rem] leading-[1.2] uppercase">Recent Work</h4>
          </div>

          <div className="grid gap-2 grid-cols-3">
            {recentImages.map((image, index) => (
              <div key={index} className="relative max-h-[5.2131rem]">
                <div className="absolute flex justify-center items-center size-full bg-secondary-color opacity-0 hover:opacity-100 duration-300">
                  <a href="#" className="text-white text-xl p-2">
                    <LuLink />
                  </a>
                </div>
                <img src={image} className="size-full cursor-pointer duration-300 object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <div className="w-[1.875rem] h-[0.125rem] bg-secondary-color"></div>
            <h4 className="mt-4 mb-10 font-josefin text-lg tracking-[0.0313rem] leading-[1.2] uppercase">Tags</h4>
          </div>

          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <a
                href="#"
                key={index}
                className="text-xs font-light leading-[1.875] bg-[#252525] mr-[0.625rem] mb-[0.625rem] pt-[0.4375rem] pb-[0.375rem] px-[0.9375rem] hover:bg-secondary-color duration-300"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div>
            <div className="w-[1.875rem] h-[0.125rem] bg-secondary-color"></div>
            <h4 className="mt-4 mb-10 font-josefin text-lg tracking-[0.0313rem] leading-[1.2] uppercase">Recent News</h4>
          </div>

          <div className="space-y-3">
            {recentNews.map((news) => (
              <div key={news?.id} className="pb-[0.9375rem] mb-[0.625rem] border-b-[0.1875rem] border-double border-[#333333] duration-300 hover:border-white">
                <a href="#" className="mb-[0.4375rem] text-sm leading-5 uppercase font-josefin tracking-[0.0156rem] hover:text-secondary-color duration-300">
                  {news?.title}
                </a>

                <ul className="text-[0.8125rem] text-[#ffffff4d] flex items-center gap-4 mt-2">
                  <li className="flex items-center gap-3">
                    <LuClock3 />
                    <p>{news?.date}</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaComment />
                    <p>{news?.comment}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-24 pb-7">
        <ul className="flex gap-12 justify-center items-center text-sm leading-[1.375rem] uppercase">
          <li>
            <a href="#" className="hover:text-secondary-color duration-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary-color duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary-color duration-300">
              Terms of use
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary-color duration-300">
              Faq
            </a>
          </li>
        </ul>

        <p className="uppercase text-[#ffffff4d] text-sm font-bold leading-[1.875] text-center mt-10">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="text-white hover:text-secondary-color duration-300">
            ArtGallery
          </a>
          . ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
