import React, { useRef, useEffect, useState } from 'react';
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
        let actions = [];
        let activeAction;
        let lastAction;

        if (talkingAnimation.animations.length) {
            const action = mixer.clipAction(talkingAnimation.animations[0]);
            action.loop = THREE.LoopRepeat;
            actions.push(action);
        }

        if (talkingAnimation1.animations.length) {
            const action = mixer.clipAction(talkingAnimation1.animations[0]);
            action.loop = THREE.LoopRepeat;
            actions.push(action);
        }

        const switchAnimation = () => {
            if (actions.length === 0) return;

            lastAction = activeAction;

            let nextAction;
            if (actions.length > 1) {
                const otherActions = actions.filter(a => a !== activeAction);
                nextAction = otherActions[Math.floor(Math.random() * otherActions.length)];
            } else {
                nextAction = actions[0];
            }

            activeAction = nextAction;

            if (lastAction) {
                lastAction.fadeOut(0.5);
            }
            activeAction.reset().fadeIn(0.5).play();
        };

        if (actions.length > 0) {
            activeAction = actions[0];
            activeAction.play();
        }

        const interval = setInterval(switchAnimation, 5000 + Math.random() * 5000);

        const clock = new THREE.Clock();
        const animate = () => {
            const delta = clock.getDelta();
            mixer.update(delta);
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
                position={[0, -1.5, 0]} // Adjusted to center vertically
                rotation={[0, 0, 0]}
            />
        </group>
    );
};

const AvatarCanvas = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (canvasRef.current) {
                canvasRef.current.style.transform = 'translate3d(0,0,0)';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={canvasRef}
            className="w-[28rem] h-[36rem] relative" // increased height from 28rem to 36rem
            style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform',
            }}
        >
            <Canvas
                camera={{ position: [0, 2.5, 7], fov: 45 }} // pulled back camera slightly
                gl={{ preserveDrawingBuffer: true, antialias: true }}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[2, 5, 5]} intensity={1.2} />
                <directionalLight position={[-2, 3, 3]} intensity={0.6} />
                <hemisphereLight groundColor="#404040" color="#a0a0a0" intensity={0.5} />

                <Avatar />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 1.9}
                    minPolarAngle={Math.PI / 2.3}
                    enableRotate={true}
                />
            </Canvas>
        </div>
    );
};

const Home = () => {
    const handleDownloadCV = () => {
        const cvUrl = '/KavinadaRupasinghaCV.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'KavinadaRupasinghaCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [displayText, setDisplayText] = useState('');
    const fullText = "I'm a dedicated Full Stack Developer skilled in building responsive, scalable web applications using React, Node.js, Laravel, MySQL, and MongoDB. I prioritize clean code, secure APIs, and user experience, consistently delivering high-quality solutions in agile, collaborative development environments.";

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
                <div className="md:w-1/2 flex-center">
                    <AvatarCanvas />
                </div>
            </div>
        </section>
    );
};

export default Home;
