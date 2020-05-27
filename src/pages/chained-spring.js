import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const ChainedSpring = () => {
    const [toggle, setToggle] = useState(false);

    const animProp_button = useSpring({
        backgroundColor: toggle ? '#de4383' : '#774898',
        config: config.gentle,
    });

    const animProp_chainedSpring = useSpring({
        from: {
            backgroundColor: '#774898',
            transform: `translateX(-150px)  rotate(0deg)`,
        },
        to: [
            {
                backgroundColor: '#00a8b5',
                transform: `translateX(-50px) rotate(360deg)`,
            },
            {
                backgroundColor: '#de4383',
                transform: `translateX(50px) rotate(720deg)`,
            },
            {
                backgroundColor: '#f3ae4b',
                transform: `translateX(150px) rotate(1080deg)`,
            },
            {
                backgroundColor: '#774898',
                transform: `translateX(-150px) rotate(0deg)`,
            },
        ],
        config: { mass: 20, tension: 500, friction: 150 },
    });

    return (
        <main>
            <header>
                <p>Chained Spring</p>
            </header>

            <article>
                <section>
                    <animated.div
                        style={animProp_chainedSpring}
                        className="ball"
                    >
                        <div className="ball-hole"></div>
                    </animated.div>
                </section>

                <footer>
                    <animated.button
                        style={animProp_button}
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    >
                        {toggle ? 'Roll' : 'Roll'}
                    </animated.button>
                </footer>
            </article>
        </main>
    );
};

export default ChainedSpring;
