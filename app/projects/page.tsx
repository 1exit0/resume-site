'use client';
import Link from 'next/link';
import ProjectCard from '../../components/ProjectCard'; // فرض می‌کنیم که کامپوننت ProjectCard رو قبلاً ساختیم

const projects = [
  {
    id: 'pig-game',
    title: 'بازی خوک (Pig Game)',
    slug: 'pig-game',
    description:
      'یک بازی ساده و سرگرم‌کننده با تاس که با React و Next.js پیاده‌سازی شده است.',
    image: '/images/projects/pig-game-thumbnail.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    // demoUrl: '',
    sourceUrl: 'https://github.com/1exit0/pig-game',
  },
  {
    slug: 'project2',
    title: 'به زودی اضافه میشود',
    description: 'به زودی',
    link: 'https://github.com/username/project2',
  },
  {
    slug: 'guess-my-number',
    title: 'بازی حدس عدد',
    description:
      'بازی ساده‌ای که با JavaScript نوشته شده و کاربر باید عدد تصادفی را حدس بزند.',
    link: 'https://guess-my-number.vercel.app',
    embed: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-6">پروژه‌ها</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={`/projects/${project.slug}`}
            embed={false}
          />
        ))}
      </div>
    </div>
  );
}
