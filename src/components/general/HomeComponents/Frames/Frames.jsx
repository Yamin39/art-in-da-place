import { useState } from "react";
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
import SectionHeader from "../../../shared/SectionHeader/SectionHeader";

const Frames = () => {
  const [selectedFrames, setSelectedFrames] = useState("All");

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

  const frames = [...new Set(arts.map((art) => art?.frame))];
  return (
    <div className="w-11/12 mx-auto mb-10">
      <SectionHeader title="Frames" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" />

      <div className="flex gap-10 md:gap-2 flex-col-reverse md:flex-row mt-10">
        <div className="gallery md:w-1/2">
          {arts
            .filter((art) => selectedFrames === "All" || art.frame === selectedFrames)
            .map((art) => (
              <div key={art.id} className="pics" style={{ marginBottom: "1.125rem" }}>
                <img className="w-full" src={art.img} alt="Art" />
              </div>
            ))}
        </div>
        <div className="md:w-1/2 flex gap-5 flex-wrap justify-center items-center">
          <button
            className={`pt-4 pb-3 px-6 font-josefin bg-secondary-color duration-300 ${selectedFrames === "All" ? "bg-white text-secondary-color" : ""}`}
            onClick={() => setSelectedFrames("All")}
          >
            All
          </button>

          {frames.map((frame) => (
            <button
              key={frame}
              className={`pt-4 pb-3 px-6 font-josefin bg-secondary-color duration-300 ${selectedFrames === frame ? "bg-white text-secondary-color" : ""}`}
              onClick={() => {
                setSelectedFrames(frame);
                console.log(frame);
              }}
            >
              {frame}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frames;
