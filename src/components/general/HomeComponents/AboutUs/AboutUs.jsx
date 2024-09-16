import artist from "../../../../assets/arts/art-17.jpg";
import SectionHeader from "../../../shared/SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <div className="max-w-[1440px] w-11/12 md:w-10/12 mx-auto pt-10 pb-[7.5rem] md:px-12">
      <SectionHeader title="ABOUT US" desc="Discover the journey and passion behind our unique artistic creations and gallery experience." />

      <div className="flex flex-col md:flex-row mt-9 gap-10 md:gap-0">
        <div className="md:w-1/2">
          <img className="md:max-w-[28.75rem]" src={artist} alt="Art" />
        </div>
        <div className="md:w-1/2">
          <h1 className="font-thin font-josefin mb-5 text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.0313rem] leading-[1.2]">
            A Little Intro
          </h1>
          <p className="text-sm font-light leading-[1.875]">
            Patrick Newell has been passionately painting for over a decade, beginning his journey with cubism and surrealism before evolving into landscapes
            and portraits. His work showcases a deep love for the medium, embracing both structure and free-flowing creativity. Inspired by legendary artists
            such as Monet, Picasso, and Matisse, Newell&apos;s style is an eclectic blend of vibrant color palettes and bold, expressive forms. His dedication
            to art is not defined by a particular genre, but rather a love for the act of creation itself, constantly exploring and reinventing his approach.
          </p>

          <br />

          <p className="text-sm font-light leading-[1.875]">
            The art market is becoming increasingly hybrid. Although the art market has largely returned to its post-pandemic state, with the return of art
            fairs and gallery shows, it is interesting to note that online sales are continuing to grow. (see appendix 1). Striking a balance between the
            physical and digital worlds provides a strong business opportunity.
            <br />
            <br />
            Art is a product like no other. It is an asset that can turn a house into a home or is a commodity that can appreciate in value. The UK is the
            second largest art market in the world taking 18% of a market worth around $68B. (see appendix 2) London represents the largest market in the UK and
            has a thriving art community.
            <br />
            <br />
            <span className="font-semibold italic">Artindaplace</span> is company and website devoted to art lovers unlike any other service, showcasing a
            variety of artworks from cubism landscapes portraits and abstract pieces. Delivery is worldwide, however London based customers (and on negotiation
            home counties) can choose an artwork from the site, arrange a delivery date, see the piece in situ, take advice from the fitter and have the work
            hung for them at no extra charge.
            <br />
            <br />
            Potentially this service can be rolled out throughout the UK as the company grows.
            <br />
            <br />
            Consultancy can also be arranged digitally.
          </p>

          <br />
          <br />

          <h1 className="font-thin font-josefin mb-5 text-[clamp(2.25rem,2.075rem_+_0.875vw,3.125rem)] uppercase tracking-[0.0313rem] leading-[1.2]">
            Newsletter
          </h1>
          <p className="text-sm font-light leading-[1.875]">Subscribe to our newsletter and stay updated.</p>

          <br />

          <form className="flex flex-col sm:flex-row mt-4">
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
