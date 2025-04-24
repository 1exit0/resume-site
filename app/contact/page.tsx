'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

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
      const response = await axios.post('https://formspree.io/f/xvgaoyad', form, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('خطا در ارسال فرم:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        ارتباط با من
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-gray-300 mb-4"
      >
        همچنین می‌توانید با شماره زیر تماس بگیرید:{' '}
        <a
          href="tel:+989982204403"
          className="text-purple-400 hover:text-purple-300 transition"
        >
          📞 09982204403
        </a>
      </motion.p>

      {success && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-green-600 text-white text-center py-2 rounded-lg mb-4"
        >
          پیام شما با موفقیت ارسال شد!
        </motion.p>
      )}

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-4"
      >
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
      </motion.form>
    </div>
  );
}
