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
import art17 from "../../../../assets/arts/art-17.jpg"; // category: People, frame: Wooden
import art18 from "../../../../assets/arts/art-18.jpg"; // category: Nature, frame: Steal
import art19 from "../../../../assets/arts/art-19.jpg"; // category: Abstract, frame: Gold
import art2 from "../../../../assets/arts/art-2.jpg"; // category: People, frame: Steal
import art20 from "../../../../assets/arts/art-20.jpg"; // category: People, frame: Silver
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
      { id: 1, img: art1, category: "Nature", frame: "Wooden", title: "Beautiful Landscape" },
      { id: 2, img: art2, category: "People", frame: "Steal", title: "Portrait Study" },
      { id: 3, img: art3, category: "Nature", frame: "Wooden", title: "Forest Serenity" },
      { id: 4, img: art4, category: "Abstract", frame: "Gold", title: "Abstract Harmony" },
      { id: 5, img: art5, category: "People", frame: "Silver", title: "Elegant Pose" },
      { id: 6, img: art6, category: "Ghost", frame: "Bronze", title: "Mysterious Presence" },
      { id: 7, img: art7, category: "Abstract", frame: "Wooden", title: "Artistic Abstraction" },
      { id: 8, img: art8, category: "People", frame: "Steal", title: "Expressive Gaze" },
      { id: 9, img: art9, category: "Nature", frame: "Gold", title: "Golden Sunset" },
      { id: 10, img: art10, category: "Abstract", frame: "Silver", title: "Silver Reflections" },
      { id: 11, img: art11, category: "People", frame: "Bronze", title: "Bronze Sculpture" },
      { id: 12, img: art12, category: "Nature", frame: "Wooden", title: "Rustic Beauty" },
      { id: 13, img: art13, category: "Abstract", frame: "Steal", title: "Steel Creation" },
      { id: 14, img: art14, category: "People", frame: "Gold", title: "Golden Elegance" },
      { id: 15, img: art15, category: "Nature", frame: "Silver", title: "Silver Serenade" },
      { id: 16, img: art16, category: "Abstract", frame: "Bronze", title: "Bronze Expression" },
      { id: 17, img: art17, category: "People", frame: "Wooden", title: "Wooden Sculpture" },
      { id: 18, img: art18, category: "Nature", frame: "Steal", title: "Steel Wilderness" },
      { id: 19, img: art19, category: "Abstract", frame: "Gold", title: "Golden Abstraction" },
      { id: 20, img: art20, category: "People", frame: "Silver", title: "Silver Portrait" },
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

                  <div className="text-right border-r border-r-white pr-8">
                    <a href="#" className="block font-josefin font-light text-xl uppercase tracking-[0.0313rem] leading-none">
                      {art?.title}
                    </a>
                    <a href="#">{art?.category},</a>
                  </div>
                </div>
                <img className="w-full" src={art.img} alt="Art" />
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
