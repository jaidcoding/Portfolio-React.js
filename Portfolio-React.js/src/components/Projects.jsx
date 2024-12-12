import { useEffect, useRef } from "react";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const projectsData = [
  {
    image: image1,
    title: 'Project 1',
    description: 'This is a description of project 1',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node', 'Express', 'PostgresSQL'],
  },
  {
    image: image2,
    title: 'Project 2',
    description: 'This is a description of project 2',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node', 'Express', 'PostgresSQL'],
  },
  {
    image: image3,
    title: 'Project 3',
    description: 'This is a description of project 3',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node', 'Express', 'PostgresSQL'],
  },
  {
    image: image4,
    title: 'Project 4',
    description: 'This is a description of project 4',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node', 'Express', 'PostgresSQL'],
  },
  {
    image: image5,
    title: 'Project 5',
    description: 'This is a description of project 5',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node', 'Express', 'PostgresSQL'],
  },
]

const ScrollReveal = ({children}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      console.log("ScrollReveal component is in view");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
};

const ProjectCard = ({project}) => {
  console.log("ProjectCard rendered for:", project.title);
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
          <img src={project.image} alt={project.title} className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>

          <div className="flex flex-col gap-5 ">

            <div className="flex flex-col gap-3">          
              <div className="text-xl font-semibold">{project.title}</div>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-5">
              {
                project.technologies.map((tech, index) => (
                  <span key={index} className="rounded-lg bg-black p-3">
                    {tech}
                  </span>
                ))
              }
            </div>
          </div>
      </div>
    </ScrollReveal>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Projects = () => {
  console.log("Projects component rendered");
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
};

export default Projects;