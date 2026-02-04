'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Instagram, ArrowDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">

            {/* Background Gradient Orbs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#2563eb] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">

                {/* Text Side */}
                <motion.div
                    style={{ y: y1 }}
                    className="order-2 lg:order-1 flex flex-col items-start space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 text-[#00f0ff] text-sm tracking-wider uppercase backdrop-blur-md mb-4">
                            Welcome to my universe
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white mb-4">
                            Arpit <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#00f0ff] to-[#0044ff] animate-gradient-x">
                                Kumar Singh
                            </span>
                        </h1>
                        <p className="text-[#a1a1aa] text-lg md:text-xl max-w-xl leading-relaxed">
                            Crafting digital experiences with a blend of <span className="text-white font-medium">Visual Art</span> and <span className="text-white font-medium">Strategic Code</span>.
                            Let's turn ideas into reality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="#contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Project</span>
                            <div className="absolute inset-0 bg-[#00f0ff] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </Link>

                        <Link href="#portfolio" className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                            View Work
                        </Link>
                    </motion.div>

                    <div className="flex items-center gap-6 pt-8">
                        <div className="h-[1px] w-12 bg-white/20" />
                        <SocialLink href="https://github.com/arpits0017" icon={<Github size={20} />} />
                        <SocialLink href="https://www.linkedin.com/in/arpit-kumar-singh-239600325/" icon={<Linkedin size={20} />} />
                        <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
                    </div>
                </motion.div>

                {/* Image Side - 3D Card Effect */}
                <motion.div
                    style={{ y: y2 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px]"
                    >
                        {/* Abstract Shapes behind */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00f0ff] rounded-full mix-blend-overlay filter blur-[20px] opacity-60 animate-bounce" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#111]/40 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] group transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <Image
                                src="/profile.jpg"
                                alt="Arpit Kumar Singh"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                priority
                            />

                            {/* Floating Card Detail */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl z-20 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-[#00f0ff] uppercase tracking-wider">Role</p>
                                        <p className="text-white font-bold">Creative Developer</p>
                                    </div>
                                    <ExternalLink className="text-white/50" size={20} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <ArrowDown size={16} className="animate-bounce" />
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888] hover:text-[#00f0ff] transition-colors duration-300 transform hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}
