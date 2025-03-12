import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose dark:prose-invert lg:prose-lg mx-auto"
          >
            <p className="mb-6">
              I am a self-motivated professional with a proven ability to quickly master new technologies and drive process improvements. 
              Strong team player with excellent communication, collaboration, and problem-solving skills, dedicated to creating responsive 
              and user-friendly websites.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Strengths</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Perfectionist and Technophile in nature</li>
              <li>Curious learner</li>
              <li>Capable of problem solving</li>
              <li>Strong leadership skills</li>
            </ul>
            
            <p>
              I am eager to apply my knowledge to real-world challenges and contribute to innovative projects that make a difference.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}