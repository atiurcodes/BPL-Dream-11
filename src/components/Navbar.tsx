import { useState } from "react";
import { FaBars, FaDollarSign, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = ({ dollar }: { dollar: number }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="container mx-auto px-4 py-5 lg:px-0">

            {/* Navbar Top */}
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div>
                    <img
                        src={logo}
                        alt="Navbar-Logo"
                    />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 md:flex lg:gap-10">
                    <ul className="flex items-center gap-6 lg:gap-10">
                        <li className="cursor-pointer hover:text-primary">
                            Home
                        </li>
                        <li className="cursor-pointer hover:text-primary">
                            Fixtures
                        </li>
                        <li className="cursor-pointer hover:text-primary">
                            Terms
                        </li>
                        <li className="cursor-pointer hover:text-primary">
                            Schedules
                        </li>
                    </ul>

                    {/* Balance */}
                    <h2 className="flex items-center gap-1 text-xl font-bold text-yellow-500 lg:text-2xl">
                        <FaDollarSign />
                        {dollar}
                    </h2>
                </nav>

                {/* Mobile Right Side */}
                <div className="flex items-center gap-4 md:hidden">

                    {/* Balance */}
                    <h2 className="flex items-center gap-1 text-lg font-bold text-yellow-500">
                        <FaDollarSign />
                        {dollar}
                    </h2>

                    {/* Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="mt-5 rounded-xl bg-base-200 p-4 md:hidden">
                    <ul className="flex flex-col gap-4 text-center">
                        <li className="cursor-pointer hover:text-primary">
                            Home
                        </li>

                        <li className="cursor-pointer hover:text-primary">
                            Fixtures
                        </li>

                        <li className="cursor-pointer hover:text-primary">
                            Terms
                        </li>

                        <li className="cursor-pointer hover:text-primary">
                            Schedules
                        </li>
                    </ul>
                </nav>
            )}

        </section>
    );
};

export default Navbar;