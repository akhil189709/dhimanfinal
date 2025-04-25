import villaImage from './luxurious-villa-with-modern-architectural-design.jpg'; // adjust path if needed

const FeaturedSection = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${villaImage})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {/* Overlay for transparency */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Top Left Box */}
            <div className="absolute top-0 left-0 z-10 bg-[#F4E3D7]/90 backdrop-blur-lg w-1/2 h-1/2 p-6 md:p-10 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl md:text-3xl font-serif font-normal text-[#1F2F3C] mb-4">
                    LUXURY VILLAS
                </h2>
                <p className="text-sm md:text-xs text-[#1F2F3C] leading-relaxed">
                    Discover the epitome of elegance and comfort with Dhiman Developers’ luxury villas. Designed for those who seek exclusivity and sophistication, our villas feature spacious layouts, premium finishes, and world-class amenities, offering a serene retreat that blends modern living with timeless charm.
                </p>
            </div>

            {/* Bottom Right Box */}
            <div className="absolute bottom-0 right-0 z-10 bg-[#F4E3D7]/90 backdrop-blur-lg w-1/2 h-1/2 p-6 md:p-10 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl md:text-3xl font-serif font-normal text-[#1F2F3C] mb-4">
                    PRIVATE PENTHOUSE
                </h2>
                <p className="text-sm md:text-xs text-[#1F2F3C] leading-relaxed">
                    Elevate your lifestyle with a private penthouse that redefines exclusivity and luxury. Designed for those who appreciate panoramic views, spacious interiors, and premium craftsmanship, our penthouses offer the perfect blend of privacy, sophistication, and world-class amenities, creating a sanctuary above the city.
                </p>
            </div>
        </div>
    );
};

export default FeaturedSection;
