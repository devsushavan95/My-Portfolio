import React from "react";
import { motion } from "motion/react";

function WorkCard({ idx, title, imageUrl, projectUrl, category }) {
  return (
    <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 * idx }} viewport={{ once: true }}>
      {" "}
      <a href={projectUrl} target="_blank">
        <img src={imageUrl} alt={title} width={400} height={400} className="aspect-4/3 rounded-sm object-cover" />
      </a>
      <h3 className="mt-4 text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-brand uppercase">{category}</p>
    </motion.div>
  );
}

export default WorkCard;
