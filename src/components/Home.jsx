import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useFBX } from '@react-three/drei';
import * as THREE from 'three';

const Avatar = () => {
    const group = useRef();
    const { scene } = useGLTF('/6842e8ae0b840e845502dfaf.glb');
    const talkingAnimation = useFBX('/Talking.fbx');
    const talkingAnimation1 = useFBX('/Talking_1.fbx');

    useEffect(() => {
        if (!group.current) return;

        const mixer = new THREE.AnimationMixer(group.current);
        const actions = [];

        if (talkingAnimation.animations.length) {
            actions.push(mixer.clipAction(talkingAnimation.animations[0]));
        }
        if (talkingAnimation1.animations.length) {
            actions.push(mixer.clipAction(talkingAnimation1.animations[0]));
        }

        let activeAction = actions[0];
        if (activeAction) activeAction.play();

        const switchAnimation = () => {
            const next = actions[Math.floor(Math.random() * actions.length)];
            if (activeAction !== next) {
                activeAction?.fadeOut(0.5);
                next.reset().fadeIn(0.5).play();
                activeAction = next;
            }
        };

        const interval = setInterval(switchAnimation, 4000 + Math.random() * 4000);
        const clock = new THREE.Clock();
        const animate = () => {
            mixer.update(clock.getDelta());
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            clearInterval(interval);
            mixer.stopAllAction();
        };
    }, [talkingAnimation, talkingAnimation1]);

    return (
        <group ref={group} dispose={null}>
            <primitive
                object={scene}
                scale={[2.2, 2.2, 2.2]}
                position={[0, -1.5, 0]}
                rotation={[0, 0, 0]}
            />
        </group>
    );
};

const AvatarCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div
            className="w-full h-[28rem] md:w-[28rem] md:h-[36rem] relative"
            style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform',
                overflow: 'hidden',
            }}
        >
            <Canvas
                camera={{ position: [0, 2.5, 7], fov: 45 }}
                gl={{ preserveDrawingBuffer: true }}
                style={{ width: '100%', height: '100%' }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[2, 5, 5]} intensity={1.2} />
                <hemisphereLight intensity={0.5} />
                <Suspense fallback={null}>
                    <Avatar />
                </Suspense>
                {!isMobile && (
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={true}
                        maxPolarAngle={Math.PI / 1.9}
                        minPolarAngle={Math.PI / 2.3}
                    />
                )}
            </Canvas>
        </div>
    );
};

const Home = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/KavinadaRupasinghaCV.pdf';
        link.download = 'KavinadaRupasinghaCV.pdf';
        link.click();
    };

    const [displayText, setDisplayText] = useState('');
    const fullText =
        "I'm a dedicated Full Stack Developer skilled in building responsive, scalable web applications using React, Node.js, Laravel, MySQL, and MongoDB. I prioritize clean code, secure APIs, and user experience, consistently delivering high-quality solutions in agile, collaborative development environments.";

    useEffect(() => {
        let i = 0;
        const typingSpeed = 15;
        const typingEffect = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, typingSpeed);
        return () => clearInterval(typingEffect);
    }, []);

    return (
        <section id="home" className="flex-center flex-col pt-20">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-blue-50">Kavinda Rupasingha</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-6">
                        <span className="text-pink-100">Full Stack Developer</span>
                    </h2>
                    <div className="text-lg mb-8 max-w-lg text-justify">
                        <p className="typing-text" style={{ minHeight: '144px' }}>
                            {displayText}
                            <span className="typing-cursor">|</span>
                        </p>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <a href="#contact" className="px-6 py-3 bg-blue-50 text-black-100 rounded-lg font-medium hover:bg-blue-300 transition-colors">
                            Contact Me
                        </a>
                        <a href="#projects" className="px-6 py-3 border border-blue-50 rounded-lg font-medium hover:bg-white/10 transition-colors">
                            View Work
                        </a>
                        <button onClick={handleDownloadCV} className="px-6 py-3 border border-pink-100 text-pink-100 rounded-lg font-medium hover:bg-pink-100/10 transition-colors">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <AvatarCanvas />
                </div>
            </div>
        </section>
    );
};

export default Home;
