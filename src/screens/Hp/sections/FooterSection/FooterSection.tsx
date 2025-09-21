import { ICONS } from "../../../../assets";
import { useNavigate, Link } from "react-router-dom";
export const FooterSection = () => {
  const navigate = useNavigate();
  const navigateToTerms = () => {
    navigate("/terms-and-conditions");
  };
  return (
    <footer className="relative w-full bg-black overflow-hidden flex flex-col items-center py-22">
      {/* Main logo section */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-4">
          {/* Logo icon - square with teal background and white arrow */}
          <div className="w-20 h-20  flex items-center justify-center">
            <img src={ICONS.logo} alt="logo" />
          </div>

          {/* Company name */}
          <h2 className="text-white text-7xl font-light tracking-tight">
            Reap Capital
          </h2>
        </div>
      </div>

      {/* Horizontal lines section */}
      <div className="w-full max-w-[85%] px-8">
        {/* First line */}
        <div className="w-full h-px bg-white/10"></div>

        {/* Content between lines */}
        <div className="flex justify-between items-center py-6 relative z-10">
          {/* Copyright text */}
          <span className="text-white text-md">
            All copyrights reserve at @ReapCapital
          </span>

          {/* Terms and Conditions link */}
          <Link
            to="/terms-and-conditions"
            className="text-green-400 text-sm hover:text-teal-300 transition-colors cursor-pointer select-none relative z-20"
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
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-green-900/40 to-transparent"></div>
    </footer>
  );
};
