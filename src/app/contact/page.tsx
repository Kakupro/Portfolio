'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Instagram, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 container mx-auto flex items-center justify-center">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Let's Connect</h1>
                        <p className="text-[#a1a1aa] text-lg leading-relaxed">
                            Interested in working together or just want to say hi?
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <ContactItem icon={<Mail className="text-[#00f0ff]" />} label="Email" value="arpitkumar@example.com" />
                        <ContactItem icon={<Phone className="text-[#00f0ff]" />} label="Phone" value="+91 98765 43210" />
                        <ContactItem icon={<MapPin className="text-[#00f0ff]" />} label="Location" value="West Bengal, India" />
                    </div>

                    <div className="flex gap-6">
                        <SocialButton icon={<Instagram />} href="#" />
                        <SocialButton icon={<Linkedin />} href="#" />
                        <SocialButton icon={<Github />} href="#" />
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f0ff] rounded-full filter blur-[100px] opacity-10 pointer-events-none" />

                    <form className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <InputGroup label="Name" type="text" placeholder="John Doe" />
                            <InputGroup label="Email" type="email" placeholder="john@example.com" />
                        </div>
                        <InputGroup label="Subject" type="text" placeholder="Project Inquiry" />
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#888]">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#00f0ff] transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button className="w-full py-4 bg-gradient-to-r from-[#00f0ff] to-[#0044ff] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all transform hover:scale-[1.02]">
                            Send Message
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}

function ContactItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                {icon}
            </div>
            <div>
                <p className="text-sm text-[#888]">{label}</p>
                <p className="text-xl font-bold text-white">{value}</p>
            </div>
        </div>
    );
}

function InputGroup({ label, type, placeholder }: { label: string, type: string, placeholder: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-[#888]">{label}</label>
            <input
                type={type}
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                placeholder={placeholder}
            />
        </div>
    );
}

function SocialButton({ icon, href }: { icon: any, href: string }) {
    return (
        <a href={href} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#00f0ff] hover:text-black hover:border-transparent transition-all duration-300">
            {icon}
        </a>
    );
}
