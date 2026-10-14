import nodemailer from "nodemailer";

type EnquiryMail = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

export async function sendEnquiryMail(enquiry: EnquiryMail) {
  const host = required("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = required("SMTP_USER");
  const pass = required("SMTP_PASS");
  const to = process.env.ENQUIRY_TO ?? user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const text = [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    `Service: ${enquiry.service}`,
    "",
    enquiry.message,
  ].join("\n");

  await transporter.sendMail({
    from: `"Slanfor website" <${user}>`,
    to,
    replyTo: enquiry.email,
    subject: `New enquiry: ${enquiry.service} — ${enquiry.name}`,
    text,
  });
}
