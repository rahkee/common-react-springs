import React, { useState } from 'react';
import { useSpring, useTrail, animated, config } from 'react-spring';

const Trails = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    const arrayOfWords = 'Lorem ipsum dolor sit amet'.split(' ');

    const animProp_button = useSpring({
        backgroundColor: triggerAnimation ? '#de4383' : '#774898',
        config: config.gentle,
    });

    const animProp_onLoadSequence = useTrail(arrayOfWords.length, {
        opacity: triggerAnimation ? 1 : 0,
        transform: `translateX(${triggerAnimation ? '0px' : '-24px'}) `,
        config: { mass: 1, tension: 500, friction: 28 },
    });

    return (
        <main>
            <header>
                <p>Trails</p>
            </header>

            <article>
                <section>
                    <ul>
                        {animProp_onLoadSequence.map((prop, index) => {
                            return (
                                <animated.li style={prop} key={index}>
                                    {arrayOfWords[index]}
                                </animated.li>
                            );
                        })}
                    </ul>
                </section>

                <footer>
                    <animated.button
                        style={animProp_button}
                        onClick={() => {
                            setTriggerAnimation(!triggerAnimation);
                        }}
                    >
                        {triggerAnimation ? 'Hide' : 'Show'}
                    </animated.button>
                </footer>
            </article>
        </main>
    );
};

export default Trails;
