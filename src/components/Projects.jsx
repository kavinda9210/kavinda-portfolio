import React from 'react';

const projects = [
    {
        title: '3D Vehicle Garage',
        description: 'An interactive 3D vehicle garage built with React and Three.js, featuring several 3D vehicles with the ability to rotate 360 degrees and change colors.',
        tags: ['React', 'Three.js', '3D Models'],
        link: 'https://github.com/kavinda9210/3Dmodels',
        image: '/public/3D Vehicle Garage.PNG'
    },
    {
        title: '3D Vehicle Management System',
        description: 'A vehicle management system using React Three.js for the frontend and Laravel with MySQL on the backend to manage second-hand vehicles.',
        tags: ['React', 'Three.js', 'Laravel', 'MySQL'],
        link: 'https://github.com/kavinda9210/vehicle-management-system',
        image: '/public/vevicle.PNG'
    },
    {
        title: 'Tile Management System',
        description: 'A complete tile inventory management system built with PHP and MySQL for tracking and maintaining tile stock, sales, and customer records.',
        tags: ['PHP', 'MySQL', 'CRUD'],
        link: 'https://github.com/kavinda9210/tile-management-system',
        image: '/public/tile.PNG'
    },
    {
        title: 'AI Chatbot for Car Rental System',
        description: 'A chatbot built using React and OpenAI API for assisting users in a car rental system, answering queries, and handling user interactions intelligently.',
        tags: ['React', 'OpenAI API', 'Chatbot'],
        link: 'https://github.com/kavinda9210/chat',
        image: '/public/chat.PNG'
    },
    {
        title: 'Student Management System (CRUD)',
        description: 'A simple full-stack application built with Angular and Laravel API to manage student records. It allows adding, updating, viewing, and deleting student data with a user-friendly interface.',
        tags: ['Angular', 'Laravel', 'REST API', 'CRUD'],
        link: 'https://github.com/kavinda9210/AngularCrudWithLaravelApi',
        image: '/public/homepage.PNG'
    },
    {
        title: 'Pharmacy Management System',
        description: 'A full-stack web application built using Angular and Laravel API for managing pharmacy operations. Features include medicine inventory, sales tracking, supplier management, and billing.',
        tags: ['Angular', 'Laravel', 'REST API', 'Inventory', 'Pharmacy'],
        link: 'https://github.com/kavinda9210/Pharmacy-management-System',
        image: '/public/phamacy.PNG'
    }




];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-blue-50">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white/5 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform">
                            <div className="h-48 bg-white/10 flex-center">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm">{tag}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="text-blue-50 hover:underline flex items-center gap-2"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    View Project
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
