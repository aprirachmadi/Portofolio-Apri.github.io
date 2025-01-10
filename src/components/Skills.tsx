const Skills = () => {
  const skills = [
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Jupyter Notebook", icon: "devicon-jupyter-plain" },
    { name: "Tensorflow", icon: "devicon-tensorflow-original" },
    { name: "Keras", icon: "devicon-keras-plain" },
    { name: "Pandas", icon: "devicon-pandas-plain"},
    { name: "Matplotlib", icon: "devicon-matplotlib-plain" },
    { name: "Numpy", icon: "devicon-numpy-plain" },
    { name: "Scikit-learn", icon: "devicon-scikitlearn-plain"},
    { name: "R", icon: "devicon-r-plain" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <i className={`${skill.icon} text-primary text-4xl mb-2`} />
              <span className="font-semibold text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
