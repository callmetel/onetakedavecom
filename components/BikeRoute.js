import { useState } from "react";
import { BikeStop } from "/components/BikeStop";

export const BikeRoute = (props) =>
{
    console.log(props);
    const BikeStops = ["who", "what", "where", "when", "why", "how"];
    const currWidth = `${Math.ceil((props.time / props.duration) * 100)}%`;

    let locationWidth = "0%";
    switch (props.state)
    {
        case "who":
            locationWidth = BikeStops.indexOf(props.state) > 0 ? "100%" : currWidth;
            break;
        case "what":
            locationWidth = BikeStops.indexOf(props.state) > 1 ? "100%" : currWidth;
            break;
        case "where":
            locationWidth = BikeStops.indexOf(props.state) > 2 ? "100%" : currWidth;
            break;
        case "when":
            locationWidth = BikeStops.indexOf(props.state) > 3 ? "100%" : currWidth;
            break;
        case "why":
            locationWidth = BikeStops.indexOf(props.state) > 4 ? "100%" : currWidth;
            break;
        case "how":
            locationWidth = BikeStops.indexOf(props.state) > 5 ? "100%" : currWidth;
            break;
    }



    return (
        <div className="BikeRoute">
            {BikeStops.map((stop, i) =>
            {
                return (<BikeStop key={i} location={stop} width={locationWidth} />);
            })}
        </div>
    );
};

