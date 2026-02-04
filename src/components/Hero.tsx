'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Instagram, Facebook, Camera } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">

            {/* Background Text Effect (Optional, behind everything) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-[#ffffff]/[0.02] whitespace-nowrap select-none pointer-events-none z-0">
                CREATIVE
            </div>

            <div className="z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-left space-y-6 order-2 md:order-1"
                >
                    <div className="space-y-2">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-[#00f0ff] font-medium tracking-widest uppercase text-sm"
                        >
                            Hello, I am
                        </motion.h2>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                            Arpit Kumar <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0044ff]">
                                Singh
                            </span>
                        </h1>
                    </div>

                    <p className="text-[#888888] text-lg max-w-md leading-relaxed">
                        A passionate <span className="text-white">Photographer</span> and <span className="text-white">Social Media Manager</span> based in India. I create visual stories that captivate and engage.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <SocialLink href="https://github.com/arpits0017" icon={<Github size={20} />} />
                        <SocialLink href="https://www.linkedin.com/in/arpit-kumar-singh-239600325/" icon={<Linkedin size={20} />} />
                        {/* Add more placeholders if needed */}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="pt-6"
                    >
                        <Link href="#contact" className="px-8 py-3 bg-gradient-to-r from-[#00f0ff] to-[#0044ff] text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow duration-300">
                            Let's Talk
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-[#00f0ff] rounded-full blur-[100px] opacity-20 animate-pulse"></div>

                        {/* Image Container with Border */}
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-[#ffffff]/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/profile.jpg"
                                alt="Arpit Kumar Singh"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Elements (Decorative) */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-[#0a0a0a] p-4 rounded-xl border border-[#ffffff]/10 shadow-xl"
                        >
                            <Camera className="text-[#00f0ff]" size={32} />
                        </motion.div>
                    </div>
                </motion.div>

            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent"></div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#1e1e24] flex items-center justify-center text-white hover:bg-[#00f0ff] hover:text-[#000000] transition-all duration-300"
        >
            {icon}
        </Link>
    );
}
