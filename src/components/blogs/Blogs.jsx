import React from "react";
import "./Blogs.css";
import img10 from "../gallery/images/img10.jpg";

function Blogs() {
  return (
    <main>
      <section className="container py-5">
        <div className="row justify-content-center py-lg-5">
          <div className="col-lg-6 col-md-8 text-center">
            <h1 className="fw-light">About BestDay Café</h1>
            <p className="lead text-body-secondary">
              Where every day is your best day with a cup of coffee!
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="about-image text-center">
              <img src={img10} alt="BestDay Café" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                BestDay Café was founded with a simple mission: to bring joy to
                our community one cup of coffee at a time. We believe in the
                power of a great cup of coffee to make your day brighter and
                more productive.
              </p>
              <h2>Our Coffee</h2>
              <p>
                We source our beans from the finest coffee-growing regions
                around the world. Each batch is roasted to perfection to ensure
                a rich, full-bodied flavor that you’ll love.
              </p>
              <h2>Our Community</h2>
              <p>
                At BestDay Café, we are more than just a coffee shop. We are a
                place where friends meet, ideas are born, and memories are made.
                We are proud to be a part of our local community and strive to
                create a welcoming environment for everyone.
              </p>
              <h2>Visit Us</h2>
              <p>
                Whether you’re stopping by for your morning coffee, meeting
                friends for lunch, or looking for a cozy spot to work, we look
                forward to welcoming you to BestDay Café.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Blogs;
