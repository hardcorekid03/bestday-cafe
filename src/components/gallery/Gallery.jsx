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
    <main>
      <section className="container py-5">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto text-center">
            <h1 className="fw-light">Brewing Joy, One Cup at a Time!</h1>
            <p className="lead text-body-secondary">
              Discover the art of coffee through captivating visuals.
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
                    alt="Espresso Bliss"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Espresso Bliss
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">Classic</div>
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
                    alt="Latte Artistry"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInUp">
                    Latte Artistry
                  </h3>
                  <div className="text-white bsb-hover-fadeInDown">
                    Creativity
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
                    alt="Rustic Roast"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Rustic Roast
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
                    alt="Brewed Elegance"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Brewed Elegance
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
                    alt="Vintage Aroma"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Vintage Aroma
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">Heritage</div>
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
                    alt="Citrus Brew"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Citrus Brew
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">Flavors</div>
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
                    alt="Seaside Brew"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Seaside Brew
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">Relaxation</div>
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
                    alt="Wild Bean"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Wild Bean
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">Adventure</div>
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
                    alt="Cozy Cafe"
                  />
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Cozy Cafe
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">Ambiance</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
