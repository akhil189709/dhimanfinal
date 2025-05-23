import React from 'react';
import { Link } from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    ArrowRight,
} from 'lucide-react';

const Footer = ({ isTransparent = false }) => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact Us', path: '/contact' },
    ];

    return (
        <footer
            className={`w-full text-white font-serif ${isTransparent
                ? 'bg-black/30 backdrop-blur-sm'
                : 'bg-gradient-to-b from-[#47545F] to-[#1F2F3C]'
                }`}
        >
            <div className="w-full px-4 sm:px-6 md:px-10 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="https://dhiman.thedmsolutions.in/wp-content/uploads/2025/03/Dhiman-Final-Logo.png"
                                alt="Dhiman Developers Logo"
                                className="h-8 sm:h-10 w-auto"
                            />
                        </div>
                        <p className="text-sm sm:text-base text-slate-300 mb-6">
                            Dhiman Developers goes beyond building spaces—we create landmarks. With unmatched quality and innovation, we craft environments that inspire, connect, and redefine modern living.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-[#CEA959]" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-[#CEA959]" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-[#CEA959]" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-12 before:bg-[#CEA959]">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm sm:text-base">
                            {quickLinks.map(({ label, path }, index) => (
                                <li key={index}>
                                    <Link
                                        to={path}
                                        className="text-slate-300 hover:text-[#CEA959] transition-colors flex items-center gap-2"
                                    >
                                        <ArrowRight size={14} />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-12 before:bg-[#CEA959]">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm sm:text-base">
                            {['Privacy Policy', 'Terms & Condition'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-slate-300 hover:text-[#CEA959] transition-colors flex items-center gap-2">
                                        <ArrowRight size={14} />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-12 before:bg-[#CEA959]">
                            Contact Us
                        </h3>
                        <ul className="space-y-4 text-sm sm:text-base">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-[#CEA959] mt-1 flex-shrink-0" />
                                <span className="text-slate-300">
                                    505, 5th floor, Emaar The Palm Square, Sector 66, Gurugram - 122102
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-[#CEA959]" />
                                <a href="tel:+91999457050" className="text-slate-300 hover:text-[#CEA959] transition-colors">
                                    +91 99994 57050
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-[#CEA959]" />
                                <a href="mailto:akshay@dhimandevelopers.com" className="text-slate-300 hover:text-[#CEA959] transition-colors">
                                    akshay@dhimandevelopers.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 mt-10 border-t border-slate-800 text-center text-sm text-slate-400">
                    <a
                        href="https://thedmsolutions.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#CEA959] transition-colors"
                    >
                        Designed By The Digital Marketing Solutions © {currentYear}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
