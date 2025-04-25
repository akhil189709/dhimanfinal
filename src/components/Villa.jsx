import villaImage from './slider-1.jpg'; // Adjust the path as needed

const Villa = () => {
    return (
        <div className="relative w-full h-[60vh] overflow-hidden">
            <img
                src={villaImage}
                alt="Villa"
                className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-screen h-full bg-black/60 flex items-start justify-center pt-12">
                <div className="text-center text-white px-4 flex flex-col gap-2">
                    <h2 className="text-lg text-[#F4E3D7] md:text-4xl font-serif">
                        REDEFINING LUXURY LIVING
                    </h2>
                    <p className="text-sm font-serif text-[#F4E3D7] md:text-base">
                        Dhiman Developers goes beyond building spaces—we create landmarks.
                        With unmatched quality and innovation, we craft environments that inspire, connect, and redefine modern living.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Villa;
