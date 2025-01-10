import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Briefcase } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "PT Salam Pacific Indonesia Lines",
      period: "October 2024-Present",
      description: "Utilizing AI to optimize business processes",
      details: {
        responsibilities: [
          "Developed an end-to-end automated cashier system integrating YOLO11 for object detection, MobileNet for fine-grained classification, and a SOTA zero-shot segmentation model for automated data annotation. Designed and built both the inference and training pipelines, exposed via a FastAPI backend, for efficient and scalable deployment.",
          "Developed an AI-powered training recommendation system using Python, TensorFlow, and Flask. Implemented a collaborative filtering model",
          "Designed an AI pipeline for receipt processing, using PaddleOCR for text extraction and Llama for information retrieval.",
          "Utilized deep learning to model SPILTV program participant engagement based on their evaluation scores.",
          "Designed an AI-powered audit assistant utilizing Llama with Langchain, implementing a RAG pipeline. Employed ChromaDB for retrieval of internal documents."
        ],
        technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Numpy", "llama", "Groq", "YOLO"],
        achievements: [
          "Successfully build fully-automated Pipeline for Automated Cashier Project",
          "Increased the accuracy of the training recommendation system",
          "Successfully done atleast 5 projects in 3 months",
        ]
      },
      image: "../assets/experience/spil.png"
    },
    {
      title: "Part-time Data Scientist Intern",
      company: "Braincore.Id",
      period: "April 2024-August 2024",
      description: "Part of Data Science and Analytics Division",
      details: {
        responsibilities: [
          "Developed a comprehensive tableau dashboard for the KRL commuter line, analyzing the schedule's busyness and number of operating stations and train."
        ],
        technologies: ["Python", "Tableau"],
        achievements: [
          ""
        ]
      },
      image: "../assets/experience/braincore (1).png"
    },
    {
      title: "Machine Learning Cohort at Bangkit Academy 2023",
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      period: "August 2023-January 2024",
      description: "A 6-month intensive program to learn machine learning",
      details: {
        responsibilities: [
          "Learned the key concepts and applications of Data Analytics, Mathematics for Machine Learning, from foundational to cutting-edge Machine Learning algorithms, Deep Learning, as well as Model Deployment",
          "Learned several sets of soft skills such as growth mindset, critical thinking, problem-solving, time management, project management, and professional communication",
          "Building Final Capstone Project: UPCYCLE"
        ],
        technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Numpy"],
        achievements: [
          "Build a garbage classifier model using TensorFlow with 91% accuracy and help deploy the model on android devices using TensorFlow lite for Capstone Project",
          "Graduated with a Distinction grade"
        ]
      },
      image: "../assets/experience/bangkit.png"
    }
  ];

  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Dialog key={index}>
              <DialogTrigger className="w-full">
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-up text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <Briefcase className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{exp.title} at {exp.company}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[calc(90vh-8rem)] pr-4">
                  <div className="mt-4">
                    <img 
                      src={exp.image} 
                      alt={exp.company}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Project/Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.details.responsibilities.map((resp, i) => (
                            <li key={i} className="text-muted-foreground">{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.details.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.details.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground">{achievement}</li>
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

export default Experience;