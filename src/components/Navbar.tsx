'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, Share2, Mail, Home, User } from 'lucide-react';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        >
            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-[#ffffff]/10 rounded-full px-8 py-4 flex items-center gap-8 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <NavLink href="/" icon={<Home size={20} />} label="Home" />
                <NavLink href="#about" icon={<User size={20} />} label="About" />
                <div className="w-px h-6 bg-white/10" />
                <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-[#00f0ff] transition-colors duration-300">
                    ARPIT<span className="text-[#00f0ff]">.</span>
                </Link>
                <div className="w-px h-6 bg-white/10" />
                <NavLink href="#portfolio" icon={<Camera size={20} />} label="Work" />
                <NavLink href="#contact" icon={<Mail size={20} />} label="Contact" />
            </div>
        </motion.nav>
    );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link href={href} className="group flex flex-col items-center gap-1 text-[#888888] hover:text-white transition-colors duration-300">
            <div className="group-hover:text-[#00f0ff] transition-colors duration-300">
                {icon}
            </div>
            <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-5">
                {label}
            </span>
        </Link>
    );
}
