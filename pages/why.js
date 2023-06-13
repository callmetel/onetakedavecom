import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { BikeRoute } from "/components/BikeRoute";
import React, { useRef, useState } from "react";

const Why = (props) =>
{
	const ref = useRef();
	const pageRef = React.createRef();
	let [route, setRoute] = useState({ "time": 0, "duration": 0 });
	const handleRoute = (routeData) =>
	{
		setRoute(routeData);
	}
	const addtlProps = { "page": pageRef, "routeCallback": handleRoute };

	return (
		<div className="page" ref={pageRef} data-page={props.location.state}>
			<main className="main">
				<Title title={props.location.title} />
				<Video {...props} {...addtlProps} />
				<div className="content">
					<Quote {...props.location.quote} />
					<Button
						name={props.location.next}
						link={"/" + props.location.next}
						onClick={() => ref.current.log()}
					/>
					<DiscoverButton />
				</div>
				<Discover state={props.location.state} />
				<BikeRoute state={props.location.state} time={route.time} duration={route.duration} popstate={props.popstate} clicked={props.routeChanged} />
			</main>
		</div>
	);
};

export default Why;
