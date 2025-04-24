import { JSX } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiGit,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiMongodb
} from 'react-icons/si';

const icons: Record<string, JSX.Element> = {
  React: <SiReact className="text-cyan-400" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  'Node.js': <SiNodedotjs className="text-green-500" />,
  Django: <SiDjango className="text-green-400" />,
  Git: <SiGit className="text-orange-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  Prisma: <SiPrisma className="text-indigo-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Zod: <span className="text-purple-400 text-xl font-bold">Z</span>,
  Shadcn: <span className="text-white text-lg font-semibold">Sh</span>,
  Axios: <span className="text-sky-400 text-xl font-bold">A</span>,
  'Router 6': <span className="text-green-400 text-xl font-bold">R6</span>,
  'Query 5': <span className="text-pink-400 text-xl font-bold">RQ5</span>,
  'Redux Toolkit': <span className="text-red-400 text-xl font-bold">RTK</span>,
  Express: <span className="text-yellow-400 text-xl font-bold">Ex</span>,
};

type SkillListProps = {
  skills: Record<string, string[]>; 
};

const categorizedSkills = {
  Frontend: ['React', 'Next.js', 'TailwindCSS', 'Shadcn', 'TypeScript', 'Router 6', 'Query 5', 'Redux Toolkit'],
  'Validation / Tools': ['Zod', 'Axios', 'Git'],
  Backend: ['Node.js', 'Express', 'Prisma', 'Django'],
  Database: ['PostgreSQL', 'MongoDB'],
};

export default function SkillList({ skills }: SkillListProps) {
  return (
    <>
      {Object.entries(categorizedSkills).map(([category, skills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-bold text-gray-300 mb-4">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center bg-gray-800 hover:bg-gray-700 text-white py-4 px-4 rounded-xl shadow-md transition"
              >
                <div className="text-3xl mb-2">{icons[skill] || '🔥'}</div>
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
