import { useEffect, useState } from "react";

import spacex from "../../api/spacex";
import { ILaunch } from "../../utils/interfaces";

import { Container } from "./style";

export const Home = () => {
    const [launches, setLaunches] = useState<ILaunch[]>([] as ILaunch[]);

    useEffect(() => {
        spacex.get('/launches/past')
        .then(r => setLaunches(r.data));
    }, []);
    
    return (
        <Container>
            Home

            {
                launches.slice(30, 40).map(launch =><LaunchCard launch={launch} key={launch.id} />)
            }
        </Container>
    );
};

const LaunchCard = ({launch}: {launch: ILaunch}) => (
    <div>
        <h2>{ launch.name }</h2>
        <h3>{ launch.details }</h3>

        <div>
            {launch.links.flickr.original.map(link => 
                <img
                    src={link}
                    style={{width: 300}}
                    loading="lazy"
                    key={link}
                />
            )}
        </div>
        <hr />
    </div>
);