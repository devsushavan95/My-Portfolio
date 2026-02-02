import React from "react";
import SocialIcons from "../elements/SocialIcons";
import { motion } from "motion/react";
import { useContext } from "react";
import { animContext } from "../../App.jsx";

function HeroSection() {
  const { initial: initialFadeInState, final: finalFadeInState } = useContext(animContext);
  return (
    <section className="py-20 bg-dark">
      <div className="container">
        <div className="text-center py-20 max-lg:py-16 max-sm:py-10">
          <motion.div className="mb-8" initial={initialFadeInState} animate={finalFadeInState} transition={{ duration: 0.3, delay: 0.2 }}>
            <img src="/images/my-pic.jpg" alt="" width={100} height={100} className="rounded-full mx-auto" />
          </motion.div>

          <motion.p className="text-brand text-xl mb-3 max-xl:max-w-170 mx-auto max-md:text-base" initial={initialFadeInState} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
            A passionate student who loves to build beautiful and FUNCTIONAL WEBSITES and WEB APPLICATIONS
          </motion.p>

          <motion.h2 className="text-[4rem] leading-[1.2] text-body-text max-w-300 mx-auto max-xl:text-[3.25rem] max-lg:text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.75rem]" initial={initialFadeInState} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.7 }}>
            Hello, I'm <span className="text-white font-bold uppercase">Sushavan Chakraborty</span> & I'm a <span className="text-white font-bold uppercase">Web Developer</span>
          </motion.h2>

          <motion.div className="inline-flex items-center gap-x-3 mt-8 max-sm:flex-col" initial={initialFadeInState} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 1 }}>
            <span>Check me on:</span>

            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
