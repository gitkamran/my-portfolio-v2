import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "لطفا نام خود را وارد کنید."],
        trim: true,
        minLength: [2, "نام شما باید بیشتر از 2 حرف باشد."],
        maxLength: [50, "نام شما نباید بیشتر از 50 حرف باشد."],
    },

    email: {
        type: String,
        required: [true, "لطفا ایمیل را وارد کنید."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "آدرس ایمیل صحیح نمی باشد."],
    },

    message: {
        type: String,
        required: [true, "لطفا پیام خود را وارد کنید."],
    },

    date: {
        type: String,
        default: new Date().toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
    },
});

const Contact =
    mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;