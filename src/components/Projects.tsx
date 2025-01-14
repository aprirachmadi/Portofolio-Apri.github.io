import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import fire from "../assets/project/Train Data (6).jpg";
import hoax from "../assets/project/hoax.png";
import nids from "../assets/project/nids.png";
import sirekap from "../assets/project/sirekap.png";
import vehiclecounting from "../assets/project/vehiclecounting.png";
import carbon from "../assets/project/carbon.png";
import pilahin from "../assets/project/pilahin.jpg";
import goldensection from "../assets/project/goldensection.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  interface ProjectLink {
    type: "github" | "ppt" | "streamlit";
    url: string;
  }

  interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    category: string[];
    longDescription: string;
    challenges: string[];
    outcomes: string[];
    links?: ProjectLink[];
  }

  const projects: Project[] = [
    {
      title: "Fire Smoke Classification",
      description: "Fire Smoke Classification using Vision Transformer with White Noise Feature ",
      tech: ["Huggingface", "Python", "cv2"],
      image: fire,
      category: ["all", "computer vision"],
      longDescription: "Built an Image Classification model using Vision Transformers (ViT) to Classify Fire, Smoke, Fire-smoke, and None image",
      challenges: [
        "Bad Image Quality",
        "Imbalanced Dataset",
        "Image with white noise"
      ],
      outcomes: [
        "Acquired 90% accuracy",
      ],
      links: [
        { type: "github", url: "https://github.com/aprirachmadi"},
      ]
    },
    {
      title: "Hoax Classification",
      description: "Hoax Classification on Political News in Indonesia",
      tech: ["Huggingface", "Python"],
      image: hoax,
      category: ["all", "NLP"],
      longDescription: "Built an NLP model using PyTorch, Transformers, and a pre-trained IndoBERT language model to detect hoaxes or misinformation in political news articles with 99% accuracy. The model was trained on a dataset of legitimate and hoax political news, leveraging the state-of-the-art IndoBERT variant of BERT pre-trained on Indonesian text data. ",
      challenges: [
        "",
      ],
      outcomes: [
        "Acquired 99% accuracy",
      ],
      links: [
        { type: "github", url: "https://github.com/aprirachmadi/Indonesian-Political-News-Hoax"},
      ]
    },
    {
      title: "Network Intrusion Detection Systems (NIDS)",
      description: "Network Intrusion Detection Systems (NIDS) on CIC-IDS 2017 Dataset using Machine Learning",
      tech: ["Scikit-learn", "Python", "pandas", "LightGBM", "Matplotlib"],
      image: nids,
      category: ["all", "data science"],
      longDescription: "Built a machine learning model for Networ Intrusion Detection using the CIC-IDS 2017 dataset. The project involved data preprocessing, exploratory data analysis, and building a classifier model using the LightGBM Classifier algorithm. The resulting model achieved an impressive F1-score macro of 88.59%, demonstrating its effectiveness in detecting network intrusions and potential cybersecurity threats ",
      challenges: [
        "Imbalanced Dataset"
      ],
      outcomes: [
        "Acquired 88% accuracy",
      ],
      links: [
        { type: "ppt", url: "https://www.canva.com/design/DAFzwdGqk9I/Gm2wSNS3_8p36L63YsCU2Q/edit"},
      ]
    },
    {
      title: "Vote Detection on SIREKAP form",
      description: "Vote Detection on SIREKAP form using YOLO & TrOCR",
      tech: ["Python", "YOLO", "Pytorch", "Transformers"],
      image: sirekap,
      category: ["all", "computer vision", "featured"],
      longDescription: "Built a machine learning model for Networ Intrusion Detection using the CIC-IDS 2017 dataset. The project involved data preprocessing, exploratory data analysis, and building a classifier model using the LightGBM Classifier algorithm. The resulting model achieved an impressive F1-score macro of 88.59%, demonstrating its effectiveness in detecting network intrusions and potential cybersecurity threats ",
      challenges: [
        "Imbalanced Dataset"
      ],
      outcomes: [
        "Acquired 88% accuracy",
      ],
      links: [
        { type: "github", url: "https://github.com/aprirachmadi/sirekap-ocr"},
        { type: "streamlit", url: "https://sirekap-ocr-pemilu2024.streamlit.app/"},
      ]
    },
    {
      title: "Vehicle Detection and Counting System",
      description: "Vehicle Detection and Counting System using YOLOv8",
      tech: ["Python", "YOLO", "Pytorch", "Supervision"],
      image: vehiclecounting,
      category: ["all", "computer vision", "featured"],
      longDescription: "This project implements a multi-gate vehicle detection system using the YOLOv8 model. The system tracks and counts vehicles as they pass through predefined gates in a video. The project leverages pretrained YOLOv8 weights for object detection and tracking.",
      challenges: [
        "Inconsistent detection of vehicles in the video",
      ],
      outcomes: [
        "The model was able to track and detect every Bus and Car in the video and counts every vehicle which passed through specific gate.",
      ],
      links: [
        { type: "github", url: "https://github.com/aprirachmadi/VehicleCounting"}
      ]
    },
    {
      title: "Carbon Emission Prediction",
      description: "Carbon Emission Prediction using Machine Learning",
      tech: ["Python", "Scikit-learn", "pandas", "Matplotlib"],
      image: carbon,
      category: ["all", "data science"],
      longDescription: "This project focused on predicting fuel consumption using theCanada Fuel Consumption 2024 dataset. It involved data preprocessing, exploratory data analysis, and building aregression model. The random forest Regressor algorithmwas employed, and the resulting model achieved a remarkable R-squared value of 0.99, indicating its highaccuracy in predicting fuel consumption based on the given features.",
      challenges: [
        ""
      ],
      outcomes: [
        "Achieved a remarkable R-squared value of 0.99",
      ],
      links: [
        { type: "github", url: "https://github.com/aprirachmadi/carbon-emission"}
      ]
    },
    {
      title: "Garbage Classification Web Apps",
      description: "Garbage Classification Web Apps using Streamlit",
      tech: ["Python", "Tensorflow", "Streamlit", "cv2"],
      image: pilahin,
      category: ["all", "computer vision"],
      longDescription: "Classify garbage image into Organic or Anorganic and deploy it into web apps using Streamlit",
      challenges: [ 
        "Imbalanced Dataset"
      ],
      outcomes: [
        "Acquired 88% accuracy",
      ],
      links: [
        { type: "github", url: "https://github.com/aprirachmadi/klasifikasi-sampah-2"},
        { type: "streamlit", url: "https://klasifikasi-sampah-2.streamlit.app/"},
      ]

    },
    {
      title: "Application of Golden Section Search Methods",
      description: "Application of Golden Section Search Methods for Double Exponential Smoothing Parameters Optimization",
      tech: ["Python", "Numpy", "Pandas", "Matplotlib"],
      image: goldensection,
      category: ["all", "data science"],
      longDescription: "Utilizing Golden Section Search for Optimizing Parameters of Double Exponential Smoothing Holt Model",
      challenges: [ 
        ""
      ],
      outcomes: [
        "Succesfully built an optimization model for Double Exponential Smoothing Holt Model rivaling the performance of an existing optimization model",
      ],
      links: [
        { type: "github", url: "https://github.com/aprirachmadi/Optimization-Methods"}
      ]
    },
  ];

  const filters = [
    { label: "Featured", value: "featured" },
    { label: "All Projects", value: "all" },
    { label: "Data Science", value: "data science" },
    { label: "NLP", value: "NLP" },
    { label: "Computer Vision", value: "computer vision" },
  ];

  const filteredProjects = projects.filter(project =>
    activeFilter === "all" ? true : project.category.includes(activeFilter)
  );

  const getLinkLabel = (type: string) => {
    switch (type) {
      case "github":
        return "GitHub Repository";
      case "ppt":
        return "Presentation";
      case "streamlit":
        return "Live Demo";
      default:
        return type;
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/20 hover:bg-secondary/30"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-2xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-lg mt-2">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[calc(80vh-8rem)] pr-4">
              <div className="mt-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-muted-foreground mb-6">{selectedProject.longDescription}</p>
                
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-6">
                    {selectedProject.links.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="gap-2"
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {getLinkLabel(link.type)}
                      </Button>
                    ))}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Challenges</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="text-muted-foreground">{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Outcomes</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProject.outcomes.map((outcome, index) => (
                        <li key={index} className="text-muted-foreground">{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
