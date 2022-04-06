
import { ButtonHTMLAttributes } from "react";
import { Container } from "./style";


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export const Link = ({ text, ...rest }: IProps) => {
    
    return (
        <Container>
            <button {...rest}>
                <div className="hover"></div>
                <div className="text">{text}</div>
            </button>
        </Container>
    );
};