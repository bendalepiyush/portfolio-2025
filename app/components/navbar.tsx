import {
  ArrowUp,
  DribbbleLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollTop(latest > window.innerHeight);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.3,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed bottom-0 left-0 w-full border-t border-[rgba(0,0,0,0.1)] bg-[#F1EADE] z-50"
    >
      <div className="flex container items-center justify-between px-4 md:px-0">
        <div className="flex gap-8">
          <NavLink to="/" className="py-6">
            Work
          </NavLink>
          {/* <NavLink to="/" className="py-6">
              Articles & Publications
            </NavLink> */}
          {/* <NavLink to="/" className="py-6">
            About
          </NavLink> */}
          <NavLink to="/" className="py-6">
            Contact
          </NavLink>
        </div>
        <div className="flex gap-6">
          {!showScrollTop ? (
            <>
              <NavLink to="/" className="py-6">
                <LinkedinLogo size={28} />
              </NavLink>
              <NavLink to="/" className="py-6">
                <DribbbleLogo size={28} />
              </NavLink>
              <NavLink to="/" className="py-6">
                <InstagramLogo size={28} />
              </NavLink>
            </>
          ) : (
            <div
              className="bg-[rgba(0,0,0,0.05)] p-4 cursor-pointer"
              onClick={scrollToTop}
            >
              <ArrowUp color="black" size={24} />
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
