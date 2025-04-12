import { PROJECTS } from "../../data/projects";

const Projects = () => {
  return (
    <div className="w-full bg-[#012301] text-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h1 className="text-4xl font-bold text-center text-[#00df9a]">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="p-4 bg-black rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold text-[#00df9a]">
                  {project.title}
                </h2>
                <p className="mt-2 font-thin">{project.description}</p>
                <div>
                  <h3 className="mt-4 font-semibold">Technologies:</h3>
                  <ul className="inline-flex gap-3 list-inside">
                    {project.technologies.map((tech, index) => (
                      <li key={index} className="text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00df9a] hover:underline mt-4 block"
                  >
                    View Project
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00df9a] hover:underline mt-4 block"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
