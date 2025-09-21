import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ReapLogo from "../../assets/icons/ReapLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Check if we're on the contact page
  const isContactPage = location.pathname === "/contact";

  // Set up intersection observer to detect visible sections
  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-100px 0px -100px 0px", // Add some margin to avoid premature triggering
      }
    );

    // Observe the sections
    const aboutSection = document.getElementById("about");
    const teamSection = document.getElementById("team");

    if (aboutSection) observer.observe(aboutSection);
    if (teamSection) observer.observe(teamSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
      if (teamSection) observer.unobserve(teamSection);
    };
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
      <div className=" max-w-7xl mx-auto  flex flex-row justify-between  items-center py-6 lg:py-5 lg:4 lg:px-24  md:px-20 px-7 ">
        <div>
          <Link to="/">
            <img className="w-32 md:w-32 " src={ReapLogo} alt="" />
          </Link>
        </div>

        <div className="hidden md:flex bg-green-50 border-4 border-white rounded-xl">
          <ul className="flex flex-row item-center border-white  gap-1  p-1.5 font-medium text-gray-800 ">
            <li
              className={`py-1 px-4 rounded-lg transition-all duration-200 ${
                isHomePage && visibleSection === "about"
                  ? "border-2 border-green-500 "
                  : "border-2 border-transparent"
              }`}
            >
              <button
                onClick={navigateToAbout}
                className="hover:text-green-600 cursor-pointer"
              >
                About
              </button>
            </li>
            <li
              className={`py-1 px-4 rounded-lg transition-all duration-200 ${
                isHomePage && visibleSection === "team"
                  ? "border-2 border-green-500 "
                  : "border-2 border-transparent"
              }`}
            >
              <button
                className="hover:text-green-600 cursor-pointer"
                onClick={navigateToTeam}
              >
                Team
              </button>
            </li>
            <li
              className={`py-1 px-4 rounded-lg transition-all duration-200 ${
                isContactPage
                  ? "border-2 border-green-500 "
                  : "border-2 border-transparent"
              }`}
            >
              <Link className="hover:text-green-600" to="/contact">
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
              className={`w-6 h-0.5   bg-white rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5   bg-white rounded transition-all mt-1 duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-23  w-89 sm:w-2xl bg-amber-50 border-sm grey-200 rounded-xl shadow  ">
            <ul
              className="flex flex-col items-center gap-5 py-6 
                  px-5 font-medium text-gray-800   "
            >
              <li
                className={`py-2 px-4 rounded-lg transition-all duration-200 ${
                  isHomePage && visibleSection === "about"
                    ? "border-2 border-green-500 shadow-lg"
                    : "border-2 border-transparent"
                }`}
              >
                <button
                  onClick={navigateToAbout}
                  className="hover:text-green-600 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li
                className={`py-2 px-4 rounded-lg transition-all duration-200 ${
                  isHomePage && visibleSection === "team"
                    ? "border-2 border-green-500 shadow-lg"
                    : "border-2 border-transparent"
                }`}
              >
                <button
                  onClick={navigateToTeam}
                  className="hover:text-green-600 cursor-pointer"
                >
                  Team
                </button>
              </li>
              <li
                className={`py-2 px-4 rounded-lg transition-all duration-200 ${
                  isContactPage
                    ? "border-2 border-green-500 shadow-lg"
                    : "border-2 border-transparent"
                }`}
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  className="hover:text-green-600"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
