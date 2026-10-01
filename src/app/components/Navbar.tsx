"use client";

import Image from "next/image";
import IconImg from "@/app/assests/logo.png";
import { useContext, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkOutsContext } from "../context/WorkOutsProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuButton = () => {
    setMenuOpen((previousState) => !previousState);
  };
  const { plan } = useContext(WorkOutsContext);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b-3 border-[#1C1F26] bg-black pb-2">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl text-white"
          onClick={handleMenuButton}
        >
          {menuOpen ? <IoCloseSharp /> : <MdOutlineMenu />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            className="rotate-[-45deg]"
            src={IconImg}
            alt="FITLOG"
            width={25}
            height={25}
          />

          <h1 className="font-bold text-[18px] text-white">FITLOG</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-5 text-[14px] font-medium">
          <li>
            <Link
              href="/"
              className={`block border-2 rounded-xl px-3 py-2 ${
                pathname === "/"
                  ? "text-[#C2F800] border-[#C2F800]"
                  : "text-[#9CA3AF] border-transparent"
              }`}
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className={`block border-2 rounded-xl px-3 py-2 ${
                pathname === "/my-plan"
                  ? "text-[#C2F800] border-[#C2F800]"
                  : "text-[#9CA3AF] border-transparent"
              }`}
            >
              My Plan
            </Link>
          </li>
        </ul>

        {/* Plan & Saved */}
        <div className="flex gap-5 text-[#9CA3AF] text-[14px] font-medium">
          <button className="flex gap-2">
            Plan
            <span className="px-3 py-1 rounded-full bg-[#ccff00] text-black font-bold">
              {plan.length}
            </span>
          </button>

          <button className="flex gap-2">
            Saved <span>0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-2 px-4 pb-3">
          <ul className="flex flex-col gap-3 text-[14px] font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`block border-2 rounded-xl px-3 py-2 ${
                  pathname === "/"
                    ? "text-[#C2F800] border-[#C2F800]"
                    : "text-[#9CA3AF] border-transparent"
                }`}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className={`block border-2 rounded-xl px-3 py-2 ${
                  pathname === "/my-plan"
                    ? "text-[#C2F800] border-[#C2F800]"
                    : "text-[#9CA3AF] border-transparent"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
