import React from 'react';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <div className="fixed inset-0 -z-10 bg-grid bg-grid"></div>
      <div className="fixed -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-purple-600/30 blur-3xl"></div>
      <div className="fixed -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-600/20 blur-3xl"></div>

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="font-bold text-lg">Thumbnail<span className="text-purple-400">.Vibes</span></a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#work" className="hover:text-purple-300">Work</a>
            <a href="#about" className="hover:text-purple-300">About</a>
            <a href="#contact" className="hover:text-purple-300">Contact</a>
          </div>
          <a href="#contact" className="btn bg-purple-600">Hire Me</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
