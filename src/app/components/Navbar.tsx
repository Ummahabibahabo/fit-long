"use client";
import Image from "next/image";
import IconImg from "@/app/assests/logo.png";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuButton = () => {
    setMenuOpen(!menuOpen);
  };
  const pathname = usePathname();
  return (
    <div className="relative border-b-3 border-[#1C1F26] pb-2">
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
          <Link href={"/"}>
            <li
              className={` border-2 rounded-xl px-3 py-2 ${pathname === "/" ? "text-[#C2F800] border-[#C2F800]" : "text-[#9CA3AF] border-transparent"}`}
            >
              Workouts
            </li>
          </Link>
          <Link href={"/my-plan"}>
            <li
              className={`border-2 rounded-xl px-3 py-2 ${pathname === "/my-plan" ? "text-[#C2F800] border-[#C2F800] " : "text-[#9CA3AF] border-transparent"}`}
            >
              My Plan
            </li>
          </Link>
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
            <Link href={"/"}>
              <li
                className={` border-2 rounded-xl px-3 py-2 ${pathname === "/" ? "text-[#C2F800] border-[#C2F800]" : "text-[#9CA3AF] border-transparent"}`}
              >
                Workouts
              </li>
            </Link>
            <Link href={"/my-plan"}>
              <li
                className={`border-2 rounded-xl px-3 py-2 ${pathname === "/my-plan" ? "text-[#C2F800] border-[#C2F800] " : "text-[#9CA3AF] border-transparent"}`}
              >
                My Plan
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
