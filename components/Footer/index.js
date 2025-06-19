import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <div className="mt-10">
            <h1 className="text-2xl tablet:text-4xl laptop:text-5xl laptopl:text-6xl text-bold">
              LET&apos;S WORK TOGETHER
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-base laptop:text-lg font-medium mt-4 laptop:mt-12 p-2 laptop:p-0 w-full">
          <span>© 2025 Hayley Chen</span>
        <Socials />
      </div>
    </>
  );
};

export default Footer;
