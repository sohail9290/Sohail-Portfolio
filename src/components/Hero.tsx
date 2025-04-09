
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 dark:from-portfolio-dark dark:to-slate-900 py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-portfolio-blue blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-portfolio-teal blur-3xl"></div>
      </div>

      <div className="portfolio-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <span className="text-portfolio-blue font-medium">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Sohail Khan Pattan
              <span className="block text-portfolio-blue">Full-Stack Developer & Software Engineer</span>
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-lg">
              I specialize in building scalable, accessible, and secure web applications with a focus on clean design and robust development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToProjects}
                className="bg-portfolio-blue hover:bg-portfolio-blue/80 text-white"
                size="lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/5"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <Avatar className="w-80 h-80 border-4 border-white shadow-xl">
              <AvatarImage
                src="src/components/DP.jpg"
                alt="Profile Picture"
                className="object-cover w-full h-full"
              />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
          <span className="text-sm text-portfolio-gray mb-2">Scroll Down</span>
          <ArrowDownCircle size={24} className="animate-bounce text-portfolio-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
