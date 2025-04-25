import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us | Dhiman Developers';
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 ">
                    <img
                        src="/interior-designer-presenting-renovation-project.jpg"
                        alt="Office interior"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    {/* <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Contact <span className="text-[#CEA959]">Us</span>
                    </motion.h1> */}
                    {/* <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
                    >
                        Get in touch with our team for inquiries, partnerships, and project consultations
                    </motion.p> */}
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                    >
                        {[
                            {
                                title: <p className='font-serif font-normal'>Talk to Us</p>,
                                desc: <p className='text-lg text-black mb-2'>We’re just a call away, always ready to help you.</p>,
                                icon: <Phone className="text-black" size={24} />,
                                content: <span className="text-base">+91 99994 57050</span>
                            },
                            {
                                title: <p className='font-serif font-medium'>Drop Us a Mail</p>,
                                desc: 'Reach out anytime, we usually reply within a few hours.',
                                icon: <Mail className="text-black" size={24} />,
                                content: <span className="text-base">akshay@dhimandevelopers.com</span>
                            },
                            {
                                title: <p className='font-serif font-medium'>Visit Us</p>,
                                desc: 'Come say hello at our office or find us on the map.',
                                icon: <MapPin className="text-black" size={24} />,
                                content: (
                                    <span className="text-base">
                                        505, 5th Floor, Emaar The Palm Square<br />
                                        Sector 66, Gurugram-122102
                                    </span>
                                )
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white rounded-lg border border-[#D6D6D6] space-y-4 hover:shadow-2xl transition-all duration-300 h-full"
                            >
                                <h4 className="text-xl font-semibold text-slate-900">{item.title}</h4>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                                <div className="flex items-start gap-3 text-slate-700">
                                    {item.icon}
                                    <div>{item.content}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Form Block */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-serif text-black mb-4 pl-15" >Let's <br />Get in touch</h2>
                            <p className="text-gray-700 text-lg pl-14">
                                Let’s bring your vision to life.<br />
                                Your satisfaction means the world to us.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-5 w-full"
                        >
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full border border-slate-700 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CEA959]"
                            />
                            <input
                                type="tel"
                                placeholder="Enter Mobile Number"
                                className="w-full border border-slate-700 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CEA959]"
                            />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full border border-slate-700 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CEA959]"
                            />
                            <textarea
                                rows="4"
                                placeholder="Write your message here"
                                className="w-full border border-slate-700 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CEA959]"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-slate-800 text-white px-6 py-3 rounded hover:bg-[#004C4C] transition-colors"
                            >
                                Submit
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        className="font-sans"
                        title="Our Location"
                        subtitle="Visit our office to discuss your project in person."
                        center
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <iframe
                            title="Dhiman Developers Office Map"
                            src="https://www.google.com/maps?q=505,+5th+Floor,+Emaar+The+Palm+Square,+Sector+66,+Gurugram+-+122102&output=embed"
                            width="100%"
                            height="400"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl shadow-lg"
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
