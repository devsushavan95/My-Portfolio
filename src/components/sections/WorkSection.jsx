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
      imageUrl: "/images/dr_booking.jpg",
      projectUrl: "https://drbooking.in/",
      category: "Custom Development",
    },
    {
      id: 2,
      title: "Sahajayoga",
      imageUrl: "/images/sahajayoga.jpg",
      projectUrl: "https://sahajayogathai.com/",
      category: "Wordpress",
    },
    {
      id: 3,
      title: "My Tripnavigator",
      imageUrl: "/images/mytripnavigator.jpg",
      projectUrl: "https://www.mytripnavigator.com/",
      category: "Custom Development",
    },
    {
      id: 4,
      title: "Ayurvardhini",
      imageUrl: "/images/ayurvardhini.jpg",
      projectUrl: "https://ayurvardhini.com",
      category: "Wordpress",
    },
    {
      id: 5,
      title: "Sri Dev Shastri",
      imageUrl: "/images/sridevshastri.jpg",
      projectUrl: "https://sridevshastri.in/",
      category: "Wordpress",
    },
    {
      id: 6,
      title: "Needleking Tailors",
      imageUrl: "/images/needlekingtailors.jpg",
      projectUrl: "https://needlekingtailors.com/",
      category: "Wordpress",
    },
  ];

  return (
    <section className="py-20 max-md:py-16" id="workSection">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-6 items-center gap-x-6">
            <motion.h2 className="leading-none mb-12" initial={initialFadeInState} animate={finalFadeInState} transition={{ duration: 0.3, delay: 0.2 }}>
              Work <span className="size-4 rounded-full inline-block bg-brand max-md:size-3"></span>
            </motion.h2>
          </div>

          <div className="col-span-6 text-right">
            <motion.a href="tel:8918686237" className="btn btn-primary" initial={initialFadeInState} animate={finalFadeInState} transition={{ duration: 0.3, delay: 0.2 }}>
              Hire Me
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {workList.map((work, index) => (
            <WorkCard key={work.id} title={work.title} imageUrl={work.imageUrl} projectUrl={work.projectUrl} category={work.category} idx={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
