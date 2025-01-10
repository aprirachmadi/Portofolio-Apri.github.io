import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import undip from "../assets/education/undip.jpg";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Statistics",
      school: "Universitas Diponegoro",
      year: "2021-present",
      description: "Focus on Computational Statistics and Data Science",
      achievements: ["GPA: 3.72/4.0", "Teaching Assistant for Algorithms and Programming"],
      details: {
        courses: [
          "Linear Algebra",
          "Algorithms and Programing",
          "Computational Statistics",
          "Time Series Analysis",
          "Multivariate Statistics",
          "Calculus",
          "Optimization Methods"
        ],
        projects: [
          "TrOCR Utilization for Vehicle License Plate Recognition"
        ],
        honors: [
          "Satria Data Finalist Delegate for 3 consecutive years (2022, 2023, 2024)"
        ]
      },
      image: undip
    }
  ];

  return (
  <section className="py-20 bg-background" id="education">
    <div className="container px-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <Dialog key={index}>
            <DialogTrigger className="w-full">
              <div
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-up text-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{edu.degree}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[calc(90vh-8rem)] pr-4">
                <div className="mt-4">
                  <img 
                    src={edu.image} 
                    alt={edu.school}
                    className="w-full h-60 object-cover rounded-lg mb-6"
                  />
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Relevant Courses:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {edu.details.courses.map((course, i) => (
                          <li key={i} className="text-muted-foreground">{course}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Final Project:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {edu.details.projects.map((project, i) => (
                          <li key={i} className="text-muted-foreground">{project}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Honors & Awards:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {edu.details.honors.map((honor, i) => (
                          <li key={i} className="text-muted-foreground">{honor}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Education;