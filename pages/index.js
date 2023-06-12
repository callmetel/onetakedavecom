import Links from "../components/Links";
import Video from "../components/Video";
import { Quote, QuoteAlt } from "../components/Quote";
import { Button, DiscoverButton } from "../components/Buttons";
import React, { useRef, useState, useEffect } from "react";

export default function Home(props)
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
		<div className="page" ref={pageRef}>
			<main className="main">
				<Video {...props}{...addtlProps} />
				<div className="content">
					<QuoteAlt {...props.location.quote} />
					<Button classes="start fadeInLeft" name="Start" link={"/" + props.location.next} onClick={() => ref.current.log()} />
				</div>
			</main>
		</div>
	);
}
