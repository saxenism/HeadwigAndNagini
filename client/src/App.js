import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Join from './components/Join/Join'; 
import Chat from './components/Chat/Chat.js';

const App = () => {
    return(
        <HashRouter>
            <Route path = "/" exact component = {Join} />
            <Route path = "/chat"  component = {Chat} />
        </HashRouter>
    );
};

export default App;