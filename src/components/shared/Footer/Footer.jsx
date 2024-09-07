import { FaSquareFull } from "react-icons/fa";
import { RxBoxModel } from "react-icons/rx";
import recentArt1 from "../../../assets/recent/recent-1.jpg";
import recentArt2 from "../../../assets/recent/recent-2.jpg";
import recentArt3 from "../../../assets/recent/recent-3.jpg";
import recentArt4 from "../../../assets/recent/recent-4.jpg";
import recentArt5 from "../../../assets/recent/recent-5.jpg";
import recentArt6 from "../../../assets/recent/recent-6.jpg";

const Footer = () => {
  // 11 random art gallery website tags for the footer
  const tags = ["Abstract", "Art", "Artwork", "Canvas", "Design", "Gallery", "Illustration", "Modern", "Painting", "Photography", "Sculpture"];
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

      <div className="max-w-[73.125rem] w-11/12 md:w-10/12 mx-auto grid gap-[1.875rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12">
        <div>
          <div>
            <div className="w-[1.875rem] h-[0.125rem] bg-secondary-color"></div>
            <h4 className="mt-4 mb-10 font-josefin text-lg tracking-[0.0313rem] leading-[1.2] uppercase">About</h4>
          </div>

          <p className="text-sm leading-[1.875]">
            Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit
            enim non justo posuere placerat eget purus mauris.
            <span className="block mt-5">Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper.</span>{" "}
          </p>
        </div>

        <div>
          <div>
            <div className="w-[1.875rem] h-[0.125rem] bg-secondary-color"></div>
            <h4 className="mt-4 mb-10 font-josefin text-lg tracking-[0.0313rem] leading-[1.2] uppercase">Recent Work</h4>
          </div>

          <div className="grid gap-2 grid-cols-3">
            <div className="overflow-hidden max-h-[5.2131rem]">
              <img src={recentArt1} className="size-full cursor-pointer hover:scale-105 duration-300 object-cover" />
            </div>
            <div className="overflow-hidden max-h-[5.2131rem]">
              <img src={recentArt2} className="size-full cursor-pointer hover:scale-105 duration-300 object-cover" />
            </div>
            <div className="overflow-hidden max-h-[5.2131rem]">
              <img src={recentArt3} className="size-full cursor-pointer hover:scale-105 duration-300 object-cover" />
            </div>
            <div className="overflow-hidden max-h-[5.2131rem]">
              <img src={recentArt4} className="size-full cursor-pointer hover:scale-105 duration-300 object-cover" />
            </div>
            <div className="overflow-hidden max-h-[5.2131rem]">
              <img src={recentArt5} className="size-full cursor-pointer hover:scale-105 duration-300 object-cover" />
            </div>
            <div className="overflow-hidden max-h-[5.2131rem]">
              <img src={recentArt6} className="size-full cursor-pointer hover:scale-105 duration-300 object-cover" />
            </div>
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
