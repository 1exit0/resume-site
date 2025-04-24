'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xvgaoyad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('خطا در ارسال فرم:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">ارتباط با من</h1>

      {success && (
        <p className="bg-green-600 text-white text-center py-2 rounded-lg mb-4">
          پیام شما با موفقیت ارسال شد!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="نام"
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ایمیل"
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="پیام شما"
          rows={4}
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition"
        >
          ارسال پیام
        </button>
      </form>
    </div>
  );
}
