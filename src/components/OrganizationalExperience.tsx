const OrganizationalExperience = () => {
  const experiences = [
    {
      organization: "IMAKA UNDIP",
      role: "Staff of Public Relations",
      period: "Jan 2022 - Dec 2022",
      description: "Assisted in coordinating visits by regional organizations with Ikatan Mahasiswa Diponegoro Magelang"
    },
    {
      organization: "IMAKA UNDIP",
      role: "Head of Public Relations",
      period: "Jan 2023 - Dec 2023",
      description: "Assisted in coordinating the Campus Expo Procurement, collaborating with Forum Mahasiswa Karanganyar and Forum Mahasiswa Islam Karanganyar"
    },
    {
      organization: "Statistics Center UNDIP",
      role: "Staff of Study Club",
      period: "March 2023 - Dec 2023",
      description: "Became the coordinator for the Training Software Statistics for SC-SCSI members."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background" id="organizational-experience">
      <div className="container px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Organizational Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-primary">{experience.organization}</h3>
              <p className="text-sm text-accent mt-1">{experience.role}</p>
              <p className="text-sm text-muted-foreground mt-1">{experience.period}</p>
              <p className="mt-4">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationalExperience;