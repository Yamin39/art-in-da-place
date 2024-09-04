import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-fira-sans bg-black text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
