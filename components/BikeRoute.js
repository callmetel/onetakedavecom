import { useState } from "react";
import { BikeStop } from "/components/BikeStop";

export const BikeRoute = (props) =>
{
    console.log("Bike route:");
    const BikeStops = ["who", "what", "where", "when", "why", "how"];
    const currWidth = Math.ceil((props.time / props.duration) * 100) || 0;
    console.log(BikeStops.indexOf(props.state) > 0);

    return (
        <div className="BikeRoute">
            {BikeStops.map((stop, i) =>
            {
                console.log(currWidth);
                if (stop === props.state && props.popstate)
                    var locationWidth = `${currWidth}%`;

                if (stop === props.state && !props.popstate)
                    var locationWidth = "100%";

                if (i < BikeStops.indexOf(props.state))
                    var locationWidth = "100%";

                if (i > BikeStops.indexOf(props.state))
                    var locationWidth = "0%";

                // let locationWidth = BikeStops.indexOf(props.state) > i || BikeStops.indexOf(props.state) === i && !props.popstate ? "100%" : `${currWidth}%`;
                return (<BikeStop key={i} location={stop} width={locationWidth} />);
            })}
        </div>
    );
};

