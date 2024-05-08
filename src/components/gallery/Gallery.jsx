import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";

function Gallery() {
  return (
    <section className="container py-5">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto  text-center">
          <h1 className="fw-light">Where everyday is the best day!</h1>
          <p className="lead text-body-secondary">
            {" "}
            Capture glimpses of cozy corners adorned with plush seating, bathed
            in soft, inviting lighting that creates the perfect ambiance for
            heartfelt conversations or quiet moments of solitude.
          </p>
        </div>
      </div>

      <div className="container py-5 overflow-hidden">
        <div className="row gy-3 gy-md-2 bsb-project-1-grid">
          <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={img1}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">
                  Charming Concept
                </h3>
                <div className="text-white bsb-hover-fadeInRight">
                  Photography
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-md-6 col-lg-6 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale bsb-hover-scale-up"
                  loading="lazy"
                  src={img2}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInUp">
                  Linear Architecture
                </h3>
                <div className="text-white bsb-hover-fadeInDown">
                  Inspiration
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={img3}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">
                  Endless Looks
                </h3>
                <div className="text-white bsb-hover-fadeInRight">Nature</div>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={img4}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">
                  Sleek Typography
                </h3>
                <div className="text-white bsb-hover-fadeInRight">Design</div>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={img5}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">
                  Ebony Vintage
                </h3>
                <div className="text-white bsb-hover-fadeInRight">Fashion</div>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={img6}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">
                  Orange Shine
                </h3>
                <div className="text-white bsb-hover-fadeInRight">Food</div>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={img7}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">
                  Boat Adventure
                </h3>
                <div className="text-white bsb-hover-fadeInRight">Health</div>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={img8}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">
                  Offroad Moves
                </h3>
                <div className="text-white bsb-hover-fadeInRight">Nature</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
            <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={img9}
                  alt=""
                />
              </a>
              <figcaption>
                <h3 className="text-white bsb-hover-fadeInLeft">
                  Cozy Occupancy
                </h3>
                <div className="text-white bsb-hover-fadeInRight">Design</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
