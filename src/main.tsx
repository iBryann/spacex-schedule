import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Router } from './screens/Routes';

ReactDOM.render(
    <StrictMode>
        <Router />
    </StrictMode>,
    document.getElementById('root')
);
