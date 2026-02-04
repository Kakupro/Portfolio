'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, User, Layers, Mail } from 'lucide-react';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 right-6 z-50 flex justify-center"
        >
            <div className="bg-white border-2 border-black rounded-xl px-2 py-2 flex flex-col gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <NavLink href="/" icon={<Home size={20} />} label="Home" />
                <NavLink href="#about" icon={<User size={20} />} label="Who" />
                <NavLink href="#services" icon={<Layers size={20} />} label="What" />
                <NavLink href="#contact" icon={<Mail size={20} />} label="Hi" />
            </div>
        </motion.nav>
    );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#ffb800] text-black transition-colors border-2 border-transparent hover:border-black relative group"
        >
            {icon}
            <span className="absolute right-full mr-2 bg-black text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </Link>
    );
}
