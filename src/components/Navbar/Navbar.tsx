import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ICONS } from "../../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState<string>("");
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Check if we're on the contact page
  const isContactPage = location.pathname === "/contact";

  const isTermsPage = location.pathname === "/terms-and-conditions";

  // Set up intersection observer to detect visible sections
  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero") {
            // Hero section visibility
            setIsHeroVisible(entry.isIntersecting);
          } else {
            // Other sections visibility
            if (entry.isIntersecting) {
              setVisibleSection(entry.target.id);
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: "-50px 0px -50px 0px", // Add some margin to avoid premature triggering
      }
    );

    // Observe the sections
    const heroSection = document.getElementById("hero");
    const aboutSection = document.getElementById("about");
    const teamSection = document.getElementById("team");

    if (heroSection) observer.observe(heroSection);
    if (aboutSection) observer.observe(aboutSection);
    if (teamSection) observer.observe(teamSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
      if (aboutSection) observer.unobserve(aboutSection);
      if (teamSection) observer.unobserve(teamSection);
    };
  }, [isHomePage]);

  // Reset hero visibility when not on home page
  useEffect(() => {
    if (!isHomePage) {
      setIsHeroVisible(false); // Use black logo on other pages
    }
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navigateToAbout = () => {
    // Navigate to home page first
    navigate("/");
    // Set visible section immediately
    setVisibleSection("about");
    // Then scroll to about section after a short delay
    setTimeout(() => {
      scrollToSection("about");
    }, 100);
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navigateToTeam = () => {
    // Navigate to home page first
    navigate("/");
    // Set visible section immediately
    setVisibleSection("team");
    // Then scroll to team section after a short delay
    setTimeout(() => {
      scrollToSection("team");
    }, 100);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-[87rem] mx-auto flex flex-row justify-between items-center py-6 md:py-6 lg:py-5 lg:4 lg:px-24 md:px-20 px-5 backdrop-blur-xs sm:backdrop-blur-none">
        <div>
          <Link to="/">
            <img
              className="w-[8.2rem] transition-all duration-300"
              src={
                isContactPage || isHeroVisible || isTermsPage
                  ? ICONS.reapCapitalWhite
                  : ICONS.reapCapitalBlack
              }
              alt=""
            />
          </Link>
        </div>

        <div className="hidden md:flex bg-gray-100 border-4 border-white rounded-2xl shadow-lg">
          <ul className="flex flex-row item-center border-white  gap-1  p-1 font-medium text-gray-800 ">
            <li
              className={`py-2.5 px-6 flex items-center justify-center rounded-lg transition-all duration-200 ${
                isHomePage && visibleSection === "about"
                  ? "border-1 border-green-500 "
                  : "border-1 border-transparent"
              }`}
            >
              <button
                onClick={navigateToAbout}
                className={`hover:text-green-600 cursor-pointer text-md ${
                  isHomePage && visibleSection === "about"
                    ? "text-green-600"
                    : "text-gray-800"
                }`}
              >
                About
              </button>
            </li>
            <li
              className={`py-2.5 px-6 flex items-center justify-center rounded-lg transition-all duration-200 ${
                isHomePage && visibleSection === "team"
                  ? "border-1 border-green-500 "
                  : "border-1 border-transparent"
              }`}
            >
              <button
                className={`hover:text-green-600 cursor-pointer text-md ${
                  isHomePage && visibleSection === "team"
                    ? "text-green-600"
                    : "text-gray-800"
                }`}
                onClick={navigateToTeam}
              >
                Team
              </button>
            </li>
            <li
              className={`py-2.5 px-6 flex items-center justify-center rounded-lg transition-all duration-200 ${
                isContactPage
                  ? "border-1 border-green-500 "
                  : "border-1 border-transparent"
              }`}
            >
              <Link
                className={`hover:text-green-600 text-md ${
                  isContactPage ? "text-green-600" : "text-gray-800"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* mobileHamburger */}
        <div className="md:hidden">
          <button
            className="flex flex-col gap-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-6 h-0.5 rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              } ${isContactPage || isHeroVisible ? "bg-white" : "bg-black"}`}
            ></span>
            <span
              className={`w-6 h-0.5 rounded transition-all mt-1 duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              } ${isContactPage || isHeroVisible ? "bg-white" : "bg-black"}`}
            ></span>
          </button>
        </div>
        <div
          className={`md:hidden absolute top-23 w-89 sm:w-2xl bg-white backdrop-blur-md border border-gray-200 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 py-6 px-5 font-medium text-gray-800">
            <li
              className={`py-2 px-4 rounded-lg transition-all duration-200 ${
                isHomePage && visibleSection === "about"
                  ? "border-1 border-green-500 shadow-lg"
                  : "border-1 border-transparent"
              } ${isOpen ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: isOpen ? "0.1s" : "0s" }}
            >
              <button
                onClick={navigateToAbout}
                className="hover:text-green-600 cursor-pointer text-md"
              >
                About
              </button>
            </li>
            <li
              className={`py-2 px-4 rounded-lg transition-all duration-200 ${
                isHomePage && visibleSection === "team"
                  ? "border-1 border-green-500 shadow-lg"
                  : "border-1 border-transparent"
              } ${isOpen ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: isOpen ? "0.2s" : "0s" }}
            >
              <button
                onClick={navigateToTeam}
                className="hover:text-green-600 cursor-pointer text-md"
              >
                Team
              </button>
            </li>
            <li
              className={`py-2 px-4 rounded-lg transition-all duration-200 ${
                isContactPage
                  ? "border-1 border-green-500 shadow-lg"
                  : "border-1 border-transparent"
              } ${isOpen ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: isOpen ? "0.3s" : "0s" }}
            >
              <Link
                onClick={() => setIsOpen(false)}
                className="hover:text-green-600 text-md"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
