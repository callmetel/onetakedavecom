import Links from "../components/Links";
import Link from "next/link";

const How = () => {
	return (
		<div className="page">
			<h1>How</h1>
			<Link href="/">
				<h2>Restart &rarr;</h2>
			</Link>
		</div>
	);
};

export default How;
