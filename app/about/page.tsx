'use client';



import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">درباره من</h1>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <motion.img
          src="/images/avatar.jpg"
          alt="عکس من"
          width={120}
          height={120}
          className="rounded-full border-4 border-purple-500 object-cover shadow-xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
        <p className="text-gray-300 leading-7 text-justify">
          سلام! من محمدحسین نمکی، دانشجوی کارشناسی رشته کامپیوتر در دانشگاه آزاد
          یادگار امام هستم. مسیر برنامه‌نویسی‌ام را با زبان پایتون آغاز کردم و
          به مرور زمان به توسعه فرانت‌اند علاقه‌مند شدم. اکنون با تکنولوژی‌هایی
          مانند React، Next.js، TypeScript، TailwindCSS، Node.js، Prisma، Zod،
          Redux Toolkit، Shadcn UI، Axios، Git و Express کار می‌کنم. همچنین به
          مفاهیم پیشرفته‌ای مانند Domain-Driven Design، Event Storming و Clean
          Architecture علاقه دارم و در پروژه‌هایم به آن‌ها توجه ویژه‌ای دارم.
          هدف من رشد مداوم، یادگیری تکنولوژی‌های روز و ساخت اپلیکیشن‌هایی
          خلاقانه و مفید برای کاربران است.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">علاقه‌مندی‌ها و هدف‌ها</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>یادگیری پیشرفته React و فریم‌ورک‌های جدید فرانت‌اند</li>
          <li>توسعه پروژه‌های واقعی و مشارکت در تیم‌های حرفه‌ای</li>
          <li>کاوش در زمینه‌هایی مثل هوش مصنوعی و امنیت اطلاعات</li>
        </ul>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">گواهی‌نامه‌ها</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/images/SKMBT_C65224022104530.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/SKMBT_C65224022104530.jpg"
              alt="گواهینامه اول"
              width={500}
              height={350}
              className="rounded-lg border border-gray-700 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>
          <a
            href="/images/IMG_20250424_172158_004.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/IMG_20250424_172158_004.jpg"
              alt="گواهینامه دوم"
              width={500}
              height={350}
              className="rounded-lg border border-gray-700 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
