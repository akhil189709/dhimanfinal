import villaImage from './villa.jpg'; // Adjust the path as needed

const Villa = () => {
    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            <img
                src={villaImage}
                alt="Villa"
                className="w-full h-full object-cover object-[0_65%]" // shows the top part (sky)
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-screen h-full bg-black/40 flex items-start justify-center pt-6">
                <div className="text-center text-white px-4 flex flex-col gap-2 max-w-2xl">
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
