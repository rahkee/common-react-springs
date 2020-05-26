import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const ToggleSequence = () => {
    const [toggle, setToggle] = useState(false);

    const animProp_button = useSpring({
        backgroundColor: toggle ? '#de4383' : '#774898',
        config: config.gentle,
    });

    const animProp_toggleSequence = useSpring({
        backgroundColor: toggle ? `#de4383` : `#00a8b5`,
        transform: `translateX(${toggle ? '96px' : '-96px'})`,
        config: { mass: 1, tension: 500, friction: 50 },
    });

    return (
        <main>
            <header>
                <p>Toggle Sequence</p>
            </header>

            <article>
                <section>
                    <animated.div
                        style={animProp_toggleSequence}
                        className="ball"
                    ></animated.div>
                </section>

                <footer>
                    <animated.button
                        style={animProp_button}
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    >
                        {toggle ? '<' : '>'}
                    </animated.button>
                </footer>
            </article>
        </main>
    );
};

export default ToggleSequence;
