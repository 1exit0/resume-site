import { notFound } from 'next/navigation';

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
      <h1 className="text-3xl font-bold text-white text-center">
        پروژه: {project.title}
      </h1>
      <p className="text-gray-400 text-center">{project.description}</p>

      {project.embed ? (
        <div className="w-full h-[85vh] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={project.link}
            title={project.title}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
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
