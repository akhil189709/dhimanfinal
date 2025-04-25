// Home.jsx
import Building from "../components/Building";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedSection2 from "../components/FeaturedSection2";
import Navbar from "../components/Navbar";
import Villa from "../components/Villa";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Fixed Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white/0 backdrop-blur-sm shadow-md">
                <Navbar />
            </div>

            {/* Background Video Hero Section */}
            <div className="fixed top-0 left-0 w-full h-screen z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                >
                    <source
                        src="https://dhiman.thedmsolutions.in/wp-content/uploads/2025/03/0_City-Skyline_Sunset_3840x2160-1-1.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Hero Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />

                {/* Optional Hero Content */}
                <div className="relative z-20 flex items-center justify-center h-full px-4 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                    {/* Hero text can be added here */}
                </div>
            </div>

            {/* Content Scrolls up over video */}
            <div className="relative pt-[100vh] z-30">
                <Building />
            </div>

            {/* Featured Sections */}
            <FeaturedSection />
            <FeaturedSection2 />
            <Villa />

            {/* Footer Section with Background Video */}
            <div className="relative w-full h-auto lg:h-[60vh] pt-10 pb-6 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source
                        src="https://dhiman.thedmsolutions.in/wp-content/uploads/2025/03/0_City-Skyline_Sunset_3840x2160-1-1.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-[#F4E3D7]/30 via-[#1F2F3C]/60 to-[#1F2F3C]" />

                {/* Footer Content */}
                <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
                    <Footer isTransparent={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;
