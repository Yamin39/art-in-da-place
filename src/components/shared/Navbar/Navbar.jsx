import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { SlideContext } from "../../../layout/Root";
import "./Navbar.css";

const Navbar = () => {
  const slideData = useContext(SlideContext);
  const slideNo = slideData?.slideNo;
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pages">Pages</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
    </>
  );
  return (
    <header className="max-w-[1440px] w-[72%] mx-auto">
      <nav className="absolute z-10  flex max-w-[1440px] w-[72%] justify-between items-center pt-7">
        <div className="max-w-[9.375rem]">
          <img className="w-full" src={logo} alt="Logo" />
        </div>

        {/* desktop navigation */}
        <ul className={`desk-nav hidden md:flex gap-[3.125rem] pr-5 ${slideNo === 2 ? "text-black" : "text-white"}`}>{navLinks}</ul>

        {/* mobile / tablet navigation */}
        <div className="drawer drawer-end md:hidden">
          <input id="side-nav" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="side-nav" className={`flex items-center btn btn-ghost text-base font-normal ${slideNo === 2 ? "text-black" : "text-white"}`}>
              <MdOutlineMenu className="text-3xl" />
              Menu
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="side-nav" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu mobile-nav bg-black text-white min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li className="mb-2">
                <label htmlFor="side-nav" aria-level="close sidebar" className="w-fit ml-auto">
                  <IoClose className="text-2xl" />
                </label>
              </li>
              {navLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
