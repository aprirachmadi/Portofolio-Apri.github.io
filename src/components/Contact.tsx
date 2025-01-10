import { Linkedin, Github, Twitter } from "lucide-react";
import { Mail } from "lucide-react"; // Import the mail icon

const Contact = () => {
  const recipientEmail = "your_email@example.com"; // <- Your email address here

    const handleGmailClick = () => {
      window.location.href = `mailto:${recipientEmail}`;
    }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto flex flex-col items-center">
            <button onClick={handleGmailClick} className="focus:outline-none transition-transform transform hover:scale-110">
                 <Mail className="w-16 h-16 text-primary hover:text-primary/90" />
            </button>
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/apri-dwi-rachmadi-3b1a141ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/aprirachmadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;