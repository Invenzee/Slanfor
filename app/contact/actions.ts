"use server";

import { sendEnquiryMail } from "@/lib/mail";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<
    Record<"name" | "email" | "phone" | "service" | "message", string>
  >;
};

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: EnquiryState["fieldErrors"] = {};

  if (name.length < 2) fieldErrors.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (!phone) {
    fieldErrors.phone = "Please add your phone number.";
  } else if (!/^[0-9+().\-\s]{7,20}$/.test(phone)) {
    fieldErrors.phone = "That phone number does not look right.";
  }
  if (!service) fieldErrors.service = "Choose what you need help with.";
  if (message.length < 4) {
    fieldErrors.message = "Tell us a little more about the work.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the fields below and try again.",
      fieldErrors,
    };
  }

  try {
    await sendEnquiryMail({ name, email, phone, service, message });
  } catch {
    return {
      status: "error",
      message: "The form is fine, but the message did not reach the inbox. Try again in a moment, or write to info@slanfor.com.",
    };
  }

  return {
    status: "success",
    message: "Thanks. We have the brief and will come back to you at the email you gave.",
  };
}
