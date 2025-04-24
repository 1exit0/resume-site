import type { NextApiRequest, NextApiResponse } from 'next';

type ContactData = {
  name: string;
  email: string;
  message: string;
};

type ApiResponse = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === 'POST') {
    const { name, email, message }: ContactData = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'همه فیلدها الزامی هستند.' });
    }

    // عملیات ارسال ایمیل یا ذخیره‌سازی اینجا قرار می‌گیره

    return res.status(200).json({ message: 'پیام شما با موفقیت ارسال شد.' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'متد مجاز نیست.' });
  }
}
