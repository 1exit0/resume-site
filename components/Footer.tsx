function Footer() {
  return (
    <footer className="border-t border-gray-700 py-6 mt-10 text-center text-sm text-gray-400 space-y-2">
      <div>
        © {new Date().getFullYear()} ساخته‌شده توسط من | تمام حقوق محفوظ است.
      </div>
      <div>
        <a
          href="https://github.com/1exit0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          💻 مشاهده گیت‌هاب من
        </a>
      </div>
    </footer>
  );
}
export default Footer;