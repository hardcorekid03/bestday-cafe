import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Menu.css";
import Loader from "../loader/Loader";

const CoffeeMenu = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const apiKey = import.meta.env.VITE_BACKEND_URL; // Variable for backend

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(apiKey + "api/coffee")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [apiKey]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
        {loading ? (
          <div className="container py-5">
            <Loader/>
          </div>
        ) : (
          <div className="container py-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {coffees.slice(0, 24).map((coffee) => (
                  <div className="col-md-4" key={coffee.id}>
                    <div className="card shadow-sm">
                      <img
                        src={coffee.image}
                        className="card-img-top"
                        data-aos="flip-up"
                        width="100%"
                        height="225"
                        alt={coffee.name}
                      />
                      <div className="card-body" data-aos="fade-up">
                        <h5 className="card-title">{coffee.name}</h5>
                        <p className="card-text">{coffee.description}</p>
                        <p className="card-text">Price: Php. {coffee.price}.00</p>
                        <p className="card-text">Created: {coffee.createdAt}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-secondary">
                              Order Now
                            </button>
                          </div>
                          <small className="text-body-secondary">
                            {coffee.hot_or_cold}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CoffeeMenu;
