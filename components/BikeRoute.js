import { motion } from "framer-motion";
import { BikeStop } from "/components/BikeStop";

export const BikeRoute = (props) =>
{
    console.log("Bike route:");
    const BikeStops = ["who", "what", "where", "when", "why", "how"];
    const currWidth = Math.ceil((props.time / props.duration) * 100) || 0;
    const locationIndex = parseInt(BikeStops.indexOf(props.state));
    const markerWidth = !props.popstate || props.clicked ? Math.ceil(((locationIndex + 1) / 6) * 100) : Math.ceil(((locationIndex / 6) * 100) + (16.667 * (currWidth / 100)));
    console.log(locationIndex);
    console.log(markerWidth);
    console.log(props.clicked);

    return (
        <div className="BikeRoute">
            <motion.div className="RouteMarker" style={{ "width": `${markerWidth}%` }}>
                <motion.img src={`${process.env.assetURL}/img/Dave_Bike_Cycle_medium.gif`} className="DaveMarker" />
            </motion.div>
            {
                BikeStops.map((stop, i) =>
                {
                    console.log(currWidth);
                    if (stop === props.state && props.popstate)
                        var locationWidth = `${currWidth >= 98 ? 100 : currWidth}%`;

                    if (stop === props.state && (!props.popstate || props.clicked))
                        var locationWidth = "100%";

                    if (i < BikeStops.indexOf(props.state))
                        var locationWidth = "100%";

                    if (i > BikeStops.indexOf(props.state))
                        var locationWidth = "0%";

                    return (<BikeStop key={i} state={props.state} location={stop} width={locationWidth} />);
                })
            }
        </div>
    );
};

