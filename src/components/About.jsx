import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="glass p-8 md:p-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-4 text-slate-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I’m Ravinder, a creative thumbnail designer passionate about crafting scroll-stopping visuals that capture attention in seconds. My approach combines audience-driven research, impactful composition, and strategic A/B testing to maximize click-through rates (CTR).

With experience designing for channels across tech, fitness, travel, and finance, I specialize in creating high-impact designs that align with brand identity while driving measurable engagement. My goal is simple — to turn casual scrollers into committed viewers.
        </motion.p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
          <li>• Fast 24‑48h delivery</li>
          <li>• PSD/PNG exports</li>
          <li>• A/B test‑ready options</li>
          <li>• Brand‑consistent templates</li>
        </ul>
      </div>
    </section>
  );
}
