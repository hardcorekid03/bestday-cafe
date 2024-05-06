import React, { useState, useEffect } from "react";
import "./Menu.css";

const CoffeeMenu = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-5 container">
      <div className="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto  text-center">
          <h1 className="fw-light">Our Menu</h1>
          <p className="lead text-body-secondary"> At Bestday
            Cafe, our menu is a masterpiece of flavors, crafted with passion and
            innovation. From fresh seafood to tender meats and vibrant
            vegetarian options, every dish is a celebration of taste. 
          </p>
        </div>
      </div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {coffees.slice(0, 12).map((coffee) => (
              <div className="col-md-4" key={coffee.id}>
                <div className="card shadow-sm">
                  <img
                    src={coffee.image}
                    className="card-img-top"
                    width="50%"
                    height="50%"
                    alt={coffee.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{coffee.title}</h5>
                    <p className="card-text">{coffee.description}</p>
                    <p className="card-text">Price: Php. 140.00</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;
