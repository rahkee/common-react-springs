import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const NumberCount = () => {
    const [toggle, setToggle] = useState(false);

    const animProp_button = useSpring({
        backgroundColor: toggle ? '#de4383' : '#774898',
        config: config.gentle,
    });

    const animProp_numberCount = useSpring({
        number: toggle ? 1 : 0,
        from: { number: !toggle ? 0 : 1 },
        config: config.molasses,
    });

    return (
        <main>
            <header>
                <p>Number Count</p>
            </header>

            <article>
                <section>
                    <animated.h1>
                        {animProp_numberCount.number.interpolate(
                            (val) => `${val.toFixed(2)}`
                        )}
                    </animated.h1>
                </section>
                <footer>
                    <animated.button
                        style={animProp_button}
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    >
                        {toggle ? '-' : '+'}
                    </animated.button>
                </footer>
            </article>
        </main>
    );
};

export default NumberCount;
