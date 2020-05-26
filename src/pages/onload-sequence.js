import React from 'react';
import { useSpring, animated } from 'react-spring';

const OnLoadVisibility = () => {
    const animProp_onLoadSequence = useSpring({
        from: { opacity: 0, transform: `translateY(-24px)` },
        opacity: 1,
        transform: `translateY(0)`,
        delay: 1000,
        config: { mass: 1, tension: 500, friction: 20 },
    });

    return (
        <main>
            <header>
                <p>On Load Sequence</p>
            </header>

            <article>
                <section>
                    <animated.div style={animProp_onLoadSequence}>
                        <h1>Hello World!</h1>
                    </animated.div>
                </section>

                <footer>
                    <span className="pill">On Load</span>
                </footer>
            </article>
        </main>
    );
};

export default OnLoadVisibility;
