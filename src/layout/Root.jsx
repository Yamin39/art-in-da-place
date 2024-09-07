import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

export const SlideContext = createContext(null);

const Root = () => {
  const [slideNo, setSlideNo] = useState(0);
  return (
    <SlideContext.Provider value={{ slideNo, setSlideNo }}>
      <div className="font-fira-sans bg-black text-white">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </SlideContext.Provider>
  );
};

export default Root;
