
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "TypeScript", level: 70 },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Time Management",
    "Creativity",
  ];

  const tools = [
    { name: "Figma", category: "Design" },
    { name: "Adobe XD", category: "Design" },
    { name: "Visual Studio Code", category: "Development" },
    { name: "Git", category: "Version Control" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "MongoDB", category: "Database" },
    { name: "Photoshop", category: "Design" },
    { name: "Illustrator", category: "Design" },
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="portfolio-container">
        <h2 className="section-title">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-portfolio-blue">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-slate-200 dark:bg-slate-700 bg-gradient-to-r from-portfolio-blue to-portfolio-teal"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800 rounded-full px-4 py-2 text-sm shadow-sm"
                  >
                    <span>{tool.name}</span>
                    <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900/30 text-portfolio-blue px-2 py-0.5 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-md bg-slate-50 dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Master of Science in Computer Science</h4>
                    <p className="text-slate-600 dark:text-slate-300">University of Alabama at Birmingham</p>
                  </div>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-portfolio-blue px-2 py-1 rounded">
                    Jan 2023 - Dec 2024
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-slate-50 dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Java Oracle Certified Associate (OCA)</h4>
                    <p className="text-slate-600 dark:text-slate-300">Oracle</p>
                  </div>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-portfolio-blue px-2 py-1 rounded">
                    April 2022
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
