import React from 'react';
import OnLoadSequence from './pages/onload-sequence.js';
import ToggleSequence from './pages/toggle-sequence.js';
import NumberCount from './pages/number-count.js';
import ScriptedSequence from './pages/scripted-sequence.js';
import ChainedSequence from './pages/chained-sequence.js';
import Trails from './pages/trails-sequence.js';

import './modern-normalize.css';
import './App.css';

function App() {
    return (
        <>
            <OnLoadSequence />
            <ToggleSequence />
            <NumberCount />
            <Trails />
            <ScriptedSequence />
            <ChainedSequence />
        </>
    );
}

export default App;
