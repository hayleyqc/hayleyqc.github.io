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
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK TOGETHER
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 w-full">
        <span>
          Made With ❤ by{" "}
          <Link href="mailto:hayleyqc@outlook.com">
            <a className="underline underline-offset-1">Hayley's Family</a>
          </Link>
        </span>
        <Socials />
      </div>
    </>
  );
};

export default Footer;
