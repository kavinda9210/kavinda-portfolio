import React, { useState, useEffect } from 'react';
import {
    Brain,
    Clock4,
    Users,
    Lightbulb,
    ClipboardList,
    Workflow,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // adjust path as needed

const technicalSkills = [
    { name: 'HTML5', level: 90, category: 'frontend', color: '#E34F26' },
    { name: 'CSS3', level: 85, category: 'frontend', color: '#1572B6' },
    { name: 'SASS', level: 80, category: 'frontend', color: '#CC6699' },
    { name: 'Tailwind', level: 85, category: 'frontend', color: '#38B2AC' },
    { name: 'Bootstrap', level: 80, category: 'frontend', color: '#7952B3' },
    { name: 'JavaScript', level: 80, category: 'frontend', color: '#F7DF1E' },
    { name: 'TypeScript', level: 70, category: 'frontend', color: '#3178C6' },
    { name: 'ReactJS', level: 75, category: 'frontend', color: '#61DAFB' },
    { name: 'Node.js', level: 70, category: 'backend', color: '#339933' },
    { name: 'PHP', level: 75, category: 'backend', color: '#777BB4' },
    { name: 'Laravel', level: 80, category: 'backend', color: '#FF2D20' },
    { name: 'Python', level: 60, category: 'backend', color: '#3776AB' },
    { name: 'Java', level: 65, category: 'backend', color: '#007396' },
    { name: 'Angular', level: 60, category: 'frontend', color: '#DD0031' },
    { name: 'MySQL', level: 85, category: 'database', color: '#4479A1' },
    { name: 'MongoDB', level: 70, category: 'database', color: '#47A248' },
    { name: 'UI/UX', level: 65, category: 'uiux', color: '#FF6F61' },
    { name: 'Version Control', level: 75, category: 'versionControl', color: '#F05032' },
];

const softSkills = [
    { name: 'Problem Solving', icon: Brain, color: '#3B82F6' }, // blue
    { name: 'Time Management', icon: Clock4, color: '#F59E0B' }, // amber
    { name: 'Teamwork', icon: Users, color: '#10B981' }, // green
    { name: 'Critical Thinking', icon: Lightbulb, color: '#F97316' }, // orange
    { name: 'Project Management', icon: ClipboardList, color: '#8B5CF6' }, // violet
    { name: 'Leadership', icon: Workflow, color: '#EF4444' }, // red
];

// Circular Progress Bar with animation on mount
const CircularProgressBar = ({ value, label, color, theme }) => {
    const radius = 45;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / 60; // 60 frames animation (~1 sec)
        const animate = () => {
            start += increment;
            if (start > value) start = value;
            setProgress(start);
            if (start < value) requestAnimationFrame(animate);
        };
        animate();
    }, [value]);

    const strokeDashoffset =
        circumference - (progress / 100) * circumference;

    const textColor = theme === 'dark' ? '#e0e7ff' : '#1e293b';

    return (
        <div className="flex flex-col items-center select-none">
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke={theme === 'dark' ? '#334155' : '#cbd5e1'}
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke={color}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.3s' }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <div
                className="text-sm mt-2 text-center font-semibold"
                style={{ color: textColor }}
            >
                {label}
                <div
                    className="text-lg font-bold"
                    style={{ color }}
                >
                    {Math.round(progress)}%
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    const { theme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { key: 'all', label: 'All' },
        { key: 'frontend', label: 'Frontend' },
        { key: 'backend', label: 'Backend' },
        { key: 'database', label: 'Database' },
        { key: 'uiux', label: 'UI/UX' },
        { key: 'versionControl', label: 'Version Control' },
    ];

    const filteredTechnicalSkills =
        selectedCategory === 'all'
            ? technicalSkills
            : technicalSkills.filter(skill => skill.category === selectedCategory);

    // Colors for background and text based on theme
    const bgColor = theme === 'dark' ? 'bg-black-500' : 'bg-white';
    const textColor = theme === 'dark' ? 'text-blue-50' : 'text-blue-900';
    const softBg = theme === 'dark' ? 'bg-white/10' : 'bg-blue-100';
    const softText = theme === 'dark' ? 'text-blue-200' : 'text-blue-900';

    return (
        <section id="skills" className={`py-20 ${bgColor} transition-colors duration-500`}>
            <div className="container mx-auto px-4">


                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-blue-50">Skills</span>
                </h2>

                {/* Category Filter */}


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div>
                        <h3 className={`text-2xl font-medium mb-6 ${textColor}`}>
                            Technical Skills
                        </h3>
                        <div className="flex justify-center gap-4 mb-10 flex-wrap">
                            {categories.map(cat => (
                                <button
                                    key={cat.key}
                                    onClick={() => setSelectedCategory(cat.key)}
                                    className={`px-4 py-2 rounded-full font-semibold border-2
                transition-colors duration-300
                ${selectedCategory === cat.key
                                            ? `border-blue-400 bg-blue-400 text-white`
                                            : `border-blue-300 text-blue-400 hover:bg-blue-400 hover:text-white`
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {filteredTechnicalSkills.map(skill => {
                                const color = skill.color;
                                return (
                                    <div
                                        key={skill.name}
                                        className={`rounded-lg p-6 flex flex-col items-center cursor-pointer select-none
                    transition-transform duration-300 ease-in-out
                    hover:scale-110 hover:-translate-y-2`}
                                        style={{
                                            border: `2px solid ${color}`,
                                            color: color,
                                            backgroundColor:
                                                theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                        }}
                                        title={`${skill.name} - ${skill.level}%`}
                                    >
                                        <CircularProgressBar
                                            value={skill.level}
                                            label={skill.name}
                                            theme={theme}
                                            color={color}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div>
                        <h3 className={`text-2xl font-medium mb-6 ${textColor}`}>
                            Professional Skills
                        </h3>
                        <div className="grid grid-cols-2 gap-6">
                            {softSkills.map((skill, index) => {
                                const IconComp = skill.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-lg flex flex-col items-center cursor-pointer
                      select-none transition-transform duration-300
                      bg-white/5
                      ${theme === 'dark' ? 'hover:bg-opacity-50' : 'hover:bg-opacity-30'}
                      hover:scale-110 hover:-translate-y-2`}
                                        title={skill.name}
                                        style={{ color: theme === 'dark' ? skill.color : 'inherit' }}
                                    >
                                        <div
                                            className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                                            style={{
                                                backgroundColor: 'transparent',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                        >
                                            <IconComp
                                                size={30}
                                                style={{
                                                    color: skill.color,
                                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                                }}
                                                className="soft-skill-icon"
                                            />
                                        </div>
                                        <span
                                            className={`text-center font-semibold
                      ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}
                                        >
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
