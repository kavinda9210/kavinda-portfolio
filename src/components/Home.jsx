import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useGLTF, useFBX } from '@react-three/drei';

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
                position={[0, -1.5, 0]}
                rotation={[0, 0, 0]}
            />
        </group>
    );
};

const AvatarCanvas = () => {
    const canvasRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

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
            className="w-[28rem] h-[36rem] relative"
            style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform',
            }}
        >
            <Canvas
                camera={{ position: [0, 2.5, 7], fov: 45 }}
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

                {!isMobile && (
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 1.9}
                        minPolarAngle={Math.PI / 2.3}
                        enableRotate={true}
                    />
                )}
            </Canvas>
        </div>
    );
};

export default AvatarCanvas;
