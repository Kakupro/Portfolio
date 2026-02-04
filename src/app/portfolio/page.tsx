'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: "Neon City",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" // Placeholder
    },
    {
        id: 2,
        title: "Brand Strategy for XYZ",
        category: "Social Media",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1574&q=80" // Placeholder
    },
    {
        id: 3,
        title: "Portrait Series",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80" // Placeholder
    },
    {
        id: 4,
        title: "Event Coverage",
        category: "Videography",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 5,
        title: "Lifestyle Shoot",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80"
    },
    {
        id: 6,
        title: "Tech Review",
        category: "Content Creation",
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    }
];

export default function WorkPage() {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">Selected Work</h1>
                <p className="text-[#888] text-lg max-w-2xl mx-auto">
                    A collection of projects where pixels meet purpose. Exploring the realm of digital visuals.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-[#00f0ff] text-xs font-bold uppercase tracking-wider mb-2 block">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
