"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  suburb: string;
  workType: string;
  budget: string;
  timeframe: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  suburb: "",
  workType: "",
  budget: "",
  timeframe: "",
  message: "",
  consent: false,
};

export default function Contact() {
  const headingRef = useSplitTextReveal({ type: "words", stagger: 0.05 });
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }
    if (!formData.suburb.trim()) {
      newErrors.suburb = "Suburb / location is required.";
    }
    if (!formData.workType) {
      newErrors.workType = "Please select a type of work.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success
    setStatus("success");
    setFormData(initialFormData);
  };

  const inputClasses = (field: string) =>
    `w-full rounded-lg border ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
        : "border-cream-dark focus:border-accent focus:ring-accent/20"
    } bg-white px-4 py-3 text-sm text-charcoal placeholder-warm-gray-light transition-all focus:outline-none focus:ring-2`;

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Get in Touch
            </p>
            <h2
              ref={headingRef as React.RefObject<HTMLHeadingElement>}
              className="font-heading text-3xl tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Discuss Your Project
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-warm-gray">
              Ready to start? Fill in the form with your project details and
              Seb will get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-charcoal">Email</p>
                  <p className="text-sm text-warm-gray">{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-charcoal">Phone</p>
                  <p className="text-sm text-warm-gray">{siteConfig.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-charcoal">Address</p>
                  <p className="text-sm text-warm-gray">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-charcoal">Service Area</p>
                  <p className="text-sm text-warm-gray">{siteConfig.serviceArea}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-[400px] flex-col items-center justify-center rounded-xl bg-cream p-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mt-4 font-heading text-2xl text-charcoal">
                  Thank You
                </h3>
                <p className="mt-2 text-warm-gray">
                  Your message has been sent. Seb will be in touch within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-dark"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl bg-cream p-6 lg:p-8"
                noValidate
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  {/* Full Name */}
                  <motion.div variants={fadeUp}>
                    <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClasses("fullName")}
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fadeUp}>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses("email")}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={fadeUp}>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses("phone")}
                      placeholder="04XX XXX XXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </motion.div>

                  {/* Suburb */}
                  <motion.div variants={fadeUp}>
                    <label htmlFor="suburb" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Suburb / Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      className={inputClasses("suburb")}
                      placeholder="e.g. Balgowlah"
                    />
                    {errors.suburb && (
                      <p className="mt-1 text-xs text-red-500">{errors.suburb}</p>
                    )}
                  </motion.div>

                  {/* Type of Work */}
                  <motion.div variants={fadeUp}>
                    <label htmlFor="workType" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Type of Work <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="workType"
                      name="workType"
                      value={formData.workType}
                      onChange={handleChange}
                      className={inputClasses("workType")}
                    >
                      <option value="">Select type of work</option>
                      <option value="cabinetry">Custom Cabinetry & Joinery</option>
                      <option value="renovation">Renovation & Structural Carpentry</option>
                      <option value="repairs">Repairs & Handyman Works</option>
                      <option value="outdoor">Outdoor & Decking</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.workType && (
                      <p className="mt-1 text-xs text-red-500">{errors.workType}</p>
                    )}
                  </motion.div>

                  {/* Budget Range */}
                  <motion.div variants={fadeUp}>
                    <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Budget Range <span className="text-warm-gray-light text-xs">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClasses("budget")}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 – $5,000</option>
                      <option value="5k-15k">$5,000 – $15,000</option>
                      <option value="15k-30k">$15,000 – $30,000</option>
                      <option value="30k-plus">$30,000+</option>
                    </select>
                  </motion.div>

                  {/* Preferred Timeframe */}
                  <motion.div variants={fadeUp} className="sm:col-span-2">
                    <label htmlFor="timeframe" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Preferred Timeframe <span className="text-warm-gray-light text-xs">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className={inputClasses("timeframe")}
                      placeholder="e.g. Within the next month, ASAP, Flexible"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={fadeUp} className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Project Details <span className="text-warm-gray-light text-xs">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClasses("message")}
                      placeholder="Tell us about your project — what needs doing, any specific requirements, etc."
                    />
                  </motion.div>

                  {/* Consent */}
                  <motion.div variants={fadeUp} className="sm:col-span-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-cream-dark text-accent focus:ring-accent"
                      />
                      <span className="text-xs leading-relaxed text-warm-gray">
                        I consent to Matiere storing my details and contacting me
                        regarding this enquiry. We will never share your
                        information with third parties.
                      </span>
                    </label>
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fadeUp} className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-lg bg-charcoal px-8 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Enquiry"
                      )}
                    </button>
                  </motion.div>

                  {/* Error state */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="sm:col-span-2 rounded-lg bg-red-50 p-4 text-sm text-red-600"
                    >
                      Something went wrong. Please try again or contact us directly.
                    </motion.div>
                  )}
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
