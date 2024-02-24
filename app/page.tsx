import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="primary-header flex">
        <div>
          {/* <img src="../public/assets/shared/logo.svg" alt="" /> */}
          <Image className="logo" src={""} alt={""} width={75} height={75} />
        </div>
        {/* C:\Users\GAMING WORKSTATION\Desktop\Workspace\Practice\Frontend Mentor\Intermediate\space-tourism-website\public\assets\shared\logo.svg */}
        <nav className="nav container">
          <ul className="[ primary-navigation underline-indicators ] [ flex ]">
            <li className="active">
              <Link
                href="#"
                className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
              >
                <span>00</span>Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
              >
                <span>01</span>Destination
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
              >
                <span>02</span>Crew
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
              >
                <span>03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="grid-container">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to <br />
            <span className="fs-900 ff-serif text-white">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link
            href="#"
            className="[ large-button ] [ uppercase ff-serif fs-600 text-dark bg-accent ]"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
