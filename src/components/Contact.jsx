import { motion } from 'framer-motion';

export default function Contact() {
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

        {/* Contact details */}
        <div className="mt-4 space-y-2 text-slate-200">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:ravindernyalakanti8@gmail.com"
              className="text-purple-400 hover:underline"
            >
              ravindernyalakanti8@gmail.com
            </a>
          </p>
          <p>
            📱 Mobile:{" "}
            <a
              href="tel:9640189281"
              className="text-purple-400 hover:underline"
            >
              9640189281
            </a>
          </p>
        </div>

        <form className="mt-6 grid sm:grid-cols-2 gap-4">
          <input className="glass p-3 outline-none" placeholder="Your Name" />
          <input className="glass p-3 outline-none" placeholder="Email" />
          <input
            className="glass p-3 outline-none sm:col-span-2"
            placeholder="Subject"
          />
          <textarea
            rows="5"
            className="glass p-3 outline-none sm:col-span-2"
            placeholder="Tell me about your project…"
          />
          <button
            type="button"
            className="btn bg-purple-600 sm:col-span-2"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
