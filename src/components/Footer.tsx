
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="portfolio-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-portfolio-blue">Sohail </span>Khan Pattan
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className="bg-portfolio-blue/10 hover:bg-portfolio-blue/20 text-portfolio-blue p-3 rounded-full transition-colors mb-4"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Sohail Khan Pattan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
