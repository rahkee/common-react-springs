import React from 'react';
import { useSpring, animated } from 'react-spring';

const ScriptedSequence = () => {
    const animProp_scriptedSequence = useSpring({
        from: { backgroundColor: '#774898', transform: `translateX(-150px)` },
        to: async (next) => {
            while (true) {
                await next({
                    backgroundColor: '#00a8b5',
                    transform: `translateX(-50px)`,
                });
                await next({
                    backgroundColor: '#de4383',
                    transform: `translateX(50px)`,
                });
                await next({
                    backgroundColor: '#f3ae4b',
                    transform: `translateX(150px)`,
                });
                await next({
                    backgroundColor: '#774898',
                    transform: `translateX(-150px)`,
                });
            }
        },
        config: { mass: 10, tension: 500, friction: 75 },
    });

    return (
        <main>
            <header>
                <p>Scripted Sequence</p>
            </header>

            <article>
                <section>
                    <animated.div
                        style={animProp_scriptedSequence}
                        className="box"
                    ></animated.div>
                </section>

                <footer>
                    <div className="pill">
                        <strong>Scripted</strong>
                        <span>Code Example</span>
                    </div>
                </footer>
            </article>
        </main>
    );
};

export default ScriptedSequence;
