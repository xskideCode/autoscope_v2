import EmailTemplate from "@/components/EmailTemplateProps";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["xskide.code@gmail.com"],
      subject: "New Contact Form Submission",
      react: EmailTemplate({ firstName, lastName, email, phone, message }),
    });
    console.log(firstName);

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
