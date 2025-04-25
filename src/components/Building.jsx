import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Building = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"], // Now tracks until the top reaches top
    });

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        [
            "polygon(49% 0, 51% 0, 100% 100%, 0 100%)",
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        ]
    );

    const width = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.05]);
    const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ clipPath, width }}
            className="mx-auto h-[130vh] flex items-center justify-center text-center overflow-hidden bg-[#F2EBE1]/80 rounded-t-[2.5rem]"
        >
            <motion.h2
                className="absolute z-0 text-[10vw] font-serif font-bold text-gray-700 leading-tight"
                style={{ opacity: scrollYProgress }}
            >
                DEVELOPING<br />NEW<br />HORIZONS
            </motion.h2>

            <motion.img
                src="https://dhiman.thedmsolutions.in/wp-content/uploads/2025/03/freepik__adjust__31526.png"
                alt="Building Centered"
                className="relative z-10 mt-90 w-auto max-w-[160px] md:max-w-[200px] lg:max-w-[260px] object-contain"
                style={{ scale, y: translateY }}
            />
        </motion.div>
    );
};

export default Building;
