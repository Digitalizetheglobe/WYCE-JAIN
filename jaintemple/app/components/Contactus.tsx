"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  consent?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms.";
    }

    return newErrors;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "", consent: false });
    setErrors({});
  };

  return (
    <section className="min-h-screen bg-[#f9f5f0] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="bg-white md:w-2/5 p-8 md:p-12 flex flex-col justify-center gap-8 border-b md:border-b-0 md:border-r border-gray-100">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Get in Touch
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                We'd love to hear from you. Drop us a message!
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>
              <div>
                <p className="text-red-500 font-semibold text-sm">
                  Wyce Exclucity,
                </p>
                <p className="text-red-500 font-semibold text-sm">
                  Bavdhan, 411021
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
              </span>
              <p className="text-red-500 font-semibold text-sm">
                +91 776 999 6799
              </p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="md:w-3/5 p-8 md:p-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Contact Form
            </h3>

            {submitted && (
              <div className="mb-5 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Row 1: Name, Phone, Email */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-full border text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-red-400 ${
                      errors.name
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 pl-3">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Your Phone"
                    inputMode="numeric"
                    maxLength={10}
                    className={`w-full px-4 py-3 rounded-full border text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-red-400 ${
                      errors.phone
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 pl-3">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-full border text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-red-400 ${
                      errors.email
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 pl-3">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-2xl border text-sm text-gray-700 placeholder-gray-400 outline-none resize-none transition focus:ring-2 focus:ring-red-400 ${
                    errors.message
                      ? "border-red-400 bg-red-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 pl-3">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all
                        peer-checked:bg-red-500 peer-checked:border-red-500
                        ${errors.consent ? "border-red-400" : "border-gray-300"}
                        group-hover:border-red-400`}
                    >
                      {formData.consent && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    I agree to the{" "}
                    <span className="text-red-500 font-semibold underline cursor-pointer">
                      Terms & Conditions
                    </span>{" "}
                    and consent to being contacted by Wyce Exclucity regarding my
                    inquiry. My information will not be shared with third parties.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-red-500 text-xs mt-1 pl-8">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Send Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#FF0000] cursor-pointer hover:bg-red-600 active:scale-95 text-white font-semibold text-sm px-10 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-red-200"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}