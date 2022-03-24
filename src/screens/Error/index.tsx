import { Link, useNavigate, useLocation } from "react-router-dom";

import { URLSearchParams } from "../../utils/utils";
import { Container } from "./style";

const Error = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(URLSearchParams(location));

    function gotoHome() {
        navigate('/', { state: {nome: 'bryann'} })
    }

    return (
        <Container>
            Página inexistente
            
            <br/><br/>

            <button onClick={gotoHome} >
                Volte para a home
            </button>
            
            <br/><br/>

            <Link className="link" to="/">
                Volte para a home
            </Link>
        </Container>
    );
};

export { Error };