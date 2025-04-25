import { Link } from "react-router-dom";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1F2F3C]/80 backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-6 md:px-20 h-[60px] flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="https://dhiman.thedmsolutions.in/wp-content/uploads/2025/03/Dhiman-Final-Logo-2048x714.png"
                        alt="Logo"
                        className="h-12 object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4">
                    {navLinks.map(({ to, label }) => (
                        <Link
                            key={label}
                            to={to}
                            className="text-white text-[16px] font-serif px-4 py-2 hover:text-[#BB9880] transition-colors duration-300 flex items-center"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white">
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-16 6h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
