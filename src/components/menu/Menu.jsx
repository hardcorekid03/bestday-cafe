import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Menu.css";
import Loader from "../loader/Loader";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CoffeeMenu = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const apiKey = "http://official.evbgroup.biz/wp-json/wp/v2/posts?_embed";

  // Truncate function to limit excerpt length
  const truncateExcerpt = (excerpt, maxLength) => {
    const text = excerpt.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(apiKey)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }
        return response.json();
      })
      .then((data) => {
        setCoffees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load the menu.");
        setLoading(false);
        return (
          <div className="container py-5">
            <Loader />
          </div>
        );
      });
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Modal handlers
  const handleOpenModal = (coffee) => {
    setSelectedCoffee(coffee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCoffee(null);
    setShowModal(false);
  };

  if (loading) {
    return (
      <div
        className="api-loader"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <main>
      <section className="menu-section py-5 container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto text-center">
            <h1 className="fw-light">Our Menu</h1>
            <p className="lead text-body-secondary">
              At Bestday Café, our menu is a masterpiece of flavors, crafted
              with passion and innovation. From fresh seafood to tender meats
              and vibrant vegetarian options, every dish is a celebration of
              taste.
            </p>
          </div>
        </div>
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {coffees.slice(0, 24).map((coffee) => {
              // Get featured image URL
              const featuredImage =
                coffee._embedded &&
                coffee._embedded["wp:featuredmedia"] &&
                coffee._embedded["wp:featuredmedia"][0]?.source_url;

              return (
                <div className="col-md-4" key={coffee.id}>
                  <div className="card shadow-sm">
                    <img
                      src={
                        featuredImage ||
                        "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
                      }
                      className="card-img-top"
                      data-aos="flip-up"
                      width="100%"
                      height="225"
                      alt={coffee.title.rendered}
                    />
                    <div className="card-body" data-aos="fade-up">
                      <h5 className="card-title">{coffee.title.rendered}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <p
                          className="card-text"
                          dangerouslySetInnerHTML={{
                            __html: truncateExcerpt(
                              coffee.excerpt.rendered,
                              50
                            ),
                          }}
                        ></p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            onClick={() => handleOpenModal(coffee)}
                          >
                            More Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for Full Excerpt */}
      {selectedCoffee && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedCoffee.title.rendered} {selectedCoffee.category}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={
                selectedCoffee._embedded &&
                selectedCoffee._embedded["wp:featuredmedia"] &&
                selectedCoffee._embedded["wp:featuredmedia"][0]?.source_url
              }
              alt={selectedCoffee.title.rendered}
              className="img-fluid mb-3"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: selectedCoffee.excerpt.rendered,
              }}
            ></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </main>
  );
};

export default CoffeeMenu;
