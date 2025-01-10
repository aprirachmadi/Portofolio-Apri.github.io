import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container px-24 animate-fade-up">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-8 mb-6">
              <img
                src="src/assets/hero/saya.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-primary"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Hi, I'm <span className="text-primary">Apri</span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Data Scientist & AI Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              I'm passionate about using data and AI to innovate and solve complex challenges
            </p>
            <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button 
                size="lg"
                variant="outline"
                 className="w-full sm:w-auto "
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/3 pl-8">
            <img
              src="../assets/hero/space.jpg"
              alt="Profile Showcase"
              className="w-full max-w-md rounded-lg object-cover border-2 border-primary shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;