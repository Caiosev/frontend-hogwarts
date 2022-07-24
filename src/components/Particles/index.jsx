import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleElement() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: '#10141B',
                    },
                },
                fpsLimit: 60,
                fullScreen: false,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: false,
                            mode: 'repulse',
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#ffffff',
                    },
                    links: false,
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 50,
                        },
                        value: 2,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: false,
            }}
        />
    );
}
