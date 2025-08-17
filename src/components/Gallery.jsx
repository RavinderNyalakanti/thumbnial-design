import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import placeholder assets
import t1 from "../assets/thumb1.png";
import t2 from "../assets/thumb2.png";
import t3 from "../assets/thumb3.png";
import t4 from "../assets/thumb4.png";
import t5 from "../assets/thumb5.png";
import t6 from "../assets/thumb6.png";
import t7 from '../assets/thumb7.png'
import t8 from '../assets/thumb8.png'
import t9 from '../assets/thumb9.png'

const items = [
  { src: t1, title: "Food" },
  { src: t2, title: "Adventures" },
  { src: t3, title: "Cartoons" },
  { src: t4, title: "Nature" },
  { src: t5, title: "Trips" },
  { src: t6, title: "Country Side" },
  { src: t7, title: "Cooking Hacks" },
  { src: t8, title: "Travel" },
  { src: t9, title: "Travel" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">Work</h2>
        {/* <p className="text-slate-300 text-sm">Hover to preview • Click to open</p> */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Thumbnail Gallery
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          A curated collection of creative works, showcased with style and motion.
        </p>
      </motion.div>

<div className="flex items-end justify-between mb-6">
        {/* <h2 className="text-3xl md:text-4xl font-bold">Work</h2> */}
        {/* <p className="text-slate-300 text-sm">Hover to preview • Click to open</p> */}
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="glass block overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              {/* <p className="text-xs text-slate-400 mt-1">YouTube / Social</p> */}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
             
              <button
                className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 font-bold shadow-lg hover:bg-gray-200"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />

              {/* Caption */}
              <h3 className="text-center text-white mt-4 text-lg">
                {selectedImage.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
