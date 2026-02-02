import React from "react";
import { motion } from "motion/react";

function ToolCard({ idx, name, imgSrc }) {
  return (
    <motion.div className="text-center p-5 border border-white/10 rounded-md hover:border-white transition-all duration-300" initial={{opacity: 0, scale: 0.95}} whileInView={{opacity:1, scale: 1}} transition={{duration: 0.3, delay: 0.2 * idx}} viewport={{once: true}} >
      <img src={imgSrc} alt={name} width={64} height={64} className="block mx-auto" />
      <p className="text-white mt-3">{name}</p>
    </motion.div>
  );
}

export default ToolCard;
