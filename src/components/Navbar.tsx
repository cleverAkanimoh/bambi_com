import React from "react";
import NavBanner from "./navbar/NavBanner";
import MainNav from "./navbar/MainNav";

export default function Navbar() {
  return (
    <nav className="header">
      {/* <!-- Header Section Start --> */}

      {/* <!-- Header Top Start --> */}
      <NavBanner />
      {/* <!-- Header Top End --> */}

      {/* <!-- Header Bottom Start --> */}
      <MainNav />
      {/* <!-- Header Bottom End --> */}

      {/* <!-- Offcanvas Search Start --> */}
      <div className="offcanvas-search">
        <div className="offcanvas-search-inner">
          {/* <!-- Button Close Start --> */}
          <div className="offcanvas-btn-close">
            <i className="pe-7s-close"></i>
          </div>
          {/* <!-- Button Close End --> */}

          {/* <!-- Offcanvas Search Form Start --> */}
          <form className="offcanvas-search-form" action="#">
            <input
              type="text"
              placeholder="Search Product..."
              className="offcanvas-search-input"
            />
          </form>
          {/* <!-- Offcanvas Search Form End --> */}
        </div>
      </div>
      {/* <!-- Offcanvas Search End --> */}

      {/* <!-- Cart Offcanvas Start --> */}
      <div className="cart-offcanvas-wrapper">
        <div className="offcanvas-overlay"></div>

        {/* <!-- Cart Offcanvas Inner Start --> */}
        <div className="cart-offcanvas-inner">
          {/* <!-- Button Close Start --> */}
          <div className="offcanvas-btn-close">
            <i className="pe-7s-close"></i>
          </div>
          {/* <!-- Button Close End --> */}

          {/* <!-- Offcanvas Cart Content Start --> */}
          <div className="offcanvas-cart-content">
            {/* <!-- Cart Product/Price Start --> */}
            <div className="cart-product-wrapper mb-4 pb-4 border-bottom">
              {/* <!-- Single Cart Product Start --> */}
              <div className="single-cart-product">
                <div className="cart-product-thumb">
                  <a href="single-product.php">
                    <img
                      src="assets/images/products/small-product/1.jpg"
                      alt="Cart Product"
                    />
                  </a>
                </div>
                <div className="cart-product-content">
                  <h3 className="title">
                    <a href="single-product.php">New badge product</a>
                  </h3>
                  <div className="product-quty-price">
                    <span className="cart-quantity">
                      3 <strong> × </strong>
                    </span>
                    <span className="price">
                      <span className="new">$70.00</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Single Cart Product End --> */}

              {/* <!-- Product Remove Start --> */}
              <div className="cart-product-remove">
                <a href="#">
                  <i className="pe-7s-close"></i>
                </a>
              </div>
              {/* <!-- Product Remove End --> */}
            </div>
            {/* <!-- Cart Product/Price End --> */}

            {/* <!-- Cart Product/Price Start --> */}
            <div className="cart-product-wrapper mb-4 pb-4 border-bottom">
              {/* <!-- Single Cart Product Start --> */}
              <div className="single-cart-product">
                <div className="cart-product-thumb">
                  <a href="single-product.php">
                    <img
                      src="assets/images/products/small-product/2.jpg"
                      alt="Cart Product"
                    />
                  </a>
                </div>
                <div className="cart-product-content">
                  <h3 className="title">
                    <a href="single-product.php">Soldout new product</a>
                  </h3>
                  <div className="product-quty-price">
                    <span className="cart-quantity">
                      4 <strong> × </strong>
                    </span>
                    <span className="price">
                      <span className="new">$80.00</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Single Cart Product End --> */}

              {/* <!-- Product Remove Start --> */}
              <div className="cart-product-remove">
                <a href="#">
                  <i className="pe-7s-close"></i>
                </a>
              </div>
              {/* <!-- Product Remove End --> */}
            </div>
            {/* <!-- Cart Product/Price End --> */}

            {/* <!-- Cart Product/Price Start --> */}
            <div className="cart-product-wrapper mb-4 pb-4 border-bottom">
              {/* <!-- Single Cart Product Start --> */}
              <div className="single-cart-product">
                <div className="cart-product-thumb">
                  <a href="single-product.php">
                    <img
                      src="assets/images/products/small-product/1.jpg"
                      alt="Cart Product"
                    />
                  </a>
                </div>
                <div className="cart-product-content">
                  <h3 className="title">
                    <a href="single-product.php">New badge product</a>
                  </h3>
                  <div className="product-quty-price">
                    <span className="cart-quantity">
                      2 <strong> × </strong>
                    </span>
                    <span className="price">
                      <span className="new">$50.00</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Single Cart Product End --> */}

              {/* <!-- Product Remove Start --> */}
              <div className="cart-product-remove">
                <a href="#">
                  <i className="pe-7s-close"></i>
                </a>
              </div>
              {/* <!-- Product Remove End --> */}
            </div>
            {/* <!-- Cart Product/Price End --> */}

            {/* <!-- Cart Product Total Start --> */}
            <div className="cart-product-total mb-4 pb-4 border-bottom">
              <span className="value">Total</span>
              <span className="price">220$</span>
            </div>
            {/* <!-- Cart Product Total End --> */}

            {/* <!-- Cart Product Button Start --> */}
            <div className="cart-product-btn mt-4">
              <a
                href="cart.php"
                className="btn btn-light btn-hover-primary w-100"
              >
                <i className="fa fa-shopping-cart"></i> View cart
              </a>
              <a
                href="checkout.php"
                className="btn btn-light btn-hover-primary w-100 mt-4"
              >
                <i className="fa fa-share"></i> Checkout
              </a>
            </div>
            {/* <!-- Cart Product Button End --> */}
          </div>
          {/* <!-- Offcanvas Cart Content End --> */}
        </div>
        {/* <!-- Cart Offcanvas Inner End --> */}
      </div>
      {/* <!-- Cart Offcanvas End --> */}

      {/* <!-- Header Section End --> */}
    </nav>
  );
}
