import React, { useEffect, useState } from "react";
import "./Home.css";
import "/src/components/css/Fonts.css";
import "/src/scss/coffee.scss";
import smallBg from "./images/sm-bg.jpg";
import mediumBg from "./images/md-bg.jpg";
import largeBg from "./images/bg.jpg";

function Home() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setBackgroundImage(smallBg);
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        setBackgroundImage(mediumBg);
      } else {
        setBackgroundImage(largeBg);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="main-page">
        <div
          className="landing-page bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="content">
            <h1 className="dancing-script-medium coffee" style={{fontSize:'60px'}}>Bestday Café</h1>
            <h1>
              <strong className="mocha"> Make </strong> your day{" "}
              <strong className="mocha">great</strong>
            </h1>
            <h1>
              with our <strong className="mocha">coffee</strong>
            </h1>
            <p className="coffee">
              Indulge in a culinary journey where every dish tells a story.
            </p>
            <button className="btn btn-secondary rounded-0">Book Now!</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;