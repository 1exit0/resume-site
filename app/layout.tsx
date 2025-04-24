'use client';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '../styles/globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-900 text-white font-sans">
        <Head>
          <title>رزومه من</title>
          <meta name="description" content="رزومه آنلاین من که شامل مهارت‌ها، پروژه‌ها و تجربه‌های من است." />
          <meta name="keywords" content="رزومه, توسعه‌دهنده, React, Next.js, JavaScript, پروژه‌ها" />
        </Head>
        <Header />
        <main className="container mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
