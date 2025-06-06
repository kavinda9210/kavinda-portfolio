import React from 'react';
import { useTheme } from '../context/ThemeContext';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-gray-900/5 border-gray-900/10'}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-50' : 'text-gray-900'}`}>
                    Kavinda Rupasingha
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className={`${theme === 'dark' ? 'text-blue-50 hover:text-blue-300' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>Home</a>
                    <a href="#about" className={`${theme === 'dark' ? 'text-blue-50 hover:text-blue-300' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>About</a>
                    <a href="#skills" className={`${theme === 'dark' ? 'text-blue-50 hover:text-blue-300' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>Skills</a>
                    <a href="#projects" className={`${theme === 'dark' ? 'text-blue-50 hover:text-blue-300' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>Projects</a>
                    <a href="#contact" className={`${theme === 'dark' ? 'text-blue-50 hover:text-blue-300' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>Contact</a>

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-900/10 hover:bg-gray-900/20'} transition-colors`}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>

                {/* Mobile Menu */}
                <MobileMenu />
            </div>
        </nav>
    );
};

export default Navbar;