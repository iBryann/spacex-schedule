export interface ILaunchCore {
    core: string,
    flight: number,
    gridfins: boolean,
    legs: boolean,
    reused: boolean,
    landing_attempt: boolean,
    landing_success: null,
    landing_type: null,
    landpad: null
}

export interface ILaunch {
    fairings: {
        reused: boolean,
        recovery_attempt: boolean,
        recovered: boolean,
        ships: []
    },
    links: {
        patch: {
            small: string,
            large: string
        },
        reddit: {
            campaign: null,
            launch: string,
            media: null,
            recovery: null
        },
        flickr: {
            small: string[],
            original: string[]
        },
        presskit: string,
        webcast: string,
        youtube_id: string,
        article: string,
        wikipedia: string
    },
    static_fire_date_utc: string,
    static_fire_date_unix: number,
    net: boolean,
    window: number,
    rocket: string,
    success: boolean,
    failures: [],
    details: string,
    crew: [],
    ships: [],
    capsules: [],
    payloads: string[],
    launchpad: string,
    flight_number: number,
    name: string,
    date_utc: string,
    date_unix: number,
    date_local: string,
    date_precision: string,
    upcoming: boolean,
    cores: ILaunchCore[],
    auto_update: boolean,
    tbd: boolean,
    launch_library_id: null,
    id: string
}