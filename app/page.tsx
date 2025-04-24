'use client';

import SkillList from '../components/SkillList';
import ProfileCard from '../components/ProfileCard';

import '../styles/globals.css';

export default function HomePage() {
  return (
    <>
      <div className="space-y-10">
        <ProfileCard />
        <div>
          <h2 className="text-xl font-bold mb-4">مهارت‌ها</h2>
          <SkillList
            skills={{
              Frontend: [
                'React',
                'Next.js',
                'TailwindCSS',
                'Shadcn',
                'TypeScript',
                'Router 6',
                'Query 5',
                'Redux Toolkit',
              ],
              'Validation / Tools': ['Zod', 'Axios', 'Git'],
              Backend: ['Node.js', 'Express', 'Prisma', 'Django'],
              Database: ['PostgreSQL', 'MongoDB'],
            }}
          />
        </div>
      </div>
    </>
  );
}
