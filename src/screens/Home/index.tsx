import { useLocation } from "react-router-dom";

import { Container } from "./style";

const Home = () => {
    const location = useLocation();

    console.log(location);

    
    return (
        <Container>Home</Container>
    );
};

export { Home };