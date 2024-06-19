import React from "react";

export default function NavBanner() {
  return (
    <div className=" bg-secondary">
      <div className="container">
        <div className="row align-items-center">
          {/* <!-- Header Top Message Start --> */}
          <div className="col-12">
            <div className="header-top-msg-wrapper text-center">
              <p className="header-top-message text-center">
                Get 25% off any product from <strong>1st to 31st July</strong>{" "}
                Use Promo Code: LAUNCH SALES{" "}
                <a href="shop.php" className="btn btn-hover-dark btn-secondary">
                  Shop Now
                </a>
              </p>
              <div className="header-top-close-btn">
                <button className="top-close-btn">
                  <i className="pe-7s-close"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Header Top Message End --> */}
        </div>
      </div>
    </div>
  );
}
