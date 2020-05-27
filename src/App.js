import React from 'react';
import OnLoadSpring from './pages/onload-sequence.js';
import ToggleSpring from './pages/toggle-sequence.js';
import NumberCount from './pages/number-count.js';
import ScriptedSpring from './pages/scripted-sequence.js';
import ChainedSpring from './pages/chained-sequence.js';
import Trails from './pages/trails-sequence.js';

import './modern-normalize.css';
import './App.css';

function App() {
    return (
        <>
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
