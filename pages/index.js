import Links from "../components/Links";
import Link from "next/link";

export default function Home() {
	return (
		<div className="page">
			<main className="main">
				<h1>Start</h1>
				<Link href="/who">
					<h2>Who &rarr;</h2>
				</Link>
			</main>
		</div>
	);
}
