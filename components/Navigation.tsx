import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="nav container">
      <ul className="[ primary-navigation underline-indicators ] [ flex ]">
        <li className="active">
          <Link
            href="#"
            className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
          >
            <span>00</span> Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
          >
            <span>01</span> Destination
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
          >
            <span>02</span> Crew
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
          >
            <span>03</span> Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}
