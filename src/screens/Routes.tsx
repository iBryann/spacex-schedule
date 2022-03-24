import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Error } from "./Error";
import { Header } from "../components/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />

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

export { Router };