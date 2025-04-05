import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialData from "~/data/testimonials";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const TestimonialSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToCenter = (index: number) => {
    if (!containerRef.current || !itemsRef.current[index]) return;

    const container = containerRef.current;
    const item = itemsRef.current[index];
    const containerWidth = container.offsetWidth;
    const itemWidth = item!.offsetWidth;

    const scrollTo = item!.offsetLeft - containerWidth / 2 + itemWidth / 2;

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToCenter(expandedIndex);
  }, [expandedIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex((prev) =>
      prev === TestimonialData.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex((prev) =>
      prev === 0 ? TestimonialData.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-12">
      <div className="container px-4 md:px-0">
        <h2 className="text-md font-bold uppercase opacity-50 tracking-widest">
          What people say about me
        </h2>
      </div>
      <div className="mt-12 relative">
        <div className="hidden md:block">
          <div
            ref={containerRef}
            className="flex gap-4 items-center overflow-x-hidden scroll-smooth container h-[300px]"
          >
            {TestimonialData.map((testimonial, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="relative md:flex-shrink-0 cursor-pointer transition-all duration-500 ease-out"
                onClick={() => setExpandedIndex(index)}
                layout
                style={{
                  width: expandedIndex === index ? "900px" : "275px",
                  height: expandedIndex === index ? "300px" : "275px",
                }}
              >
                {/* Testimonial Card */}
                <div
                  className={`flex rounded-lg overflow-hidden transition-all items-center ${
                    expandedIndex === index
                      ? "h-[300px] w-[900px] "
                      : "h-[275px] w-[275px]"
                  }`}
                >
                  {/* Image Section (Always Square) */}
                  <div
                    className="flex-shrink-0 overflow-hidden"
                    style={{
                      filter:
                        expandedIndex === index ? "none" : "grayscale(100%)",
                      width: expandedIndex === index ? "300px" : "275px",
                      height: expandedIndex === index ? "300px" : "275px",
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section (Visible Only When Expanded) */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        className="flex-1 py-4 px-16 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-lg font-light mb-auto line-clamp-7">
                          "{testimonial.feedback}"
                        </p>
                        <div className="mt-6">
                          <p className="text-lg">
                            {testimonial.name}
                            <span className="text-base text-gray-600">
                              {" "}
                              | {testimonial.title}
                            </span>
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden container px-4">
          <motion.div
            className="rounded-lg"
            key={expandedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg font-light mb-6">
              "{TestimonialData[expandedIndex].feedback}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={TestimonialData[expandedIndex].image}
                alt={TestimonialData[expandedIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">
                  {TestimonialData[expandedIndex].name}
                </p>
                <p className="text-sm text-gray-600">
                  {TestimonialData[expandedIndex].title}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="container flex items-center gap-2 mt-12 px-4 md:px-0">
          <button
            onClick={handlePrev}
            className="rounded-full py-4 px-8 flex items-center justify-center transition-all z-10 border border-1 border-black"
          >
            <CaretLeft size={20} weight="bold" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full py-4 px-8 flex items-center justify-center transition-all z-10 border border-1 border-black"
          >
            <CaretRight size={20} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
