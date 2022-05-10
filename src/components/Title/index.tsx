import { ReactNode } from 'react';
import { Container } from "./style";


interface IProps {
    children: ReactNode
}

export const Title = ({ children, ...rest }: IProps) => {
    
    return (
        <Container { ...rest }>
            { children }
        </Container>
    );
};