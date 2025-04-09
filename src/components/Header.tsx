
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-portfolio-dark/80 backdrop-blur-sm shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="portfolio-container">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            <span className="text-portfolio-blue">Sohail</span> Khan
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["about", "projects", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium hover:text-portfolio-blue transition-colors capitalize"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => window.open("src/components/Sohail_Resume.pdf", "Sohail Resume")}
              className="bg-portfolio-blue hover:bg-portfolio-blue/80 text-white"
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="flex md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-portfolio-dark shadow-md py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-6">
              {["about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium py-2 hover:text-portfolio-blue transition-colors capitalize text-left"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => window.open("src\components\Sohail_Resume.pdf", "_blank")}
                className="bg-portfolio-blue hover:bg-portfolio-blue/80 text-white w-full"
              >
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
