// categories: Nature, People, Abstract. Ghost Frames: Wooden, Steal, Gold, Silver, Bronze
import { useState } from "react";
import { GoLink } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import art1 from "../../../../assets/arts/art-1.jpg"; // category: Nature, frame: Wooden
import art10 from "../../../../assets/arts/art-10.jpg"; // category: Abstract, frame: Silver
import art11 from "../../../../assets/arts/art-11.jpg"; // category: People, frame: Bronze
import art12 from "../../../../assets/arts/art-12.jpg"; // category: Nature, frame: Wooden
import art13 from "../../../../assets/arts/art-13.jpg"; // category: Abstract, frame: Steal
import art14 from "../../../../assets/arts/art-14.jpg"; // category: People, frame: Gold
import art15 from "../../../../assets/arts/art-15.jpg"; // category: Nature, frame: Silver
import art16 from "../../../../assets/arts/art-16.jpg"; // category: Abstract, frame: Bronze
import art18 from "../../../../assets/arts/art-18.jpg"; // category: Nature, frame: Steal
import art19 from "../../../../assets/arts/art-19.jpg"; // category: Abstract, frame: Gold
import art2 from "../../../../assets/arts/art-2.jpg"; // category: People, frame: Steal
import art20 from "../../../../assets/arts/art-20.jpg"; // category: People, frame: Silver
import art21 from "../../../../assets/arts/art-21.jpg"; // category: People, frame: Silver
import art22 from "../../../../assets/arts/art-22.jpg"; // category: People, frame: Gold
import art23 from "../../../../assets/arts/art-23.jpg"; // category: People, frame: Silver
import art24 from "../../../../assets/arts/art-24.jpg"; // category: Nature, frame: Steal
import art25 from "../../../../assets/arts/art-25.jpg"; // category: Abstract, frame: Silver
import art26 from "../../../../assets/arts/art-26.jpg"; // category: People, frame: Bronze
import art3 from "../../../../assets/arts/art-3.jpg"; // category: Nature, frame: Wooden
import art4 from "../../../../assets/arts/art-4.jpg"; // category: Abstract, frame: Gold
import art5 from "../../../../assets/arts/art-5.jpg"; // category: People, frame: Silver
import art6 from "../../../../assets/arts/art-6.jpg"; // category: Ghosts, frame: Bronze
import art7 from "../../../../assets/arts/art-7.jpg"; // category: Abstract, frame: Wooden
import art8 from "../../../../assets/arts/art-8.jpg"; // category: People, frame: Steal
import art9 from "../../../../assets/arts/art-9.jpg"; // category: Nature, frame: Gold
import PortfolioBg from "../../../../assets/images/portfolio-bg.jpg";
import SectionHeader from "../../../shared/SectionHeader/SectionHeader";
import "./Portfolio.css";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const arts = [
    {
      id: 1,
      img: art1,
      category: "Nature",
      frame: "Wooden",
      title: "Lake side",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "1200",
      size: "65cm by 42cm",
    },
    {
      id: 2,
      img: art2,
      category: "People",
      frame: "Steal",
      title: "Charles Darwin",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "8000",
      size: "68cm by 53cm",
    },
    {
      id: 3,
      img: art3,
      category: "Nature",
      frame: "Wooden",
      title: "Swan lake",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "6000",
      size: "69cm by 49cm",
    },
    {
      id: 4,
      img: art4,
      category: "Abstract",
      frame: "Gold",
      title: "Life and death",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "14000",
      size: "84cm by 27cm",
    },
    {
      id: 5,
      img: art5,
      category: "People",
      frame: "Silver",
      title: "Marie Clare",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "92000",
      size: "91cm by 65cm",
    },
    {
      id: 6,
      img: art6,
      category: "Ghost",
      frame: "Bronze",
      title: "No comment",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "14000",
      size: "67cm by 51cm",
    },
    {
      id: 7,
      img: art7,
      category: "Abstract",
      frame: "Wooden",
      title: "Journey to heaven",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "5000",
      size: "82cm by 57cm",
    },
    {
      id: 8,
      img: art8,
      category: "Nature",
      frame: "Steal",
      title: "Sunset",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "3000",
      size: "27cm by 54cm",
    },
    {
      id: 9,
      img: art9,
      category: "Nature",
      frame: "Gold",
      title: "Summer meadows",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "6000",
      size: "65cm by 59cm",
    },
    {
      id: 10,
      img: art10,
      category: "Nature",
      frame: "Silver",
      title: "Poppies",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "8000",
      size: "84cm by 48cm",
    },
    {
      id: 11,
      img: art11,
      category: "People",
      frame: "Bronze",
      title: "Lady and the gorilla",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "6000",
      size: "83cm by 58cm",
    },
    {
      id: 12,
      img: art12,
      category: "Nature",
      frame: "Wooden",
      title: "The lonely peacock",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "42000",
      size: "120cm by 56cm",
    },
    {
      id: 13,
      img: art13,
      category: "Abstract",
      frame: "Steal",
      title: "Exotic bliss",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "4500",
      size: "90cm by 45cm",
    },
    {
      id: 14,
      img: art14,
      category: "People",
      frame: "Gold",
      title: "Lady with red hair",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "3500",
      size: "68cm by 54cm",
    },
    {
      id: 15,
      img: art15,
      category: "Nature",
      frame: "Silver",
      title: "Moonshine",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "1500",
      size: "67cm by 51cm",
    },
    {
      id: 16,
      img: art16,
      category: "People",
      frame: "Bronze",
      title: "Diamond geezer",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "2500",
      size: "69cm by 49cm",
    },
    {
      id: 18,
      img: art18,
      category: "Abstract",
      frame: "Steal",
      title: "Lucy and the sky of diamonds",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "22000",
      size: "87cm by 57cm",
    },
    {
      id: 19,
      img: art19,
      category: "Abstract",
      frame: "Gold",
      title: "Shining",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "4000",
      size: "85cm by 45cm",
    },
    {
      id: 20,
      img: art20,
      category: "People",
      frame: "Silver",
      title: "Worried man",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "3000",
      size: "69cm by 54cm",
    },
    {
      id: 21,
      img: art21,
      category: "People",
      frame: "People",
      title: "Haile Selassie",
      description: "Acrylic on canvas, painted by Loty loony",
      price: "5000",
      size: "60.1 by 80.2cm",
    },
    {
      id: 22,
      img: art22,
      category: "People",
      frame: "Gold",
      title: "Heart of India",
      description: "Acrylic on canvas, painted by Loty loony",
      price: "8000",
      size: "76.1cm by 101.3cm",
    },
    {
      id: 23,
      img: art23,
      category: "People",
      frame: "Silver",
      title: "Death is vanity",
      description: "Spray on canvas, painted by Loty loony",
      price: "9000",
      size: "69.8cm by 100cm",
    },
    {
      id: 24,
      img: art24,
      category: "Nature",
      frame: "Steal",
      title: "The mushroom",
      description: "Spray on canvas, painted by Loty loony",
      price: "3000",
      size: "69.8cm by 100cm",
    },
    {
      id: 25,
      img: art25,
      category: "Abstract",
      frame: "Silver",
      title: "The homeless",
      description: "Acrylic on canvas, painted by Loty loony",
      price: "4000",
      size: "69.8cm by 99.9cm",
    },
    {
      id: 26,
      img: art26,
      category: "People",
      frame: "Bronze",
      title: "Lady with yellow hair",
      description: "Oil on canvas, painted by Patrick Newell",
      price: "24000",
      size: "87cm by 60cm",
    },
  ];

  const categories = [...new Set(arts.map((art) => art?.category))];

  // Function to open modal
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="portfolio">
      <div className="py-10">
        <SectionHeader title="Portfolio" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" />

        <div className="flex flex-wrap justify-center items-center gap-7 mt-7 mb-12">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`pt-[0.625rem] pb-2 px-5 border-[0.0625rem] border-white rounded-[0.3125rem] text-sm uppercase hover:border-secondary-color hover:bg-secondary-color duration-300 active:scale-75 ${
              selectedCategory === "All" ? "border-secondary-color bg-secondary-color" : ""
            }`}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`pt-[0.625rem] pb-2 px-5 border-[0.0625rem] border-white rounded-[0.3125rem] text-sm uppercase hover:border-secondary-color hover:bg-secondary-color duration-300 active:scale-75 ${
                selectedCategory === category ? "border-secondary-color bg-secondary-color" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery space-x-4 p-10 bg-cover bg-fixed bg-no-repeat bg-center" style={{ backgroundImage: `url(${PortfolioBg})` }}>
          {arts
            .filter((art) => selectedCategory === "All" || art.category === selectedCategory)
            .map((art) => (
              <div key={art.id} className="pics">
                <div className="overlay">
                  <div className="border-l border-r-white pl-8 mb-4">
                    <a href="#" className="block font-josefin font-light text-xl uppercase tracking-[0.0313rem] leading-none">
                      {art?.title}
                    </a>
                    <a href="#" className="tracking-widest font-semibold text-xl">
                      £{Number(art?.price).toLocaleString()}
                    </a>

                    <p className="text-sm text-[#dbdbdb]">{art?.description}</p>
                    <p className="text-sm text-[#dbdbdb]">Size: {art?.size}</p>
                  </div>

                  <div className="flex gap-2">
                    <a href="#" className="p-3 border rounded-full text-lg hover:text-secondary-color hover:bg-white duration-300">
                      <GoLink />
                    </a>
                    <button
                      onClick={() => handleImageClick(art.img)}
                      className="p-3 border rounded-full text-lg hover:text-secondary-color hover:bg-white duration-300"
                    >
                      <IoIosSearch />
                    </button>
                  </div>
                </div>
                <div>
                  <img className="w-full" src={art.img} alt="Art" />

                  <div className="mt-5 md:hidden">
                    <div className="border-l border-r-white pl-8 mb-4">
                      <a href="#" className="block font-josefin font-light text-xl uppercase tracking-[0.0313rem] leading-none">
                        {art?.title}
                      </a>
                      <a href="#" className="tracking-widest font-semibold text-xl">
                        £{Number(art?.price).toLocaleString()}
                      </a>

                      <p className="text-sm text-[#dbdbdb]">{art?.description}</p>
                      <p className="text-sm text-[#dbdbdb]">Size: {art?.size}</p>
                    </div>

                    <div className="flex gap-2">
                      <a href="#" className="p-3 border rounded-full text-lg hover:text-secondary-color hover:bg-white duration-300">
                        <GoLink />
                      </a>
                      <button
                        onClick={() => handleImageClick(art.img)}
                        className="p-3 border rounded-full text-lg hover:text-secondary-color hover:bg-white duration-300"
                      >
                        <IoIosSearch />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-zoom-out" onClick={closeModal}>
            <div className="relative">
              <button className="absolute top-0 right-0 text-white" onClick={closeModal}>
                <IoClose className="text-3xl" />
              </button>
              <img src={selectedImage} alt="Full Size Art" className="max-w-[70%] max-h-[99vh] mx-auto cursor-default" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
