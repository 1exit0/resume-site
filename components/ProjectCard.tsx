'use client';

import { motion } from 'framer-motion';

const MotionAnchor = motion<'a'>('a');

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  embed?: boolean;
};

export default function ProjectCard({
  title,
  description,
  link,
  embed,
}: ProjectCardProps) {
  return embed ? (
    <motion.div
      whileHover={{ scale: 1.03, rotate: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-gray-800 rounded-xl shadow p-4 space-y-2"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="aspect-video w-full rounded-xl overflow-hidden">
        <iframe
          src={link}
          title={title}
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </motion.div>
  ) : (
    <MotionAnchor
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, rotate: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="block bg-gray-800 hover:bg-gray-700 transition p-4 rounded-xl text-white shadow space-y-2"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </MotionAnchor>
  );
}
