import { motion } from "framer-motion";

export const BikeStop = (props) =>
{
    // console.log(props);
    return (
        <div className={`BikeStop ${props.state === props.location ? "active" : ""} ${props.state === props.location && props.width === "100%" ? "stopped" : ""}`} location={props.location}>
            <motion.div className="bar" style={{ "width": props.width }} />
            <span className={`mark ${props.state === props.location ? "active" : ""}`}></span>
            <span className="label">{props.location}</span>
        </div>
    )
}