import Hero from "@/components/Hero";

export default function Home() {
  // Deployment trigger: 2026-02-04
  return (
    <main className="relative w-full min-h-screen">
      <Hero />

      {/* Placeholder for Content to allow scrolling */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-[#050505]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-[#00f0ff] pl-4">About Me</h2>
          <p className="text-xl text-[#888888] max-w-2xl">
            I specialize in capturing moments and managing digital presence.
            My work combines artistic vision with strategic social media handling to create impactful visual narratives.
          </p>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 border-l-4 border-[#00f0ff] pl-4">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-[#111] rounded-xl border border-[#333] hover:border-[#00f0ff] transition-colors duration-300 flex items-center justify-center group overflow-hidden relative">
                <span className="text-[#333] group-hover:text-[#00f0ff] transition-colors">Portfolio Item {item}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-[#888888] mb-8">Have a project in mind? Let's work together.</p>
          <a href="mailto:contact@example.com" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-[#00f0ff] hover:text-white transition-colors duration-300">
            Contact Me
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-[#444] text-sm">
        © {new Date().getFullYear()} Arpit Kumar Singh. All Rights Reserved.
      </footer>
    </main>
  );
}
