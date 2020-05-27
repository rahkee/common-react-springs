import React, { useState, useRef } from 'react';
import { useSpring, useChain, animated, config } from 'react-spring';

const UseChainSequence = () => {
    const [toggle, setToggle] = useState(false);

    const animProp_button = useSpring({
        backgroundColor: toggle ? '#de4383' : '#774898',
        config: config.gentle,
    });

    const containerRef = useRef();
    const animProp_container = useSpring({
        from: { transform: `scale(0.8, 0.8)` },
        to: { transform: `scale(${toggle ? '1, 1' : '0.8, 0.8'})` },
        ref: containerRef,
    });

    const textRef = useRef();
    const animProp_text = useSpring({
        from: { color: '#de4383' },
        to: {
            color: !toggle ? '#de4383' : '#774898',
        },
        ref: textRef,
    });

    useChain(toggle ? [containerRef, textRef] : [textRef, containerRef]);

    return (
        <main>
            <header>
                <p>Chained Sequence</p>
                <code>useChain</code>
            </header>

            <article>
                <section>
                    <animated.div
                        style={animProp_container}
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    >
                        <animated.h1 style={animProp_text}>Hi!</animated.h1>
                    </animated.div>
                </section>

                <footer>
                    <animated.button
                        style={animProp_button}
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    >
                        {toggle ? 'Stop' : 'Start'}
                    </animated.button>
                </footer>
            </article>
        </main>
    );
};

export default UseChainSequence;
