import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home";

const Router = () => {
    return (
        <BrowserRouter>
            {/* Header fixo ficará aqui */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function Error() {
    return <h2>Erro</h2>;
}

export { Router };