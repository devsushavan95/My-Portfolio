import React from "react";
import SocialIcons from "../elements/SocialIcons";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark pt-8">
      <div className="container text-center">
        <div className="py-12">
          <h2 className="text-[5rem] leading-none mx-auto max-w-200">
            Let’s <span className="text-white uppercase font-bold">create </span> something together
          </h2>
          <div className="mt-8">
            <a href="#" className="btn btn-primary">
              Book A Call
            </a>
          </div>

          <div className="mt-8">
            <SocialIcons />
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <p className="text-sm">© 2026 My Portfolio. All rights reserved.</p>
        </div>
      </div>

      <div className="fixed bottom-7 right-7 z-1000">
        <a href="#" className="size-14 bg-green-600 rounded-md inline-flex items-center justify-center text-4xl hover:bg-green-500">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
