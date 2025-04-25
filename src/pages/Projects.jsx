// src/pages/Projects.jsx
import React from "react";
import Footer from "../components/Footer";

const Projects = () => {
    const projectImages = [
        {
            src: "https://media.istockphoto.com/id/2046945081/photo/modern-style-luxury-black-living-room-with-city-view-in-the-night-3d-render.jpg?s=612x612&w=0&k=20&c=EptmKtc17Hg_1JloU11XTQdxmXoWBIC0mCwXeXimk08=",
            alt: "Premium Lifestyle",
            label: "Premium Lifestyle",
        },
        {
            src: "https://images.pexels.com/photos/13608792/pexels-photo-13608792.jpeg?auto=compress&cs=tinysrgb&w=1200",
            alt: "Private Penthouses",
            label: "Private Penthouses",
        },
        {
            src: "https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs=",
            alt: "Luxury Villas",
            label: "Luxury Villas",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white mt-8">
            <div className="pt-15 px-6 lg:px-24 flex-grow">
                <h2 className="text-5xl font-serif text-[#1F2F3C] mb-12 text-center tracking-wide uppercase">
                    Our Projects
                </h2>

                {/* Banner section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {projectImages.map((img, index) => {
                        const words = img.label.split(" ");
                        return (
                            <div
                                key={index}
                                className="relative rounded-xl overflow-hidden group shadow-lg"
                            >
                                {/* Image */}
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay with top-aligned text */}
                                <div className="absolute inset-0  flex items-start justify-center pt-4 px-2 pointer-events-none">
                                    <h3 className="text-white text-xl lg:text-2xl font-serif uppercase tracking-wider text-center  px-3 py-1 rounded">
                                        <span className="text-[#E3D07E]">{words[0]}</span>{" "}
                                        <span>{words.slice(1).join(" ")}</span>
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Description section */}
                <div className="text-center text-[#4A4A4A] max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
                    <p className="mb-4">
                        At <span className="text-[#BB9880] font-medium">Dhiman Developers</span>, our projects embody the perfect balance of luxury, innovation, and sustainability. We shape spaces that not only meet modern demands but also anticipate the needs of tomorrow.
                    </p>
                    <p>
                        From exquisite residences to forward-thinking commercial hubs, every structure is a legacy in the making — designed to inspire, crafted to last.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-gradient-to-b from-[#1f2b30] to-black text-white mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default Projects;
