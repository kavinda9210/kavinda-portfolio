import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} Kavinda Rupasingha. All rights reserved.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-blue-50 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-50 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;