import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Maximize } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

// Project Data with updated image URLs
const projects = [
  {
    id: 1,
    title: "Promptopia",
    category: "Web Development",
    //image: "https://unsplash.com/photos/red-and-white-x-logo-L8iPDE99z9c",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc1ODF8MHwxfHNlYXJjaHwxfHxhc3BpcmF0aW9ufGVufDB8fHx8MTY5NTAzNzk0OQ&ixlib=rb-1.2.1&q=80&w=400",
    tags: ["React", "Next.js", "MongoDB", "google OAuth"],
    description: "AI prompt-sharing application built using Next.js 14, MongoDB, and Tailwind CSS. It allows users to create, share, and manage AI-generated prompts with a clean and intuitive interface.",
    liveLink: "https://promptopia-weld-ten.vercel.app/",
    codeLink: "https://github.com/sohail9290/Promptopia",
    details: "This comprehensive application lets users share and explore creative prompts. It leverages the latest web development techniques for a fast, interactive experience."
  },
  {
    id: 2,
    title: "CarePulse",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc1ODF8MHwxfHNlYXJjaHwxfHxIZWFsdGhzY2FyZXxlbnwwfHx8fDE2OTUwMzc5NDk&ixlib=rb-1.2.1&q=80&w=400",
    tags: ["Typescript", "Next.js", "Tailwind CSS"],
    description: "Healthcare patient management system that allows patients to easily register, book, and manage their appointments with doctors. It features administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications to keep users informed.",
    liveLink: "https://care-pulse-sepia.vercel.app/",
    codeLink: "https://github.com/sohail9290/carePulse",
    details: "This project involved modernizing the patient appointment workflow with responsive design and intuitive interfaces. By incorporating real-time notifications and secure data management, it offers an engaging user experience."
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-gray-800">
      <div className="portfolio-container">
        <h2 className="section-title">My Projects</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category
                ? "bg-portfolio-blue hover:bg-portfolio-blue/90"
                : "hover:text-portfolio-blue hover:border-portfolio-blue"
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <CardContent className="p-0">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-portfolio-blue p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-portfolio-blue p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                          >
                            <Code size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-portfolio-dark dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-portfolio-blue px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedProject && (
          <Dialog>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-sm">
                  {selectedProject.category} • {selectedProject.tags.join(", ")}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <p className="mb-6 text-slate-700 dark:text-slate-300">
                  {selectedProject.details}
                </p>
                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="bg-portfolio-blue hover:bg-portfolio-blue/80"
                  >
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
                      <Code size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
              <DialogClose className="absolute right-4 top-4" />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Projects;
