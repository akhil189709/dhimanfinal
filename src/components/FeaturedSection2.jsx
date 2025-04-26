import villaImage from './woody-kelly-tD2DkYC9yWs-unsplash.jpg'; // adjust path if needed

const FeaturedSection2 = () => {
    return (
        <div
            className="relative w-full h-[120vh] md:h-screen bg-cover bg-center"
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
                <h2 className="text-2xl mr-20 ml-8 sm:text-3xl md:text-4xl font-serif font-normal text-[#1F2F3C] mb-4">
                    EXCLUSIVE RESIDENCES
                </h2>
                <p className="text-[4px] sm:text-xs md:text-sm text-[#1F2F3C] leading-relaxed max-w-[90%] text-center px-2">
                    <p className='mr-10'>Experience a new standard of living with exclusive residences designed </p><p className='mr-8'> for sophistication and comfort. With impeccable craftsmanship, modern</p> <p className='mr-10'>amenities, and elegant designs, our homes offer a harmonious blend of</p> <p className='mr-34'>luxury and tranquility, ensuring an unparalleled lifestyle.</p>
                </p>
            </div>

            {/* Bottom Right Box */}
          <div className="absolute bottom-0 right-0 z-10 w-full md:w-1/2 h-1/2 p-6 sm:p-8 md:p-10 flex items-center justify-center bg-[#F4E3D7]/90 backdrop-blur-lg text-center">
    <div className="max-w-xl">
        <h2 className="text-2xl mr-30 sm:text-3xl md:text-4xl font-serif text-[#1F2F3C] mb-4">
            PREMIUM LIFESTYLE
        </h2>
                    <div className="text-[10px] sm:text-xs md:text-sm text-[#1F2F3C] leading-relaxed max-w-[90%] text-justify">
                        <p className="ml-7">
                            Experience a seamless blend of luxury, comfort, and sophistication with Dhiman Developers.
                            Our meticulously designed spaces offer world-class amenities, modern architecture,
                            and an elevated living experience,
                        </p>
                        <p className="ml-7 text-left">
                            ensuring a lifestyle that is both exclusive and fulfilling.
                        </p>
                    </div>

    </div>
</div>

        </div>
    );
};

export default FeaturedSection2;
