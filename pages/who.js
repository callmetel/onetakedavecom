import Links from "../components/Links";
import Link from "next/link";

const Who = () => {
	return (
		<div className="page">
			<h1>Who</h1>
			<Link href="/what">
				<h2>What &rarr;</h2>
			</Link>
		</div>
	);
};

export default Who;
