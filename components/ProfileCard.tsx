import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg text-center space-y-3">
      <Image
        src="/images/avatar.jpeg" // مسیر صحیح به تصویر
        alt="avatar"
        width={226} // عرض تصویر
        height={226} // ارتفاع تصویر
        className="rounded-full mx-auto border-4 border-gray-700 object-cover"
        priority // اضافه کردن priority برای لود سریع‌تر
      />
      <h2 className="text-2xl font-bold">محمد حسین نمکی</h2>
      <p className="text-gray-400">توسعه‌دهنده فرانت‌اند</p>
    </div>
  );
}
