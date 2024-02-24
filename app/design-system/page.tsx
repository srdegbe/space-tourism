import Link from "next/link";
import React from "react";

export default function DeignSytem() {
  return (
    <div className="container">
      <h1>Design system</h1>
      <section id="colors">
        <h2 className="numbered-title">
          <span>01</span> colors
        </h2>

        <div className="flex">
          <div style={{ flexGrow: 1 }}>
            <div
              className=""
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-accent text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #D0D6F9
            </div>
            <p>
              <span className="text-accent">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-accent">HSL</span> 231°, 77%, 90%
            </p>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-white text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #FFFFFF
            </div>
            <p>
              <span className="text-accent">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-accent">HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>

      <section id="typography" style={{ marginTop: "4rem" }}>
        <h2 className="numbered-title letter-spacing-3 uppercase">
          <span>02</span> typography
        </h2>

        <div className="flex">
          <div className="flow" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 uppercase ff-serif">Earth</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 uppercase ff-serif">Venus</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="fs-700 uppercase ff-serif">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="fs-600 uppercase ff-serif">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-accent">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-accent fs-500 uppercase ff-sans-cond letter-spacing-1">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div className="flow" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="fs-500 uppercase ff-serif">384,400 km</p>
            </div>
            <div>
              <p className="text-accent">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-accent">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">
                Europa
              </p>
            </div>
            <div>
              <p className="text-accent">Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flow"
        id="interactive-element"
        style={{ marginTop: "4rem" }}
      >
        <h2 className="numbered-title">
          <span>03</span> interactive element
        </h2>

        {/* navigation */}
        <div className="">
          <nav className="nav container">
            <ul className="[ primary-navigation underline-indicators ] [ flex ]">
              <li className="active">
                <Link
                  href="#"
                  className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
                >
                  <span>01</span>Active
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
                >
                  <span>02</span>Hovered
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="[  ] [ ff-sans-cond uppercase text-white letter-spacing-2 ]"
                >
                  <span>03</span>Idle
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex">
          <div className="" style={{ marginTop: "5rem" }}>
            {/* explore button */}
            <Link
              href="#"
              className="[ large-button ] [ uppercase ff-serif fs-600 text-dark bg-accent ]"
            >
              Explore
            </Link>
          </div>

          <div
            className="mini-navigations grid"
            style={{ marginBottom: "50vh", flexBasis: "100%" }}
          >
            {/* <!-- Tabs --> */}
            <div className="tab-list underline-indicators flex">
              <button
                aria-selected="true"
                className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
              >
                Moon
              </button>
              <button
                aria-selected="false"
                className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
              >
                Mars
              </button>
              <button
                aria-selected="false"
                className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
              >
                Europa
              </button>
            </div>

            {/* <!-- Dots --> */}
            <div className="dot-indicators margin-top flex">
              <button aria-selected="true" className="">
                <span className="sr-only">slide title</span>
              </button>
              <button aria-selected="false" className="">
                <span className="sr-only">slide title</span>
              </button>
              <button aria-selected="false" className="">
                <span className="sr-only">slide title</span>
              </button>
            </div>

            {/* <!-- Numbers --> */}
            <div className="number-indicators margin-top grid">
              <button aria-selected="true" className="fs-600 ff-serif ">
                <span className="">1</span>
              </button>
              <button
                aria-selected="false"
                className="fs-600 ff-serif text-white bg-dark"
              >
                <span className="">2</span>
              </button>
              <button
                aria-selected="false"
                className="fs-600 ff-serif text-white bg-dark"
              >
                <span className="">3</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
