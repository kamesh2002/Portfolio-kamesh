import { motion } from 'framer-motion';

const skills = {
  programming: ['Java', 'HTML', 'CSS', 'JavaScript'],
  databases: ['MongoDB', 'ReactJS', 'DBMS'],
  other: ['Project Management', 'Problem-Solving', 'Teamwork', 'Multitasking', 'Leadership']
};

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Databases & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.other.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}