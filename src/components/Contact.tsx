
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sohail.k9290@gmail.com",
      link: "mailto:sohail.k9290@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 205 899 6169",
      link: "tel:+12058996169",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Birmingham, AL",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-gray-800">
      <div className="portfolio-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              Have a project in mind or want to collaborate? Feel free to reach out using the form or through any of my contact details below.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center text-portfolio-blue group-hover:bg-portfolio-blue group-hover:text-white transition-colors">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">{info.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 group-hover:text-portfolio-blue transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
