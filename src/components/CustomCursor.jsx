import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isLinkHover, setIsLinkHover] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() === "a") {
                setIsLinkHover(true);
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() === "a") {
                setIsLinkHover(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <>
            {!isLinkHover && (
                <motion.img
                    src="/logo.png"
                    alt="Custom Cursor"
                    className="fixed top-0 left-0 z-[9999] w-8 h-8 pointer-events-none"
                    animate={{ x: position.x - 16, y: position.y - 16 }}
                    transition={{ duration: 0, ease: "linear" }}
                />
            )}
        </>
    );
};

export default CustomCursor;
