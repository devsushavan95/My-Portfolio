import React from "react";
import ToolCard from "../cards/ToolCard.jsx";
import { motion } from "motion/react";
import { useContext } from "react";
import { animContext } from "../../App.jsx";

function ToolSection() {
  const { initial: initialFadeInState, final: finalFadeInState } = useContext(animContext);

  const toolList = [
    {
      name: "HTML 5",
      imgSrc: "/images/html-5.png",
    },
    {
      name: "CSS 3",
      imgSrc: "/images/css-3.png",
    },
    {
      name: "JavaScript",
      imgSrc: "/images/javascript.png",
    },
    {
      name: "React",
      imgSrc: "/images/react.png",
    },
    {
      name: "Git",
      imgSrc: "/images/git.png",
    },
    {
      name: "php",
      imgSrc: "/images/php.png",
    },
    {
      name: "Wordpress",
      imgSrc: "/images/wordpress.png",
    },
    {
      name: "Shopify",
      imgSrc: "/images/shopify.png",
    },
    // You can add more tool objects here
  ];
  return (
    <section className="py-20 max-md:py-16" id="toolSection">
      <div className="container">
        <motion.h2 className="leading-none mb-12 max-md:text-center max-sm:text-[1.875rem]" initial={initialFadeInState} whileInView={finalFadeInState} transition={{ duration: 0.3 }} viewport={{ once: true }}>
          Tools & Technologies <span className="size-4 rounded-full inline-block bg-brand max-md:size-3"></span>
        </motion.h2>

        <div className="grid grid-cols-5 gap-6 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-md:gap-4">
          {toolList.map((tool, index) => {
            return <ToolCard key={index} name={tool.name} imgSrc={tool.imgSrc} idx={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ToolSection;
