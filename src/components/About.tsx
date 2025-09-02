
import { User, Mail, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const personalInfo = [
    { icon: User, label: "Name", value: "Sohail Khan Pattan" },
    { icon: Mail, label: "Email", value: "sohail.k9290@gmail.com" },
    { icon: MapPin, label: "Location", value: "San Jose, CA" },
    { icon: Calendar, label: "Experience", value: "2+ Years" },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="portfolio-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm <span className="highlight-text">Sohail Khan Pattan</span>,a passionate designer and developer with a knack for creating beautiful, functional digital experiences.
            </p>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              As a dedicated Full-Stack Developer with over two years of hands-on experience, I excel in crafting scalable, secure, and user-centric digital solutions. With a Master’s degree in Computer Science, I have successfully transformed legacy systems and engineered innovative platforms from scratch, seamlessly bridging frontend and backend development to drive business success.
            </p>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              My passion lies in delivering solutions that not only look great but also perform seamlessly—ensuring fast load times, robust security, and top-tier accessibility. By blending creative design thinking with technical expertise, I aim to provide user-friendly interfaces that everyone can enjoy.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-portfolio-blue">
                      <info.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-slate-50 dark:bg-slate-800 border-none shadow-md">
              <h3 className="text-xl font-bold mb-4">What I Do</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Web Development",
                    description: "Building responsive, fast-loading websites and web applications using modern technologies."
                  },
                  {
                    title: "API & Microservices",
                    description: "Designing robust RESTful APIs and microservices that drive scalable, efficient systems."
                  },
                  {
                    title: "Cloud & DevOps",
                    description: "Deploying secure cloud infrastructures and streamlined CI/CD pipelines for seamless releases."
                  },
                  {
                    title: "Automated Testing & Accessibility",
                    description: "Integrating comprehensive testing and strict accessibility standards to ensure high-quality, inclusive products."
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-bold text-portfolio-blue mb-1">{item.title}</h4>
                    <p className="text-slate-700 dark:text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
