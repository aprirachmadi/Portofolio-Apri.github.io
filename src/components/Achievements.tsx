import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

const Achievements = () => {
  const achievements = [
    {
      title: "Best Metrics Performance",
      organization: "BPTI KemendikbudRistek",
      description: "Best Metrics Performance in Satria Data Big Data Challenge 2024",
      detailedDescription: "Built an LightGBM Classifier for topic classification on political tweet data on Preliminary round. For the finalround we are doing topic Modeling and sentiment analysis on the tweet data, more precisely on the discussion relatedto the 2024 presidential election.",
      date: new Date("2024-08-15"),
      image: "assets/achievement/bdc2024.png"
    },
    {
      title: "1st Place",
      organization: "BPTI KemendikbudRistek",
      description: "Himpunan Mahasiswa Profesi Gamma Sigma Beta IPB University",
      detailedDescription: "Built an Object detection model using YOLOV8 and number classification using EfficientNetV2B0 to count votes on SIREKAP form.",
      date: new Date("2024-05-15"),
      image: "assets/achievement/dscipb.png"
    },
    {
      title: "Semifinalist",
      organization: "Himpunan Mahasiswa Departemen Matematika Universitas Indonesia",
      description: "Semifinalist of Logika UI Statistics Team Competition",
      detailedDescription: "Perform data analysis including data preprocessing, joining few tables, doing feature engineering to generate more feature, exploratory data analysis, and building machine learning model to classify credit scoring using machine learning algorithm.",
      date: new Date("2024-01-15"),
      image: "assets/achievement/logikaui.png"
    },
    {
      title: "Top 15 or Semifinalist",
      organization: "Himpunan Mahasiswa Statistika ITS",
      description: "Top 15 or Semifinalist of Pekan Raya Statistika (PRS) ASEAN Data Analysis Competition",
      detailedDescription: "Perform data analysis including data preprocessing, visualization, and building machinelearning model using LightGBM Classifier for predicting network attack type with result of 99.58% f-1 score.",
      date: new Date("2023-10-15"),
      image: "assets/achievement/dac.jpeg"
    },
    {
      title: "Finalist",
      organization: "BPTI KemendikbudRistek",
      description: "Finalist in Satria Data Big Data Challenge 2023",
      detailedDescription: "Built an OCR model using TrOCR for licence’s plate recognition on Preliminary round. For the final round we a deep learning model using a Siamese BERT to assist in the detection of disharmony in capital and taxation laws in Indonesia.",
      date: new Date("2023-08-15"),
      image: "assets/achievement/bdc2023.png"
    },
    {
      title: "Finalist",
      organization: "HIMAKOM UGM",
      description: "Finalist in Joints Data Mining Competition",
      detailedDescription: "Perform data classification of Damage Grade Caused by Earthquakes and Image Classification for Early Fire Detection using Deep Learning.",
      date: new Date("2023-05-15"),
      image: "assets/achievement/joints.jpeg"
    },
    {
      title: "Finalist",
      organization: "BPTI KemendikbudRistek",
      description: "Finalist in Satria Data Big Data Challenge 2022",
      detailedDescription: "Perform data analysis of Patient Return Status in BPJS Health Participants and Analysis of Public Opinion on BPJS HealthServices through Twitter social media Using the IndoBERT and BERTopic Algorithms.",
      date: new Date("2022-12-15"),
      image: "assets/achievement/bdc2022.png"
    },

  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background" id="achievements">
      <div className="container px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-sm text-muted-foreground mb-2">
                    {format(achievement.date, 'MMMM yyyy')}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{achievement.organization}</p>
                  <p className="mt-4">{achievement.description}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px] max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">{achievement.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[calc(80vh-8rem)] pr-4">
                  <div className="mt-4">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="text-sm text-muted-foreground mb-2">
                      {format(achievement.date, 'MMMM yyyy')}
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                    <p className="mt-4">{achievement.detailedDescription}</p>
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

export default Achievements;