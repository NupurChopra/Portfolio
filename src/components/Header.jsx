import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiLinkedin } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex z-10 fixed top-0  bg-white  w-full h-20 px-8 justify-between items-center ">
      <h1 className="font-bold  text-2xl"><NavLink to="/">Nupur Chopra</NavLink></h1>
      <div className="hidden md:flex justify-around gap-6 font-semibold text-xl">
        <h2><NavLink to="/about">About Me</NavLink></h2>
        <h2><NavLink to="/tech">Tech Stacks</NavLink></h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>

      <div className=" hidden md:flex gap-8">
        <button className="border rounded-lg text-white bg-black font-bold px-6 py-2">
          <Link to={"/"}>Resume</Link>
        </button>
        <button>
          <Link to={"/"}>
            <SiLinkedin className="text-blue-700 text-4xl" />
          </Link>
        </button>
      </div>
      {!isVisible ? (
        <RxHamburgerMenu
          className="md:hidden "
          onClick={() => {
            setIsVisible(true);
          }}
        />
      ) : (
        <div className="md:hidden  absolute z-200  w-2/3 min-h-screen border-black top-0 right-0 bg-white ">
          <p
            className="text-end px-8 py-8 font-bold text-lg"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            X
          </p>

          <div className=" md:hidden flex flex-col mt-6 justify-center items-center gap-6 font-semibold text-xl">
            <h2><Link to="/about">About Me</Link></h2>
            <h2><NavLink to="/tech">Tech Stacks</NavLink></h2>
            <h2>Projects</h2>
            <h2>Contact</h2>
          </div>

          <div className="  md:hidden flex flex-col justify-center items-center mt-6 gap-5">
            <button className="border rounded-lg text-white bg-black font-bold px-6 py-2">
              <Link to={"/"}>Resume</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
