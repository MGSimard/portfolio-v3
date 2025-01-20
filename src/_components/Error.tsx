import { Link } from "@tanstack/react-router";

export function Error({ error }: { error: Error }) {
  console.error(error);
  return (
    <main className="not-found">
      <h1>Error</h1>
      <Link to="/" className="link">
        RETURN HOME
      </Link>
    </main>
  );
}
