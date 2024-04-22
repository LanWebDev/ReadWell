import React from "react";
import logo from "@/assets/bookWell.png";
import Image from "next/image";
import { footerIcons } from "@/constants/constants";
import { Button } from "./button";

const Footer = () => {
  return (
    <footer className="bg-gray-300 p-10 flex justify-center items-center flex-col  ">
      <Image src={logo} alt="logo" height={70} />
      <p className="m-4">©2024 BookWell. All Rights reserved</p>
      <div className="flex-row">
        {footerIcons.map((icon) => (
          <button key={icon.id} className="opacity-80 mx-4">
            <Image src={icon.src} alt={icon.alt} height={45} />
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
