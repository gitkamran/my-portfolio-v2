import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["پیام شما با موفقیت ارسال شد."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json({ msg: error.errors });
    } else {
      return NextResponse.json({
        msg: ["امکان ارسال پیام وجود ندارد."],
        faild: true
      });
    }
  }
}