"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus({
        type: "success",
        message: "Message received. I'll be in touch.",
      });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const inputClass =
    "w-full bg-transparent border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#e8e8e8] placeholder-[#666666] focus:outline-none focus:border-[#00d4ff]/50 transition-colors duration-300 font-mono text-sm";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg w-full"
    >
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="company"
          placeholder="Company (optional)"
          value={form.company}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="w-full bg-[#00d4ff] text-[#080808] font-mono text-sm tracking-widest uppercase py-4 rounded-lg hover:bg-[#00d4ff]/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status.message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`font-mono text-sm text-center ${
            status.type === "success" ? "text-[#00d4ff]" : "text-red-400"
          }`}
        >
          {status.message}
        </motion.p>
      )}
    </motion.form>
  );
}
