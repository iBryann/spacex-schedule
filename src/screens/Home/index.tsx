import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SmoothProvider } from 'react-smooth-scrolling'

import spacex from "../../api/spacex";
import { ILaunch } from "../../utils/interfaces";

import { Style } from "./style";

export const Home = () => {
    const [launches, setLaunches] = useState<ILaunch[]>([] as ILaunch[]);
    const location = useLocation();

    useEffect(() => {
        spacex.get('/launches/past')
            .then(r => setLaunches(r.data));

        console.log(location.state);
    }, []);

    return (
        <div>
            <Style />

            <SmoothProvider skew={true} ease={0.01}>
                <section>Home 1</section>
                <section>Home 2</section>
                <section>Home 3</section>
                <section>Home 4</section>
            </SmoothProvider>

            {
                // launches.slice(30, 40).map(launch =><LaunchCard launch={launch} key={launch.id} />)
            }

        </div>
    );
};

const LaunchCard = ({ launch }: { launch: ILaunch }) => (
    <div>
        <h2>{launch.name}</h2>
        <h3>{launch.details}</h3>

        <div>
            {launch.links.flickr.original.slice(0, 1).map(link =>
                <img
                    src={link}
                    style={{ width: 300 }}
                    loading="lazy"
                    key={link}
                />
            )}
        </div>
        <hr />
    </div>
);