import villaImage from './luxurious-villa-with-modern-architectural-design.jpg'; // adjust path if needed

const FeaturedSection = () => {
    return (
        <div
            className="relative w-full h-[250vh] md:h-screen bg-cover bg-center"
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
            <div className="absolute top-0 left-0 z-10 w-full md:w-1/2 h-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center bg-[#F4E3D7]/90 backdrop-blur-lg">
                <h2 className="text-2xl  sm:text-3xl mr-44 md:text-4xl font-serif font-normal text-[#1F2F3C] mb-4">
                    LUXURY VILLAS
                </h2>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#1F2F3C] leading-relaxed max-w-[90%]">
                    <p className='mr-4'>Discover the epitome of elegance and comfort with Dhiman Developers’</p> <p className=''>luxury villas. Designed for those who seek exclusivity and sophistication, our </p> villas feature spacious layouts, premium finishes, and world-class amenities, <p className='mr-8'>offering a serene retreat that blends modern living with timeless charm.</p>
                </p>
            </div>

            {/* Bottom Right Box */}
            <div className="absolute bottom-0 right-0 z-10 w-full md:w-1/2 h-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center bg-[#F4E3D7]/90 backdrop-blur-lg">
                <h2 className="text-2xl mr-24 sm:text-3xl md:text-4xl font-serif font-normal text-[#1F2F3C] mb-4">
                    PRIVATE PENTHOUSE
                </h2>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#1F2F3C] leading-relaxed max-w-[90%]">
                    <p className='mr-4'>  Elevate your lifestyle with a private penthouse that redefines exclusivity and</p> luxury. Designed for those who appreciate panoramic views, spacious interiors, and premium craftsmanship, our penthouses offer the perfect blend of privacy,
                    <p className='mr-2'>sophistication, and world-class amenities, creating a sanctuary above the city.</p>
                </p>
            </div>
        </div>
    );
};

export default FeaturedSection;
