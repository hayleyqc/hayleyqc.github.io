import React from "react";
import Button from "../Button";

import data from "../../content/portfolio/portfolio.json";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

const iconMap = {
  LinkedIn: <FaLinkedin size={26} />,
  Email: <MdEmail size={26} />,
  Instagram: <FaInstagramSquare size={26} />,
  Resume: <FaFile size={26} />
};

const Socials = ({ className = "" }) => (
  <div className={`flex gap-6 ${className}`}> {/* increased gap for larger icons */}
    {data.socials.map((social) => (
      <a
        key={social.id}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.title}
        className="flex items-center gap-3 text-2xl tablet:text-3xl text-slate-700 dark:text-slate-200 hover:text-blue-600 transition"
      >
        {iconMap[social.title]}
        <span className="text-xl tablet:text-2xl">{social.title}</span>
      </a>
    ))}
  </div>
);

export default Socials;
