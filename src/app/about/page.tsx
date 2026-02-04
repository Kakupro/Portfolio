'use client';
import { motion } from 'framer-motion';
import { Camera, Calendar, User, Code, Palette, Aperture } from 'lucide-react';

export default function AboutPage() {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-1 w-12 bg-[#00f0ff]" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">About Me</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                    <div className="space-y-6 text-[#a1a1aa] leading-relaxed text-lg">
                        <p>
                            I am <span className="text-white font-bold">Arpit Kumar Singh</span>, a creative visionary based in West Bengal, India. My passion lies in the intersection of <span className="text-[#00f0ff]">visual storytelling</span> and <span className="text-[#00f0ff]">digital strategy</span>.
                        </p>
                        <p>
                            With years of experience behind the lens and managing brands online, I understand what makes content sticky. Whether it's capturing the raw emotion of a moment or crafting a social media campaign that resonates with thousands, I bring a unique blend of technical skill and artistic intuition to every project.
                        </p>
                        <p>
                            I don't just take photos; I create memories. I don't just post content; I build communities.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <StatCard number="4+" label="Years Experience" />
                        <StatCard number="50+" label="Projects Done" />
                        <StatCard number="20k+" label="Social Reach" />
                        <StatCard number="100%" label="Client Satisfaction" />
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">My Services</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Camera size={32} />}
                            title="Photography"
                            desc="Portrait, Landscape, Event, and Product photography that tells a story."
                        />
                        <ServiceCard
                            icon={<Aperture size={32} />}
                            title="Social Media"
                            desc="Strategic content planning, growth hacking, and community management."
                        />
                        <ServiceCard
                            icon={<Palette size={32} />}
                            title="Content Creation"
                            desc="High-quality reels, posts, and visual assets tailored for your brand."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Toolbox</h2>
                    <div className="flex flex-wrap gap-4">
                        {["Lightroom", "Photoshop", "Premiere Pro", "Instagram", "Canva", "Sony Alpha", "DaVinci Resolve"].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </motion.div>
        </section>
    );
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="p-6 bg-[#111] border border-white/10 rounded-2xl hover:border-[#00f0ff]/50 transition-colors group">
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">{number}</h3>
            <p className="text-sm text-[#666] uppercase tracking-wider">{label}</p>
        </div>
    );
}

function ServiceCard({ icon, title, desc }: { icon: any; title: string; desc: string }) {
    return (
        <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:bg-[#111] transition-all hover:-translate-y-2 duration-300">
            <div className="text-[#00f0ff] mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-[#888] text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
