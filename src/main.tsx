import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Router } from './screens/Routes';
import './styles/geral.scss';

ReactDOM.render(
    <StrictMode>
        <Router />
    </StrictMode>,
    document.getElementById('root')
);

alert(import.meta.env.VITE_SOME_KEY);