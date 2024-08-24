import React from "react";
import logo from "@/assets/ReadWell.png";
import Image from "next/image";
import { footerIcons } from "@/constants/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-200 p-10 flex justify-center items-center flex-col  ">
      <Image src={logo} alt="logo" height={70} />
      <p className="m-4">©2024 ReadWell. All Rights reserved</p>

      <div className="flex-row">
        {footerIcons.map((icon) => (
          <button key={icon.id} className="opacity-80 mx-4">
            <Image src={icon.src} alt={icon.alt} height={45} />
          </button>
        ))}
      </div>
      <p className="mt-4">
        Built by{" "}
        <Link
          href={"https://github.com/LanWebDev"}
          rel="noopener noreferrer"
          target="_blank"
          className="text-[#2563eb]"
        >
          Lan Skrobar
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
