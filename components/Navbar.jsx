import Link from "next/link";

export default function Navbar() {

    return (
    <nav>
      <h2>Navbar</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/categorias"> About</Link>
        </li>
      </ul>
    </nav>
  );
}
