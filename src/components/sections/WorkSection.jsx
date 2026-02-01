import React from "react";
import WorkCard from "../cards/WorkCard";
import { motion } from "motion/react";
import { useContext } from "react";
import { animContext } from "../../App.jsx";

function WorkSection() {
  const { initial: initialFadeInState, final: finalFadeInState } = useContext(animContext);
  const workList = [
    {
      id: 1,
      title: "Drbooking",
      imageUrl: "https://dummyimage.com/400x300/ededed/fff",
      projectUrl: "#",
      category: "Custom Development",
    },
    {
      id: 2,
      title: "Sahajayoga",
      imageUrl: "https://dummyimage.com/400x300/ededed/fff",
      projectUrl: "#",
      category: "Wordpress",
    },
    {
      id: 3,
      title: "My Tripnavigator",
      imageUrl: "https://dummyimage.com/400x300/ededed/fff",
      projectUrl: "#",
      category: "Custom Development",
    },
    {
      id: 4,
      title: "Ayurvardhini",
      imageUrl: "https://dummyimage.com/400x300/ededed/fff",
      projectUrl: "#",
      category: "Wordpress",
    },
    {
      id: 5,
      title: "Vidyanidhi",
      imageUrl: "https://dummyimage.com/400x300/ededed/fff",
      projectUrl: "#",
      category: "Wordpress",
    },
    {
      id: 6,
      title: "Holzmate",
      imageUrl: "https://dummyimage.com/400x300/ededed/fff",
      projectUrl: "#",
      category: "Wordpress",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-6 max-md:col-span-12 items-center gap-x-6">
            <motion.h2 className="text-[4rem] leading-none mb-12 max-md:text-center" initial={initialFadeInState} animate={finalFadeInState} transition={{ duration: 0.3, delay: 0.2 }}>
              Work <span className="size-4 rounded-full inline-block bg-brand"></span>
            </motion.h2>
          </div>

          <div className="col-span-6 max-md:col-span-12 text-right max-md:text-center">
            <motion.a href="#" className="btn btn-primary" initial={initialFadeInState} animate={finalFadeInState} transition={{ duration: 0.3, delay: 0.2 }}>
              Hire Me
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {workList.map((work, index) => (
            <WorkCard key={work.id} title={work.title} imageUrl={work.imageUrl} projectUrl={work.projectUrl} category={work.category} idx={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
