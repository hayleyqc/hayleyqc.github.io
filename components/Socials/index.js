import React from "react";
import Button from "../Button";

import data from "../../content/portfolio/portfolio.json";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconMap = {
  LinkedIn: <FaLinkedin size={24} />,
  Email: <MdEmail size={24} />
};

const Socials = ({ className = "" }) => (
  <div className={`flex gap-4 ${className}`}>
    {data.socials.map((social) => (
      <a
        key={social.id}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.title}
        className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition"
      >
        {iconMap[social.title]}
        <span>{social.title}</span>
      </a>
    ))}
  </div>
);

export default Socials;
