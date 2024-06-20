import React from "react";
import "./Blogs.css";

function Blogs() {
  return (
    <>

      <section className="container py-5">
        <div className="container py-5 overflow-hidden">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <h2>Write</h2>
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-preview">
                <h2 className="post-title mocha">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
                <p className="post-meta">
                  Posted by <span className="mocha">Start Bootstrap</span>{" "}
                  <span className="">on September 24, 2023</span>{" "}
                </p>
              </div>

              <hr className="my-4" />

              <div className="d-flex justify-content-end mb-4">
                <a className="btn btn-primary text-uppercase " href="#!">
                  Older Posts →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
