import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>
        Go back to the <Link href="/">Home</Link>
      </p>
    </div>
  );
}
