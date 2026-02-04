'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, Share2, Mail, Home, User, Briefcase, Layers } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [active, setActive] = useState('Home');

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-full pl-6 pr-8 py-3 flex items-center gap-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-shadow duration-500">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#0044ff] flex items-center justify-center text-black font-bold text-xs group-hover:rotate-180 transition-transform duration-500">
                        AK
                    </div>
                    <span className="text-white font-bold tracking-tight hidden sm:block group-hover:text-[#00f0ff] transition-colors">
                        ARPIT
                    </span>
                </Link>

                <div className="h-6 w-[1px] bg-white/10" />

                <div className="flex items-center gap-2 sm:gap-6">
                    <NavLink href="/" icon={<Home size={18} />} label="Home" active={active === 'Home'} onClick={() => setActive('Home')} />
                    <NavLink href="#about" icon={<User size={18} />} label="About" active={active === 'About'} onClick={() => setActive('About')} />
                    <NavLink href="#portfolio" icon={<Layers size={18} />} label="Work" active={active === 'Work'} onClick={() => setActive('Work')} />
                    <NavLink href="#contact" icon={<Mail size={18} />} label="Contact" active={active === 'Contact'} onClick={() => setActive('Contact')} />
                </div>

                <div className="hidden sm:flex items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-[#00f0ff] hover:text-white transition-colors duration-300"
                    >
                        Hire Me
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}

function NavLink({ href, icon, label, active, onClick }: { href: string; icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative group flex flex-col items-center justify-center p-2"
        >
            <div className={`transition-colors duration-300 ${active ? 'text-[#00f0ff]' : 'text-[#888] group-hover:text-white'}`}>
                {icon}
            </div>

            {/* Dot indicator */}
            {active && (
                <motion.div
                    layoutId="navbar-dot"
                    className="absolute -bottom-1 w-1 h-1 bg-[#00f0ff] rounded-full"
                />
            )}

            {/* Tooltip */}
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] uppercase tracking-wider text-[#00f0ff] whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-white/10 backdrop-blur-md">
                {label}
            </span>
        </Link>
    );
}
