'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const yImage = useTransform(scrollY, [0, 500], [0, -50]);

    return (
        <section className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden pt-20 pb-0">

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Top Text Layer */}
                <motion.div
                    style={{ y: yText }}
                    className="relative z-0 text-center -mb-10 md:-mb-24 scale-y-110"
                >
                    <h1 className="text-[12vw] leading-[0.8] font-bold text-white tracking-tighter mix-blend-difference">
                        VISUAL <br />
                        <span className="text-[#333]">STORYTELLER</span>
                    </h1>
                </motion.div>

                {/* Center Image */}
                <motion.div
                    style={{ y: yImage }}
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative z-10 w-[300px] h-[400px] md:w-[400px] md:h-[550px]"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white/5 border border-white/10">
                        <Image
                            src="/profile.jpg"
                            alt="Arpit Kumar Singh"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            priority
                        />
                    </div>

                    {/* Floating Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute bottom-10 -right-10 md:right-[-80px] bg-white text-black py-4 px-6 rounded-full font-bold text-sm tracking-widest shadow-xl flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        BASED IN INDIA
                    </motion.div>
                </motion.div>

                {/* Bottom Text Layer */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="relative z-0 mt-8 md:-mt-16 text-center"
                >
                    <h2 className="text-[5vw] font-light text-[#888] tracking-[0.5em] uppercase">
                        & Strategist
                    </h2>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 flex gap-6 z-20"
                >
                    <Link href="#contact" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-[#ccc] transition-colors">
                        Hire Me
                    </Link>
                    <Link href="#portfolio" className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                        View Work
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
