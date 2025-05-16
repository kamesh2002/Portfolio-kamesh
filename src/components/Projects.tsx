import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'X-Clone',
    description: 'A social media platform like X with authentication, posting, interactions, and real-time updates.',
    tech: ['React', 'Express.js', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/kamesh2002/T-FSD-X',
    image: 'https://images.unsplash.com/photo-1690233653077-8345102ec630?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFglMjBjbG9uZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Spotify Clone',
    description: 'A Spotify clone with a React frontend featuring a playlist of songs.',
    tech: ['HTML', 'React', 'Tailwind CSS'],
    github: 'https://github.com/kamesh2002/FEND-45-Clone',
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Smart To-Do Website',
    description: 'A Smart To-Do Website for Efficient Task Scheduling.',
    tech: ['React', 'HTML', 'CSS'],
    github: 'https://github.com/kamesh2002/FSD-Guvi/tree/master/Day-23/Todo',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
