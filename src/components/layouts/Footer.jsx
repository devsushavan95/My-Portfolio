import React from "react";
import SocialIcons from "../elements/SocialIcons";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-dark pt-8">
      <div className="container text-center">
        <div className="py-12">
          <h2 className="text-[5rem] leading-none mx-auto max-w-200 max-xl:text-[4rem] max-xl:max-w-150 max-md:text-[3rem] max-md:max-w-120 max-sm:text-[2.25rem] max-sm:leading-[1.2]">
            Let’s <span className="text-white uppercase font-bold">create </span> something together
          </h2>
          <div className="mt-8">
            <a href="tel:8918686237" className="btn btn-primary">
              Book A Call
            </a>
          </div>

          <div className="mt-8">
            <SocialIcons />
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <p className="text-sm">© 2026 Sushavan Chakrborty. All rights reserved.</p>
        </div>
      </div>

      <div className="fixed bottom-7 right-7 z-1000 max-md:bottom-5 max-md:right-5">
        <a href="https://wa.me/8918686237" target="_blank" className="size-14 bg-green-600 rounded-md inline-flex items-center justify-center text-4xl hover:bg-green-500">
          <FaWhatsapp />
        </a>
      </div>

      <div className="fixed left-0 right-0 bottom-2.5 z-1000 text-center md:hidden">
        <a href="tel:8918686237" className="text-white text-base inline-flex gap-x-2 items-center bg-dark border-2 border-brand px-4 py-2 rounded-sm">
          <span><MdPhone /></span>
          <span>8918686237</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
