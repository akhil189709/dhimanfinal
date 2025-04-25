// Home.jsx
import Building from "../components/Building";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedSection2 from "../components/FeaturedSection2";
import Navbar from "../components/Navbar";
import Villa from "../components/Villa";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="relative w-screen overflow-hidden">
            <div className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
                {/* ...rest of navbar content */}
            <Navbar />
            </div>
            {/* Navbar */}

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

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />

                {/* Optional Hero Content */}
                <div className="relative z-20 flex items-center justify-center h-full text-white text-4xl font-bold">
                    {/* Hero text here */}
                </div>
            </div>

            {/* Building scrolls up over hero */}
            <div className="relative pt-[100vh] z-30">
                <Building />
            </div>

            {/* Featured Sections */}
            <FeaturedSection />
            <FeaturedSection2 />
            <Villa />

            {/* Footer */}
            {/* Footer */}
            <div className="relative w-full h-[60vh] pt-8 pb-6 overflow-hidden">
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

                {/* Gradient overlay from transparent/blur to #1F2F3C */}
                {/* Gradient overlay from solid #1F2F3C to transparent blur */}
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-[#F4E3D7]/30 via-[#1F2F3C]/60 to-[#1F2F3C]" />



                <div className="relative z-20 w-full h-full flex items-center justify-center">
                    <Footer isTransparent={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;
