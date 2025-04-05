import { NavLink } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  DribbbleLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import ProjectsData from "~/data/projects";
import EducationData from "~/data/education";
import StackData from "~/data/stack";
import AnimatedHeroImage from "~/components/animated-hero-image";
import TestimonialSection from "~/components/testimonial-section";
import TestimonialData from "~/data/testimonials";
import BrandsSection from "~/components/brands-section";
import Footer from "~/components/footer";
import FeaturedProjects from "~/components/featured-projects";
import NavBar from "~/components/navbar";

export function meta({}) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="relative">
      <div className="h-screen flex justify-between flex-col">
        <div className="h-full">
          <motion.div
            className="bg-stone-900 flex justify-center items-center overflow-hidden"
            initial={{ height: "100vh" }}
            animate={{ height: "40vh" }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          >
            <AnimatedHeroImage />
          </motion.div>
          <div className="px-4 md:px-0 container flex justify-between">
            <div className="w-full md:w-1/3 py-10 space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed md:leading-relaxed">
                Hi there! I'm Piyush Bendale, an India-based, award-winning
                UI/UX Designer and Creative Frontend Developer with over 6 years
                of experience. I currently work with the amazing team @
                Intelligent Reach Ltd. London.
              </p>

              <button className="bg-white px-6 py-3">Download my CV</button>
            </div>
            <div className="text-8xl font-bold py-10 w-1/4 text-right opacity-20 tracking-tighter hidden md:block">
              <h1>
                Good design is <span className="opacity-40">invisible</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <FeaturedProjects />

      <section className="container py-12 px-4 md:px-0">
        <h2 className="text-md font-bold uppercase opacity-50 tracking-widest">
          Experience
        </h2>

        <div className="mt-12">
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]" />
          <div className="py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-2xl md:text-4xl font-light">
              Intelligent Reach Ltd, London
            </p>
            <div className="flex flex-col md:items-end gap-1">
              <p className="text-xl md:text-2xl font-light">
                UI/UX Designer & Frontend Developer
              </p>
              <p className="text-md md:text-lg opacity-70 font-light">
                Sep 2021 - Current
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]" />
          <div className="py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-2xl md:text-4xl font-light">Medbuyer, India</p>
            <div className="flex flex-col md:items-end gap-1">
              <p className="text-xl md:text-2xl font-light">
                Frontend Developer Intern
              </p>
              <p className="text-md md:text-lg opacity-70 font-light">
                Feb 2021 - Sep 2021
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]" />
        </div>
      </section>

      <section className="container py-12 px-4 md:px-0">
        <h2 className="text-md font-bold uppercase opacity-50 tracking-widest">
          Education
        </h2>

        <div className="mt-12">
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]" />

          {EducationData.map((item, index) => {
            return (
              <div key={index}>
                <div className="py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <p className="text-2xl md:text-4xl font-light">
                    {item.title}
                  </p>
                  <div className="flex flex-col md:items-end gap-1">
                    <p className="text-xl md:text-2xl font-light">
                      {item.subtitle}
                    </p>
                    <p className="text-md md:text-lg opacity-70 font-light">
                      {item.timeline}
                    </p>
                  </div>
                </div>
                <div
                  key={`line-${index}`}
                  className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="container py-12 px-4 md:px-0">
        <h2 className="text-md font-bold uppercase opacity-50 tracking-widest">
          My Stack
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {StackData.map((item, index) => {
            return (
              <div
                className="bg-[#ece5d9] p-4 flex gap-4 items-center rounded-md"
                key={index}
              >
                <div>
                  <img src={item.logo} alt={item.title} width={48} />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-light">{item.title}</p>
                  <p className="text-md opacity-70 font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <TestimonialSection />

      <BrandsSection />

      <Footer />

      <NavBar />
    </div>
  );
}
