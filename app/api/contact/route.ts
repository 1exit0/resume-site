// app/api/contact/route.ts
import { NextResponse } from 'next/server';

type ContactData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const { name, email, message }: ContactData = await request.json();

    // اعتبارسنجی ورودی‌ها
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'همه فیلدها الزامی هستند.' },
        { status: 400 }
      );
    }

    // اعتبارسنجی فرمت ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'ایمیل نامعتبر است.' },
        { status: 400 }
      );
    }

    // ارسال داده‌ها به Formspree
    const response = await fetch('https://formspree.io/f/xvgaoyad', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.error || 'خطا در ارسال به Formspree.' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'پیام شما با موفقیت ارسال شد.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('خطا در پردازش درخواست:', error);
    return NextResponse.json(
      { message: 'خطایی در سرور رخ داد.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'فقط متد POST مجاز است.' },
    { status: 405 }
  );
}
