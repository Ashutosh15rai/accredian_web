"use client";

import { useState } from "react";

interface LeadCaptureProps {
  title?: string;
  subtitle?: string;
  programName?: string;
}

export const LeadCapture: React.FC<LeadCaptureProps> = ({
  title = "Get In Touch",
  subtitle = "Fill out the form below and our team will get back to you within 24 hours",
  programName,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: programName || "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setFormData({ name: "", email: "", phone: "", program: "" });
        setErrors({});
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="glass-card p-8 md:p-10 border border-white/10">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400">{subtitle}</p>
      </div>

      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-green-400 font-medium text-lg mb-4">{message}</p>
          <button
            onClick={() => setStatus("idle")}
            className="btn-outline-glass text-sm"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Full Name <span className="text-pink-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 glass border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.name ? "border-red-500/50" : "border-white/10 focus:border-indigo-500/50"
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address <span className="text-pink-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`w-full px-4 py-3 glass border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.email ? "border-red-500/50" : "border-white/10 focus:border-indigo-500/50"
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
              Phone Number <span className="text-pink-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              maxLength={10}
              className={`w-full px-4 py-3 glass border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.phone ? "border-red-500/50" : "border-white/10 focus:border-indigo-500/50"
              }`}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-medium text-slate-300 mb-2">
              Interested Program
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500/50 transition-colors bg-slate-900/50"
            >
              <option value="" className="bg-slate-900">Select a program</option>
              <option value="Data Science" className="bg-slate-900">PG Program in Data Science</option>
              <option value="AI & ML" className="bg-slate-900">PG Program in AI & Machine Learning</option>
              <option value="Cloud Computing" className="bg-slate-900">PG Program in Cloud Computing</option>
              <option value="Cyber Security" className="bg-slate-900">PG Program in Cyber Security</option>
              <option value="Full Stack" className="bg-slate-900">PG Program in Full Stack Development</option>
              <option value="Executive" className="bg-slate-900">Executive Programs</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full btn-gradient py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </span>
            ) : (
              "Get Free Counselling"
            )}
          </button>

          {status === "error" && message && (
            <p className="text-center text-sm text-red-400">{message}</p>
          )}

          <p className="text-xs text-center text-slate-500">
            By submitting, you agree to our{" "}
            <a href="#terms" className="text-indigo-400 hover:underline">Terms & Conditions</a>
            {" "}and{" "}
            <a href="#privacy" className="text-indigo-400 hover:underline">Privacy Policy</a>
          </p>
        </form>
      )}
    </div>
  );
};
