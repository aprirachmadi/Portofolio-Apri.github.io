const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
            A Final-year Statistics student at Universitas Diponegoro and also a Bangkit Cohort at Machine Learning - Learning path. 
            Motivated to continuously learn and grow as a professional. Interested in fields such as data analysis, data science, and machine learning
            </p>
            <p className="text-lg text-muted-foreground">
            Also has some experience in various data challenge competitions. 
            Demonstrates a strong commitment to learning, adapting to various situations, and strong analytical skills.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Based in Semarang</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>AI Engineer intern at PT SPIL</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Statistics Student</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;