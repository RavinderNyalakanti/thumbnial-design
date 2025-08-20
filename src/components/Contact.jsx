import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const OWNER_EMAIL = "ravindernyalakanti8@gmail.com";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:${OWNER_EMAIL}?subject=${
      encodeURIComponent(form.subject || "New Inquiry")
    }&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="glass p-8 md:p-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.h2>
        <p className="text-slate-300 mt-3">
          Ready to boost your CTR? Send a message.
        </p>

        <form onSubmit={handleSend} className="mt-6 grid sm:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="glass p-3 outline-none"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="glass p-3 outline-none"
            placeholder="Your Email"
            required
          />
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="glass p-3 outline-none sm:col-span-2"
            placeholder="Subject"
          />
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="glass p-3 outline-none sm:col-span-2"
            placeholder="Tell me about your project…"
            required
          />
          <button type="submit" className="btn bg-purple-600 sm:col-span-2">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
