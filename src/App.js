import React from 'react';
import OnLoadSpring from './pages/onload-spring.js';
import ToggleSpring from './pages/toggle-spring.js';
import NumberCount from './pages/number-count.js';
import ScriptedSpring from './pages/scripted-spring.js';
import ChainedSpring from './pages/chained-spring.js';
import Trails from './pages/trails-spring.js';
import UseChainSequence from './pages/use-chain-sequence.js';

import './modern-normalize.css';
import './App.css';

function App() {
    return (
        <>
            <UseChainSequence />
            <OnLoadSpring />
            <ToggleSpring />
            <NumberCount />
            <Trails />
            <ScriptedSpring />
            <ChainedSpring />
        </>
    );
}

export default App;
