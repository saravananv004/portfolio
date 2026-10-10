import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { profileData } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g., name@example.com).';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Honest handling: Since this is a static client-side portfolio without a private backend email service,
    // we construct the mailto URI to directly initiate the user's native email client with all entered details.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Saravanan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 700);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* Left Column: Direct Contact Info */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Let's Start a Conversation
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            I am currently open to entry-level opportunities in Data Engineering, Analytics, Python development, SQL, and AI workflows. Feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        {/* Contact info list */}
        <div className="space-y-4 pt-2">
          {/* Email */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm">
            <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Email
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-500 transition-colors truncate block mt-0.5"
              >
                {profileData.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Phone
              </span>
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors block mt-0.5"
              >
                {profileData.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Location
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white block mt-0.5">
                {profileData.location}
              </span>
            </div>
          </div>
        </div>

        {/* Social Badges */}
        <div className="pt-2">
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Professional Networks
          </span>
          <div className="flex items-center gap-3">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 hover:text-brand-500 shadow-sm transition-all"
            >
              <Linkedin className="w-4 h-4 text-brand-500" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 hover:text-brand-500 shadow-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-md">
          <div className="mb-6">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Send a Direct Message
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Fills and opens your local email composer with your message pre-formatted.
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="font-bold block">Email Draft Opened!</span>
                Your email client was triggered with your message. If it didn't open automatically, you can email me directly at{' '}
                <a href={`mailto:${profileData.email}`} className="underline font-semibold">
                  {profileData.email}
                </a>.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                    errors.name
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-brand-500'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Your Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                    errors.email
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-brand-500'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Subject <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job Opportunity / Project Collaboration"
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                  errors.subject
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-brand-500'
                } text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Saravanan, we'd like to discuss an opportunity..."
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                  errors.message
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-slate-200 dark:border-slate-800 focus:border-brand-500 focus:ring-brand-500'
                } text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-y`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-cyan-500 shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
