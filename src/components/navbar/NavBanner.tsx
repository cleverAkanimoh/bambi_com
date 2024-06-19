"use client";

import Link from "next/link";
import React from "react";

export default function NavBanner() {
  const [showBanner, setShowBanner] = React.useState(true);
  return (
    <>
      {showBanner && (
        <div className=" bg-secondary p-2">
          <div className="container">
            <div className="row align-items-center">
              {/* <!-- Header Top Message Start --> */}
              <div className="col-12">
                <div className="header-top-msg-wrapper text-center">
                  <p className="header-top-message text-center w-10/12">
                    Get 25% off any product from{" "}
                    <strong>1st to 31st July</strong> Use Promo Code: LAUNCH
                    SALES{" "}
                    <Link
                      href="/shop"
                      className="btn btn-hover-dark btn-secondary"
                    >
                      Shop Now
                    </Link>
                  </p>
                  <div className="header-top-close-btn">
                    <button
                      className="top-close-btn"
                      onClick={() => setShowBanner(false)}
                    >
                      <i className="pe-7s-close"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Header Top Message End --> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
