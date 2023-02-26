import Links from "../components/Links";
import Link from "next/link";

const When = () => {
	return (
		<div className="page">
			<h1>When</h1>
			<Link href="/why">
				<h2>Why &rarr;</h2>
			</Link>
		</div>
	);
};

export default When;
