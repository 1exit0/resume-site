'use client';

import { motion } from 'framer-motion';

export default function ProjectContent({ project }: { project: any }) {
  return (
    <div className="min-h-screen py-8 px-4 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white text-center"
      >
        پروژه: {project.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 text-center"
      >
        {project.description}
      </motion.p>

      {project.embed ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full h-[85vh] rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src={project.link}
            title={project.title}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </motion.div>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline text-center block"
        >
          مشاهده پروژه
        </a>
      )}
    </div>
  );
}
