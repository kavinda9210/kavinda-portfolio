import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-blue-50">Me</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-medium mb-4">Who am I?</h3>
                        <p className="mb-6 text-justify">
                            Enthusiastic and driven BSc Information Technology undergraduate with a
                            strong passion for full-stack development. Skilled in both front-end and back
                            end technologies, with a continuous drive to learn and build dynamic, user
                            friendly, and efficient web applications. Known for adaptability, problem
                            solving abilities, and a commitment to delivering high-quality solutions. Eager
                            to contribute and grow as a full-stack developer in a challenging, innovative
                            environment
                        </p>
                        <p className="mb-6">
                            Talk about your professional journey, key milestones, and what you've learned along the way.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-2 bg-white/5 rounded-lg">
                                <span className="font-medium">Name:</span> Kavinda Rupasingha
                            </div>
                            <div className="px-4 py-2 bg-white/5 rounded-lg">
                                <span className="font-medium">Email:</span> kavindarupasingha9210@email.com
                            </div>
                            <div className="px-4 py-2 bg-white/5 rounded-lg">
                                <span className="font-medium">From:</span> Kandy
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-medium mb-4">My Education</h3>
                        <div className="space-y-6">
                            <div className="p-6 bg-white/5 rounded-xl border-l-4 border-blue-50">
                                <h4 className="text-xl font-medium mb-2">
                                    Bachelor of Science in Information Technology
                                </h4>
                                <p className="text-sm mb-2">Currently Enrolled • 2022 - Present</p>
                                <p>
                                    Pursuing undergraduate studies in Information Technology, focusing on full-stack web development, software engineering, and emerging technologies.
                                </p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-xl border-l-4 border-blue-50">
                                <h4 className="text-xl font-medium mb-2">
                                    G.C.E. Advanced Level – Technology Stream
                                </h4>
                                <p className="text-sm mb-2">Nugawela Central College • 2018 - 2020</p>
                                <p>
                                    Subjects: ICT (S), SFT (B), ET (S). Gained foundational knowledge in computing, science, and engineering technology.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;