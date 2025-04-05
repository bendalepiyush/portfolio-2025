import { ArrowUpRight } from "@phosphor-icons/react";
import ProjectsData from "~/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="px-4 md:px-0 container py-24 relative">
      <h2 className="text-md font-bold uppercase opacity-50 tracking-widest">
        Featured Projects
      </h2>

      <div className="pt-12 space-y-12">
        {ProjectsData.map((item, index) => {
          return (
            <div
              key={`project-${index}`}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 border-b border-[rgba(0,0,0,0.1)] pb-12`}
            >
              <div className="aspect-[4/3] bg-[url('/project-1-1.png')] bg-cover rounded-lg" />
              <div className="space-y-8 md:space-y-10 py-8">
                <div className="flex justify-between">
                  <p>{item.role}</p>
                </div>

                <div className="flex justify-between gap-12">
                  <h3 className="text-2xl md:text-3xl leading-snug">
                    {item.title}
                  </h3>

                  <ArrowUpRight size={48} />
                </div>

                <div className="grid grid-cols-2 gap-12">
                  {item.stats.map((stat, i) => {
                    return (
                      <div key={i}>
                        <p className="text-lg md:text-xl mb-1">{stat.title}</p>
                        <p className="text-md md:text-lg font-light">
                          {stat.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-2">
                  <p className="text-sm md:text-md font-light">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((item) => (
                      <div
                        key={item}
                        className="text-sm md:text-md border border-[rgba(0,0,0,0.1)] py-2 px-4 rounded-full"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
