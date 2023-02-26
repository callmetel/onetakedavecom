import Links from "../components/Links";
import Link from "next/link";

const What = () => {
	return (
		<div className="page">
			<h1>What</h1>
			<Link href="/where">
				<h2>Where &rarr;</h2>
			</Link>
		</div>
	);
};

export default What;
