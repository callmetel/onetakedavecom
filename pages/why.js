import Links from "../components/Links";
import Link from "next/link";

const Why = () => {
	return (
		<div className="page">
			<h1>Why</h1>
			<Link href="/how">
				<h2>How &rarr;</h2>
			</Link>
		</div>
	);
};

export default Why;
