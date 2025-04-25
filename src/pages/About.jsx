import React from "react";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white mt-10 font-sans">
            {/* Main content */}
            <main className="flex-grow pt-14 pb-16 w-full">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-5xl font-serif  text-center text-black mb-14 tracking-wide uppercase">
                        About Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Text Section */}
                        <div className="text-[#4A4A4A] text-lg leading-relaxed space-y-6">
                            <p>
                                At <span className="font-semibold text-[#BB9880]">Dhiman Developers</span>, we don’t just build structures — we shape the future.
                                With a legacy of excellence and a vision for innovation, we create landmark
                                spaces that redefine modern living and working.
                            </p>
                            <p>
                                From <span className="text-[#BB9880] font-medium">premium residential communities</span> to cutting-edge commercial developments,
                                our projects are crafted with precision, sustainability, and an unwavering
                                commitment to quality.
                            </p>
                            <p>
                                Driven by <span className="font-medium text-[#BB9880]">integrity</span> and a passion for <span className="font-medium text-[#BB9880]">excellence</span>, we deliver not just spaces,
                                but experiences that enhance lives and drive progress.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center">
                            <div className="p-2 rounded-xl bg-white">
                                <img
                                    src="https://dhiman.thedmsolutions.in/wp-content/uploads/2025/03/cropped-cropped-Dhiman-Logo-3.png"
                                    alt="Dhiman Logo"
                                    className="w-full max-w-xs object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-gradient-to-b from-[#1f2b30] to-black text-white mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default About;
