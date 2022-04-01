
import { Link as LinkRouter } from "react-router-dom";

import { Container } from "./style";


interface IProps {
    to: string,
    text: string
}

export const Link = ({ to, text, ...rest }: IProps) => {
    
    return (
        <Container>
            <LinkRouter to={to} {...rest}>
                <div className="hover"></div>
                <div className="text">{text}</div>
            </LinkRouter>
        </Container>
    );
};