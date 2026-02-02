import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function SocialIcons() {
  return (
    <ul className="flex justify-center gap-x-3">
      <li>
        <a href="www.linkedin.com/in/sushavan-chakraborty-65141916a" target="_blank" className="p-1 inline-flex gap-x-1 items-center hover:text-white">
          <span>LinkedIn</span>{" "}
          <span>
            <FiArrowUpRight />
          </span>
        </a>
      </li>
      <li>
        <a href="https://github.com/devsushavan95" target="_blank" className="p-1 inline-flex gap-x-1 items-center hover:text-white">
          <span>GitHub</span>{" "}
          <span>
            <FiArrowUpRight />
          </span>
        </a>
      </li>
      <li>
        <a href="www.instagram.com/dev_sushavan" target="_blank" className="p-1 inline-flex gap-x-1 items-center hover:text-white">
          <span>Instagram</span>{" "}
          <span>
            <FiArrowUpRight />
          </span>
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
