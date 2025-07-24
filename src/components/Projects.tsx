import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Epic Cinema Platform",
    description:
      "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React.js", "MUI", "TMDB API", "React Router"],
    github: "https://github.com/mnkkhan77/epic-cinema",
    demo: "https://epic-cinema.vercel.app/",
    image:
      "https://private-user-images.githubusercontent.com/37503821/319451587-252155b0-41ca-4ee1-933b-35f5818ef003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMzNzE2NTcsIm5iZiI6MTc1MzM3MTM1NywicGF0aCI6Ii8zNzUwMzgyMS8zMTk0NTE1ODctMjUyMTU1YjAtNDFjYS00ZWUxLTkzM2ItMzVmNTgxOGVmMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI0VDE1MzU1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg2YzBlMWI1NGNlOTMzZDJiMmZjNjkyNzg3ZjZkOGJjYWI0MGI4MDExMTczMjFiZWQ1NzVlN2ZkMGEwN2YzMzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.POZWoFTwnuyw3GdsQLd0fdrPOv0ykTq17h1W6_TrfJc",
  },
  {
    title: "Job Portal Platform",
    description:
      "A modern and role-based job portal built with React.js, Spring Boot, and Postgres. This project enables job seekers, recruiters, and admins to interact with job listings, applications, and user management in a clean and efficient UI.",
    technologies: [
      "React.js",
      "Spring Boot",
      "WebSocket",
      "Postgres",
      "Axios",
      "Vite",
    ],
    github: "https://github.com/mnkkhan77/job-portal",
    demo: "https://taskmanager-demo.vercel.app",
    image:
      "https://private-user-images.githubusercontent.com/37503821/464532015-1402cb2d-586d-49ec-988e-b357e351d963.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMzNzE5NTksIm5iZiI6MTc1MzM3MTY1OSwicGF0aCI6Ii8zNzUwMzgyMS80NjQ1MzIwMTUtMTQwMmNiMmQtNTg2ZC00OWVjLTk4OGUtYjM1N2UzNTFkOTYzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI0VDE1NDA1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIwMWVhODRkZjdkNTJkOTkwMzFhMmRmZWJhZWM0NzRmY2JmY2MwZjM1N2Y5M2Y0N2UzNjZmMDQ4ZTg4ZDU3MGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.QVmJoL4Zq27FVZ4UZ0MPz8EVTgCjnTxNxkNmNnX80gM",
  },
  // {
  //   title: "Weather Dashboard",
  //   description:
  //     "Interactive weather dashboard with location-based forecasts, historical data, and responsive design.",
  //   technologies: ["React.js", "JavaScript", "REST API", "CSS3"],
  //   github: "https://github.com/mnkkhan77/weather-dashboard",
  //   demo: "https://weather-dashboard-demo.vercel.app",
  //   image:
  //     "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
  // },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
