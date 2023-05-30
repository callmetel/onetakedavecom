import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import React, { useRef } from "react";

const Who = (props) =>
{
	const ref = useRef();
	const pageRef = React.createRef();
	return (
		<div className="page" ref={pageRef} data-page={props.location.state}>
			<main className="main">
				<Title title={props.location.title} />
				<Video {...props} page={pageRef} />
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
			</main>
		</div>
	);
};

export default Who;
