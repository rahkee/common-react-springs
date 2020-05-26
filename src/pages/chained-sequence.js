import React from 'react';
import { useSpring, animated } from 'react-spring';

const ChainedSequence = () => {
    const animProp_chainedSequence = useSpring({
        from: {
            backgroundColor: '#774898',
            borderRadius: '5px',
            transform: `translateX(-150px)`,
        },
        to: [
            {
                backgroundColor: '#00a8b5',
                borderRadius: '10px',
                transform: `translateX(-50px)`,
            },
            {
                backgroundColor: '#de4383',
                borderRadius: '20px',
                transform: `translateX(50px)`,
            },
            {
                backgroundColor: '#f3ae4b',
                borderRadius: '40px',
                transform: `translateX(150px)`,
            },
            {
                backgroundColor: '#774898',
                borderRadius: '5px',
                transform: `translateX(-150px)`,
            },
        ],
        config: { mass: 1, tension: 500, friction: 50 },
    });

    return (
        <main>
            <header>
                <p>Chained Sequence</p>
            </header>

            <article>
                <section>
                    <animated.div
                        style={animProp_chainedSequence}
                        className="box"
                    ></animated.div>
                </section>

                <footer>
                    <div className="pill">
                        <strong>Chained</strong>
                        <span>Code Example</span>
                    </div>
                </footer>
            </article>
        </main>
    );
};

export default ChainedSequence;
