import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";

const useFunctionalities = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotate" : "initial";
  return {
    menuRef,
    buttonRef,
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar() {
  const useActive = useFunctionalities();
  return (
    <section className="fixed inset-0 bottom-auto z-[999] mx-auto mt-5 flex w-full px-[5%] md:mt-6 lg:mx-[5%] lg:w-auto lg:px-0">
      <Card className="max-w-xxl bg-brand-main mx-auto flex min-h-12 w-full items-center justify-between gap-x-4 gap-y-4 overflow-visible rounded-b-none px-5 backdrop-blur-sm md:min-h-18 md:px-8 lg:rounded-b-xl lg:bg-transparent">
        <Link href="#">
          <img
            loading="lazy"
            src="/codefloxx.svg"
            className="h-20 w-20 md:h-24 md:w-24"
            alt="Codefloxx Logo image"
          />
        </Link>
        <button
          ref={useActive.buttonRef}
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          {useActive.isDropdownOpen ? (
            <X color="white" size={32} />
          ) : (
            <Menu color="white" size={32} />
          )}
        </button>
        <motion.div
          variants={{
            open: { height: "var(--height, 100vh)" },
            close: { height: "auto" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          className="absolute top-full right-0 left-0 w-full overflow-hidden lg:static lg:top-auto lg:right-auto lg:left-auto lg:w-auto lg:overflow-visible lg:[--height:auto]"
        >
          <motion.div
            variants={{
              open: { y: 0 },
              close: { y: "var(--translate-y, -100%)" },
            }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.3 }}
            className="absolute -top-2 right-0 left-0 mx-auto w-full justify-self-center text-center lg:static lg:inset-auto lg:mx-0 lg:px-0 lg:text-left lg:[--translate-y:0%]"
          >
            <div
              ref={useActive.menuRef}
              className="border-scheme-border bg-brand-main flex w-full flex-col border border-t-0 p-5 pt-0 md:p-8 lg:w-auto lg:flex-row lg:border-none lg:bg-transparent lg:p-0"
            >
              <Link
                to="/"
                className="text-regular relative block py-3 text-center text-white lg:px-4 lg:py-2 lg:text-left"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-regular relative block py-3 text-center text-white lg:px-4 lg:py-2 lg:text-left"
              >
                Services
              </Link>
              <Link
                to="/project-cases"
                className="text-regular relative block py-3 text-center text-white lg:px-4 lg:py-2 lg:text-left"
              >
                Project Cases
              </Link>
              <div
                onMouseEnter={useActive.openOnDesktopDropdownMenu}
                onMouseLeave={useActive.closeOnDesktopDropdownMenu}
              >
                <button
                  className="text-regular flex w-full items-center justify-center gap-0 py-3 text-left text-white lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  <span>About</span>
                  <motion.span
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    animate={useActive.animateDropdownMenuIcon}
                    transition={{ duration: 0.3 }}
                  >
                    <RxChevronDown className="size-6" strokeWidth={0.5} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.nav
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    variants={{
                      open: {
                        opacity: "var(--opacity-open, 100%)",
                        y: 0,
                        visibility: "visible",
                        height: "auto",
                      },
                      close: {
                        opacity: "var(--opacity-close, 0)",
                        y: "var(--y-close, 0%)",
                        visibility: "hidden",
                        height: "var(--height, 0)",
                      },
                    }}
                    transition={{ duration: 0.2 }}
                    className="lg:border-scheme-border bg-brand-secondary rounded-lg lg:absolute lg:z-50 lg:border lg:[--height:auto] lg:[--y-close:25%]"
                  >
                    <Link
                      to="/about-us"
                      className="text-regular hover:bg-brand-shade-dark block rounded-lg py-3 text-center font-medium hover:text-white lg:px-4 lg:py-2 lg:text-left"
                    >
                      About Us
                    </Link>

                    {/* <Link
                      to="#"
                      className="text-regular hover:bg-brand-shade-dark block rounded-lg py-3 text-center font-medium hover:text-white lg:px-4 lg:py-2 lg:text-left"
                    >
                      Consultation
                    </Link> */}
                  </motion.nav>
                </AnimatePresence>
              </div>
              <div className="mt-4 flex flex-col items-center gap-4 lg:mt-0 lg:ml-8 lg:flex-row">
                {/* <Button
                  title="Quote"
                  variant="outline"
                  size="lg"
                  className="bg-brand-secondary w-full cursor-pointer rounded-full px-3 py-1.5 font-medium shadow-none hover:scale-105"
                >
                  Quote
                </Button> */}
                <Link to="/contact">
                  <Button
                    title="Contact&Quote"
                    size="lg"
                    className="bg-brand-shade-dark hover:bg-brand-shade-dark hover: w-full cursor-pointer rounded-full px-3 py-1.5 font-medium text-white hover:scale-105"
                  >
                    Contact & Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Card>
    </section>
  );
}
