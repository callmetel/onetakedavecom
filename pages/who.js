import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { BikeRoute } from "/components/BikeRoute";
import React, { useRef, useState } from "react";

const Who = (props) =>
{
	const ref = useRef();
	const pageRef = React.createRef();
	let [route, setRoute] = useState({ "time": 0, "duration": 0 });
	const handleRoute = (routeData) =>
	{
		setRoute(routeData);
		// console.log(routeData);
	}
	const addtlProps = { "page": pageRef, "routeCallback": handleRoute };
	let [isOpen, setState] = useState(false);
	function handleDiscover(data)
	{
		// console.log(data);
		setState(data);
	}

	return (
		<div className="page" ref={pageRef} data-page={props.location.state}>
			<main className="main">
				<Title title={props.location.title} routeChanged={props.routeChanged} />
				<Video {...props} {...addtlProps} />
				<div className="content">
					<Quote {...props.location.quote} />
					<Button
						name={props.location.next}
						link={"/" + props.location.next}
						onClick={() => ref.current.log()}
					/>
					<DiscoverButton click={() => { handleDiscover(true) }} />
				</div>
				<Discover state={props.location.state} routeChanged={props.routeChanged} isOpen={isOpen} discoverCallback={handleDiscover}>
					<div className="DiscoverContent">
						<div className="HeaderImg">

						</div>
						<div className="Headline">Born with DJ Disco Dave as a father,</div>
						<div className="Paragraph"><p>OneTakeDave had exclusive access to classic soul and funk music, as well as a light knowledge of sound blending and electronic mixing equipment. Keeping it all in the family, the senior Dave was exposed to the very beginnings of DJ culture when his mother would travel between Allentown, PA and Philadelphia, breaking all the latest records of the city’s hottest musicians at her house parties. As a precocious and highly observant child, OneTakeDave began to note the mood-changing power of the DJ, and he began to carry on the family tradition and embrace the elements of the lifestyle, eventually wanting to practice DJ’ing stint before focusing his talents on rap.</p></div>
						<div className="FooterImg">
						</div>
					</div>
					<button className="CloseDiscover" onClick={() => { handleDiscover(false) }}>Close</button>
				</Discover>
				<BikeRoute state={props.location.state} time={route.time} duration={route.duration} popstate={props.popstate} clicked={props.routeChanged} />
			</main>
		</div>
	);
};

export default Who;
