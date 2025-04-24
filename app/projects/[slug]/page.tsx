import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

const projectData = [
  {
    slug: 'guess-my-number',
    title: 'بازی حدس عدد',
    description:
      'بازی ساده‌ای که با JavaScript نوشته شده و کاربر باید عدد تصادفی را حدس بزند.',
    link: 'https://guess-my-number.vercel.app',
    embed: true,
  },
  {
    slug: 'pig-game',
    title: 'بازی خوک',
    description:
      'یک بازی ساده و سرگرم‌کننده با تاس که با React و Next.js پیاده‌سازی شده است.',
    link: 'https://github.com/1exit0/pig-game',
    embed: true,
    component: 'PigGame',
  },
];

export async function generateStaticParams() {
  return projectData.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectData.find((p) => p.slug === params.slug);

  if (!project) return notFound();

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
