'use client';

import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-900 text-white font-sans">
        <header className="border-b border-gray-700 py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="text-xl font-bold text-white">رزومه من</div>
            <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-300">
              <Link href="/" className="hover:text-white transition">
                خانه
              </Link>
              <Link href="/about" className="hover:text-white transition">
                درباره من
              </Link>
              <Link href="/projects" className="hover:text-white transition">
                پروژه‌ها
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                تماس با من
              </Link>
            </nav>
            <div className="sm:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.toggle('hidden');
                }}
              >
                ☰
              </button>
            </div>
          </div>
          <div
            id="mobile-menu"
            className="sm:hidden hidden px-4 pt-4 space-y-2 text-sm font-medium text-gray-300"
          >
            <Link href="/" className="block hover:text-white transition">
              خانه
            </Link>
            <Link href="/about" className="block hover:text-white transition">
              درباره من
            </Link>
            <Link
              href="/projects"
              className="block hover:text-white transition"
            >
              پروژه‌ها
            </Link>
            <Link href="/contact" className="block hover:text-white transition">
              تماس با من
            </Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
