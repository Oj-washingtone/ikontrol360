import React from "react";
import "./popular-products.css";

export default function PopularProducts() {
  return (
    <div className="popular-products-wrapper section">
      <div className="container">
        <div className="row">
          <div className="section-header-wrapper">
            <h1 className="sub-title">Latest from Blog</h1>
            <h1 className="title">Explore Our Most Popular Picks</h1>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 ">
                <div className="y_card product">
                  <img src="/images/1.jpg" alt="product" />
                  <div className="product-info">
                    <h1 className="product-title">Lorem ipsum dolor </h1>
                    <p className="product-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <a href="#" className="product-cta-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="y_card product">
                  <img src="/images/2.jpg" alt="product" />
                  <div className="product-info">
                    <h1 className="product-title">Lorem ipsum dolor </h1>
                    <p className="product-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <a href="#" className="product-cta-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="y_card product">
                  <img src="/images/3.jpg" alt="product" />
                  <div className="product-info">
                    <h1 className="product-title">Lorem ipsum dolor </h1>
                    <p className="product-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <a href="#" className="product-cta-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="y_card product">
                  <img src="/images/1.jpg" alt="product" />

                  <div className="product-info">
                    <h1 className="product-title">Lorem ipsum dolor </h1>
                    <p className="product-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <a href="#" className="product-cta-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-wrapper">
              <a href="#" className="view-all-link">
                View all stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
