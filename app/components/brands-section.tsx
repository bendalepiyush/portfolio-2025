import TestimonialData from "~/data/testimonials";

export default function BrandsSection() {
  return (
    <section className="container py-12 px-4 md:px-0">
      <h2 className="text-md font-bold uppercase opacity-50 tracking-widest">
        Brands I have worked with
      </h2>

      <div className="mt-12 relative">
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F1EADE] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F1EADE] to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="inline-flex animate-scroll">
            {/* First set of logos */}
            {TestimonialData.map((client, index) => (
              <div
                key={`first-${index}`}
                className="w-[250px] md:w-[300px] flex items-center justify-center px-2 group"
              >
                <img
                  src={client.companyLogo}
                  alt={client.name}
                  className="w-[250px] md:w-[300px] h-16 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0 mx-auto"
                />
              </div>
            ))}
            {/* Second set of logos for seamless loop */}
            {TestimonialData.map((client, index) => (
              <div
                key={`second-${index}`}
                className="w-[300px] flex items-center justify-center px-2 group"
              >
                <img
                  src={client.companyLogo}
                  alt={client.name}
                  className="h-16 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0 mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
