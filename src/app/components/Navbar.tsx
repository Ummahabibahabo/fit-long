"use client";
import Image from "next/image";
import IconImg from "@/app/assests/logo.png";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuButton = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <button className="sm:hidden text-2xl" onClick={handleMenuButton}>
          {menuOpen ? <IoCloseSharp /> : <MdOutlineMenu />}
        </button>
        <div className="flex gap-3">
          <Image
            className="rotate-[-45deg]"
            src={IconImg}
            alt=""
            width={25}
            height={25}
          ></Image>
          <h1 className="font-bold text-[18px]">FITLOG</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className=" hidden sm:flex gap-5 text-[#9CA3AF] text-[14px] font-medium">
          <li>Workouts</li>
          <li>My Plan</li>
        </ul>
        <div className="flex gap-5 text-[#9CA3AF] text-[14px] font-medium">
          <button className="flex gap-2">
            Plan<span>0</span>
          </button>
          <button className="flex gap-2">
            Saved<span>0</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}{" "}
      {menuOpen && (
        <div className="sm:hidden mt-4 ml-4">
          <ul className="flex flex-col gap-4 text-[#9CA3AF] text-[14px] font-medium">
            <li>Workouts</li> <li>My Plan</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
