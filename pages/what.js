import Links from "../components/Links";
import Video from "../components/Video";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Discover from "../components/Discover";
import { Button, DiscoverButton } from "../components/Buttons";
import { useRef} from "react";

const What = (props) => {
	const ref = useRef();
	return (
		<div className="page">
			<main className="main">
				<Title title={props.location.title} />
				<Video {...props} />
				<div className="content">
					<Quote {...props.location.quote} />
					<Button name={props.location.next} link={"/" + props.location.next} onClick={() => ref.current.log()} />
					<DiscoverButton state={props.location.state} />
				</div>
				<Discover state={props.location.state} />
			</main>
		</div>
	);
};

export default What;
