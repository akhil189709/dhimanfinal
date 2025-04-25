import villaImage from './villa.jpg'; // Adjust the path as needed

const Villa = () => {
    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            <img
                src={villaImage}
                alt="Villa"
                className="w-full h-full object-cover object-[0_65%]"
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-start md:items-center justify-center pt-10 md:pt-0 px-4">
                <div className="text-center text-white mb-70 px-4 flex flex-col gap-4 max-w-2xl">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-[#F4E3D7]">
                        REDEFINING LUXURY LIVING
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base font-serif mb-10 text-[#F4E3D7]">
                        Dhiman Developers goes beyond building spaces—we create landmarks.
                        With unmatched quality and innovation, we craft environments that inspire, connect, and redefine modern living.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Villa;
