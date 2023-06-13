import { motion } from "framer-motion";

export const BikeStop = (props) =>
{
    // console.log(props);
    return (
        <div className="BikeStop" location={props.location}>
            <motion.div className="bar" style={{ "width": props.width }} />
        </div>
    )
}