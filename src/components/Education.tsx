import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Education & Certifications
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
          >
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Sri Krishna College Of Engineering and Technology</h3>
                <p className="text-gray-600 dark:text-gray-300">Bachelor Of Engineering - CSBS (2021-2025)</p>
                <p className="text-gray-600 dark:text-gray-300">CGPA: 7.5/10</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
          >
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Government Higher Secondary School, Melarani</h3>
                <p className="text-gray-600 dark:text-gray-300">Higher Secondary Certificate (2020-2021)</p>
                <p className="text-gray-600 dark:text-gray-300">Percentage: 80%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
          >
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• GUVI Zen Class Full-Stack Developer Program</li>
                  <li>• GUVI Zen Class HTML, CSS, JavaScript, and React Program</li>
                  <li>• MongoDB course at GUVI</li>
                  <li>• Ethics in Engineering NPTEL</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}