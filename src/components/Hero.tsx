'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, PenTool, Video, Edit, Monitor, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="bg-[#f0f0f0] text-black overflow-hidden selection:bg-[#ffb800] selection:text-black">

            {/* HERO Section */}
            <div className="min-h-screen relative flex flex-col justify-center items-center pt-20 border-b-2 border-black">

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 hidden md:block animate-bounce duration-[3000ms]">
                    <Camera size={48} className="text-black transform -rotate-12" />
                </div>
                <div className="absolute bottom-20 right-10 hidden md:block animate-pulse">
                    <PenTool size={48} className="text-black transform rotate-12" />
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-8 items-center">

                    {/* Text Side */}
                    <div className="order-2 lg:order-1 flex flex-col items-start space-y-4">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <span className="bg-[#ffb800] px-4 py-1 text-xs font-bold border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 transform -rotate-2">
                                CREATIVE VISUAL
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tighter uppercase font-display">
                                PORTFOLIO.
                            </h1>
                        </motion.div>

                        <div className="flex gap-4 mt-8">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-[#ffb800] transition-colors cursor-pointer text-black">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/arpit-kumar-singh-239600325/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-[#ffb800] transition-colors cursor-pointer text-black">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/arpits0017" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-[#ffb800] transition-colors cursor-pointer text-black">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative flex justify-center"
                    >
                        {/* Yellow Blob Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ffb800] rounded-full mix-blend-multiply filter blur-sm opacity-80 z-0"></div>
                        <div className="absolute top-1/4 right-0 w-24 h-24 bg-black rounded-full mix-blend-multiply opacity-10 z-0"></div>

                        {/* Profile Image with Border */}
                        <div className="relative z-10 w-[300px] h-[400px] md:w-[350px] md:h-[450px] border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                            <Image
                                src="/profile.jpg"
                                alt="Arpit Kumar Singh"
                                fill
                                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-8 flex items-center gap-2">
                    <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center animate-spin-slow">
                        <span className="font-bold text-xs">Scroll</span>
                    </div>
                </div>
            </div>

            {/* ABOUT / HELLO Section */}
            <div id="about" className="py-20 border-b-2 border-black bg-white">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Image Card */}
                    <div className="relative mx-auto lg:mx-0 w-full max-w-md">
                        <div className="absolute -inset-4 bg-[#ffb800] rounded-[2rem] transform -rotate-3 border-2 border-black z-0"></div>
                        <div className="relative z-10 bg-white border-2 border-black p-4 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div className="aspect-[4/5] relative overflow-hidden rounded-lg border-2 border-black grayscale hover:grayscale-0 transition-all duration-500">
                                <Image src="/profile.jpg" alt="About Me" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl text-[#ffb800] font-black">""</span>
                            <h2 className="text-6xl font-black uppercase font-display tracking-tighter decoration-4 underline decoration-[#ffb800]">Hello.</h2>
                        </div>

                        <p className="text-lg font-medium leading-relaxed max-w-xl">
                            I'm <span className="font-bold bg-[#ffb800] px-1">Arpit Kumar Singh</span>, a creative powerhouse specializing in Visual Storytelling & Digital Strategy.
                            With over 4 years of experience, I don't just create content; I craft narratives that stick.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 pt-8">
                            {/* Education */}
                            <div>
                                <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">Education</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-lg">B.Tech Engineering</p>
                                        <p className="text-sm text-gray-600">2024 - 2028</p>
                                        <p className="text-xs text-gray-500">Vivekananda Institute of Professional Studies</p>
                                    </div>
                                </div>
                            </div>

                            {/* Software Skills */}
                            <div>
                                <div className="overflow-hidden border-2 border-black rounded-xl bg-black py-2">
                                    <div className="flex animate-marquee whitespace-nowrap">
                                        {[...Array(2)].map((_, i) => (
                                            <div key={i} className="flex gap-4 mx-4">
                                                {['PHOTOSHOP', 'ILLUSTRATOR', 'PREMIERE PRO', 'LIGHTROOM', 'ZBRUSH', 'AFTER EFFECTS', 'FIGMA', 'BLENDER'].map((tech) => (
                                                    <span key={tech} className="text-[#ffb800] font-black text-xl italic mx-4 uppercase">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div>
                            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">Working Experience</h3>
                            <ul className="space-y-4">
                                <li className="pl-4 border-l-4 border-[#ffb800]">
                                    <p className="font-bold">Freelance Photographer</p>
                                    <p className="text-sm text-gray-600">2020 - Present</p>
                                </li>
                                <li className="pl-4 border-l-4 border-black hover:border-[#ffb800] transition-colors">
                                    <p className="font-bold">Social Media Manager</p>
                                    <p className="text-sm text-gray-600">Various Brands • 2022 - Present</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICES / TABLE OF CONTENT Section */}
            <div id="services" className="py-20 bg-[#f0f0f0] border-b-2 border-black">
                <div className="container mx-auto px-6 text-center mb-16">
                    <span className="text-6xl font-black text-[#e5e5e5] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap opacity-50 select-none">
                        MY SERVICES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase font-display relative z-10 flex items-center justify-center gap-4">
                        Table <span className="bg-[#ffb800] text-black px-2 transform -rotate-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Of</span> Content.
                    </h2>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ServiceBox icon={<Monitor size={32} />} label="Graphic Design" />
                    <ServiceBox icon={<Camera size={32} />} label="Photographer" />
                    <ServiceBox icon={<Video size={32} />} label="Videographer" />
                    <ServiceBox icon={<Edit size={32} />} label="Video Editor" />
                </div>
            </div>

            {/* CONTACT / Let's Work Together */}
            <div id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* QR Code / Visual Side */}
                    <div className="bg-[#ffb800] p-8 rounded-xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-sm mx-auto transform rotate-2">
                        <div className="bg-white p-4 border-2 border-black">
                            {/* Placeholder for QR Code effect */}
                            <div className="bg-black w-full aspect-square pattern-grid-lg"></div>
                        </div>
                        <p className="text-center font-bold mt-4 uppercase tracking-wider">Scan to Connect</p>
                    </div>

                    {/* Contact Info Side */}
                    <div className="space-y-8">
                        <h2 className="text-5xl font-black uppercase font-display underline decoration-[#ffb800] decoration-4 underline-offset-8">
                            Let's Work Together :
                        </h2>

                        <div className="space-y-6 text-lg font-medium">
                            <ContactRow icon={<Mail />} label="arpitkumar@example.com" />
                            <ContactRow icon={<Phone />} label="+91 98765 43210" />
                            <ContactRow icon={<MapPin />} label="Delhi, India" />
                        </div>

                        <Link href="mailto:arpitkumar@example.com" className="inline-block px-8 py-4 bg-black text-white font-bold text-xl rounded-lg hover:bg-[#ffb800] hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-black">
                            Hire Me Now
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="py-8 bg-black text-white text-center border-t-2 border-black">
                <p className="font-bold uppercase tracking-wider text-sm">© {new Date().getFullYear()} Arpit Kumar Singh. All Rights Reserved.</p>
            </footer>

        </section>
    );
}

function ServiceBox({ icon, label }: { icon: any, label: string }) {
    return (
        <div className="bg-[#ffb800] p-6 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-[#ffb800] group-hover:text-black transition-colors border-2 border-transparent group-hover:border-black">
                {icon}
            </div>
            <span className="font-bold text-center leading-tight uppercase">{label}</span>
        </div>
    );
}

function ContactRow({ icon, label }: { icon: any, label: string }) {
    return (
        <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 bg-[#f0f0f0] border-2 border-black rounded-full flex items-center justify-center group-hover:bg-[#ffb800] transition-colors">
                {icon}
            </div>
            <span className="group-hover:translate-x-1 transition-transform">{label}</span>
        </div>
    );
}
