import React from "react";
import { useRef, useEffect } from "react";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("bg-dark");
      } else {
        headerRef.current.classList.remove("bg-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="py-4 z-1040 fixed top-0 left-0 right-0" ref={headerRef}>
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6 items-center">
          <div className="col-span-4 max-md:col-span-6">
            <h1 className="text-2xl font-semibold">Sushavan Chakraborty</h1>
          </div>

          <div className="col-span-8 max-md:col-span-6 flex items-center justify-end gap-x-10">
            <nav>
              <ul className="flex gap-x-6">
                <li>
                  <a href="#">Work</a>
                </li>

                <li>
                  <a href="#">Experience</a>
                </li>

                <li>
                  <a href="#">Tools</a>
                </li>
              </ul>
            </nav>

            <div className="flex gap-x-5 items-center">
              <a href="tel:8918686237" className="text-white border-b-2 border-brand font-semibold text-2xl">
                +91 8918686237
              </a>
              <a href="#" className="btn btn-primary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
