import React from "react";
import ExpCard from "../cards/ExpCard.jsx";

import { motion } from "motion/react";
import { useContext } from "react";
import { animContext } from "../../App.jsx";

function ExpSection() {
  const { initial: initialFadeInState, final: finalFadeInState } = useContext(animContext);

  const expList = [
    {
      company: "Yourbizpartner",
      role: "Full Stack Web Developer",
      duration: "12-2024 - Present",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, quae.",
    },
    {
      company: "Adbuffs Pvt Ltd.",
      role: "Frontend & Wordpress Developer",
      duration: "04-2024 - 12-2024",
      description: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      company: "TSM",
      role: "Front-end & Wordpress Developer",
      duration: "06-2021 - 03-2024",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // You can add more experience objects here
  ];
  return (
    <section className="py-20 bg-dark max-md:py-16" id="expSection">
      <div className="container">
        <motion.h2 className="leading-none mb-12 max-lg:mb-6 max-md:text-center max-sm:mb-3" initial={initialFadeInState} whileInView={finalFadeInState} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }}>
          Experience <span className="size-4 rounded-full inline-block bg-brand max-md:size-3"></span>
        </motion.h2>

        <ul className="*:border-b *:border-b-white/10 *:last:border-b-0">
          {expList.map((exp, index) => (
            <motion.li initial={initialFadeInState} whileInView={finalFadeInState} transition={{ duration: 0.3, delay: 0.2 * index }} viewport={{ once: true }}>
              <ExpCard key={index} company={exp.company} role={exp.role} duration={exp.duration} description={exp.description} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExpSection;
