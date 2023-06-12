import { motion } from "framer-motion";

export const BikeStop = (props) =>
{
    return (
        <div className="BikeStop" location={props.location}>
            <motion.div initial={{ width: props.width }} />
        </div>
    )
}