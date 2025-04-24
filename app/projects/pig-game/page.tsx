// app/projects/pig-game/page.tsx
import PigGame from '@/components/PigGame';

export default function PigGameProject() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        بازی خوک (Pig Game)
      </h1>
      <p className="text-lg mb-8 text-center">
        یک بازی ساده و سرگرم‌کننده با تاس که با React و Next.js پیاده‌سازی شده
        است.
      </p>
      <PigGame />
    </div>
  );
}
