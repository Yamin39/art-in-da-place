import art from "../../../../assets/arts/art-9.jpg";
import SectionHeader from "../../../shared/SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto pt-10 pb-[7.5rem] px-12">
      <SectionHeader title="ABOUT US" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" />

      <div className="flex flex-col md:flex-row mt-9 gap-10 md:gap-0">
        <div className="md:w-1/2">
          <img className="md:max-w-[28.75rem]" src={art} alt="Art" />
        </div>
        <div className="md:w-1/2">
          <h1 className="font-thin font-josefin mb-5 text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.0313rem] leading-[1.2]">
            A Little Intro
          </h1>
          <p className="text-sm font-light leading-[1.875]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>

          <br />
          <br />

          <h1 className="font-thin font-josefin mb-5 text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.0313rem] leading-[1.2]">
            My Exhibitions
          </h1>
          <p className="text-sm font-light leading-[1.875]">
            Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor
            quis nostrud exercitation ullamco
          </p>

          <br />
          <br />

          <h1 className="font-thin font-josefin mb-5 text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.0313rem] leading-[1.2]">
            Newsletter
          </h1>
          <p className="text-sm font-light leading-[1.875]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

          <br />

          <form className="flex mt-4">
            <input
              type="email"
              className="w-full px-5 py-4 border border-r-0 border-[#333333] bg-[#252525] outline-none focus:border-white duration-300"
              placeholder="Email"
            />
            <button
              type="submit"
              className="pt-4 pb-3 px-6 font-josefin bg-secondary-color duration-300 uppercase hover:bg-white hover:text-secondary-color active:scale-75"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
