import { Style } from "./style";

import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export const Home = () => {

    return (
        <>
            <Style />

            <section className="block-1">
                <div className="block-1__wrapper">
                    <div className="block-1__label">UPCOMING LAUNCH</div>
                    <div className="block-1__title">Ax-1 Mission</div>
                    <div className="block-1__timeout">T- 00:02:13:58</div>
                    <Button onClick={() => alert(123)} text="Learn More" />
                </div>
            </section>

            <section className="block-2">
                <div className="block-2__wrapper">
                    <div className="block-2__quantity">146</div>
                    <div className="block-2__label">TOTAL LAUNCHES</div>
                </div>
                <div className="block-2__wrapper">
                    <div className="block-2__quantity">106</div>
                    <div className="block-2__label">TOTAL LANDINGS</div>
                </div>
                <div className="block-2__wrapper">
                    <div className="block-2__quantity">86</div>
                    <div className="block-2__label">REFLOWN ROCKETS</div>
                </div>
            </section>

            <section className="block-3">
                <div className="goto-down">
                    <a href="">
                        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.59082L11 12.3545L21 1.59082" stroke="white" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>

                <Title>Upcoming<br/>Missions</Title>

                <table>

                </table>
            </section>
        </>
    );
};