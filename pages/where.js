import Links from "../components/Links";
import Link from "next/link";

const Where = () => {
	return (
		<div className="page">
			<h1>Where</h1>
			<Link href="/when">
				<h2>When &rarr;</h2>
			</Link>
		</div>
	);
};

export default Where;
