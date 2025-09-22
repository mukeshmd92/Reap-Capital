import { ICONS } from "../../../../assets";
import { useNavigate, Link } from "react-router-dom";
export const FooterSection = () => {
  const navigate = useNavigate();
  const navigateToTerms = () => {
    navigate("/terms-and-conditions");
  };
  return (
    <footer className="relative w-full bg-black overflow-hidden flex flex-col items-center py-18 sm:py-18 md:py-20 lg:py-22">
      {/* Main logo section */}
      <div className="flex items-center justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
        <div className="flex items-center gap-3 sm:gap-3 md:gap-4 pb-5">
          {/* Logo icon - square with teal background and white arrow */}
          <div className="w-15 h-15 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center">
            <img
              src={ICONS.logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Company name */}
          <h2 className="text-white text-6xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-light tracking-tight">
            Reap Capital
          </h2>
        </div>
      </div>

      {/* Horizontal lines section */}
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] px-4 sm:px-6 md:px-8">
        {/* First line */}
        <div className="w-full h-px bg-white/10"></div>

        {/* Content between lines */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 relative z-10 gap-3 sm:gap-0">
          {/* Copyright text */}
          <span className="text-white text-sm sm:text-sm md:text-md text-center sm:text-left">
            All copyrights reserve at @ReapCapital
          </span>

          {/* Terms and Conditions link */}
          <Link
            to="/terms-and-conditions"
            className="text-green-400 text-sm sm:text-sm hover:text-teal-300 transition-colors cursor-pointer select-none relative z-20 text-center sm:text-right"
            onClick={navigateToTerms}
            style={{
              cursor: "pointer",
              pointerEvents: "auto",
              zIndex: 999,
              textDecoration: "none",
            }}
          >
            Terms and Conditions
          </Link>
        </div>

        {/* Second line */}
        <div className="w-full h-px bg-white/10"></div>
      </div>

      {/* Subtle teal gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-32 md:h-40 lg:h-44 bg-gradient-to-t from-green-900/40 to-transparent"></div>
    </footer>
  );
};
