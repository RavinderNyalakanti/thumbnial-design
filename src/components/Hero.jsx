import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaBehance } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="pt-20 md:pt-28 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass p-8 md:p-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Eye‑Catching <span className="text-purple-400">Thumbnails</span> that Click
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          I design high‑CTR thumbnails for YouTube & social — clean typography, bold colors, and storytelling that drives engagement.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#work" className="btn bg-purple-600">View Work</a>
          <a href="#contact" className="btn border border-white/20">Connect With Us</a>
        </div>
        {/* <div className="mt-6 flex items-center justify-center gap-5 text-xl text-slate-300">
          <FaYoutube />
          <FaInstagram />
          <FaBehance />
        </div> */}
      </motion.div>
      
    </section>
  );
}
