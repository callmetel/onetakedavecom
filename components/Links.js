import Link from "next/link";
import { motion } from "framer-motion";

const Links = () => (
  <motion.div className="grid">
    <Link href="/docs">
      <span className="card">
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </span>
    </Link>

    <Link href="/learn">
      <span className="card">
        <h2>Learn &rarr;</h2>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </span>
    </Link>

    <Link href="/examples">
      <span className="card">
        <h2>Examples &rarr;</h2>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </span>
    </Link>

    <Link href="/deploy">
      <span className="card">
        <h2>Deploy &rarr;</h2>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </span>
    </Link>
  </motion.div>
);

export default Links;
