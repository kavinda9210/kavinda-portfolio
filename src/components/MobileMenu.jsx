import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Theme-based styles
    const overlayBg = theme === 'dark' ? 'bg-white/95' : 'bg-gray-900/95';
    const textColor = theme === 'dark' ? 'text-gray-900' : 'text-white';
    const hoverColor = theme === 'dark' ? 'hover:text-blue-600' : 'hover:text-blue-300';
    const borderColor = theme === 'dark' ? 'border-gray-900/10' : 'border-white/10';

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.mobile-menu-container')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="md:hidden relative mobile-menu-container">
            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                aria-label="Toggle menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className={`absolute right-0 mt-2 w-56 origin-top-right rounded-md ${overlayBg} shadow-lg ring-1 ${borderColor} backdrop-blur-lg z-50`}>
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        <a href="#home" className={`block px-4 py-3 text-sm ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" className={`block px-4 py-3 text-sm ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsOpen(false)}>About</a>
                        <a href="#skills" className={`block px-4 py-3 text-sm ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsOpen(false)}>Skills</a>
                        <a href="#projects" className={`block px-4 py-3 text-sm ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#contact" className={`block px-4 py-3 text-sm ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsOpen(false)}>Contact</a>
                        <div className="border-t border-gray-700/30 my-1"></div>
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-3 text-sm ${textColor} ${hoverColor} transition-colors`}
                        >
                            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;