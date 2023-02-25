import Links from "../components/Links";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code className="code">pages/index.js</code>
        </p>
        <Links />
      </main>
    </div>
  );
}
