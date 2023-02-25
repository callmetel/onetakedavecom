import Link from "next/link";
import { motion } from "framer-motion";

const Links = () => (
  <motion.div className="grid">
    <Link href="/docs">
      <a className="card">
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </Link>

    <Link href="/learn">
      <a className="card">
        <h2>Learn &rarr;</h2>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
    </Link>

    <Link href="/examples">
      <a className="card">
        <h2>Examples &rarr;</h2>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>
    </Link>

    <Link href="/deploy">
      <a className="card">
        <h2>Deploy &rarr;</h2>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
    </Link>
  </motion.div>
);

export default Links;
