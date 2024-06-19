import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function MainNav() {
  return (
    <section className="header-bottom header-wide">
      <div className="header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center position-relative">
            {/* <!-- Header Logo Start --> */}
            <div className="col-md-6 col-lg-3 col-xl-2 col-6">
              <div className="header-logo">
                <Link href="/">
                  <Image
                    src="/assets/images/logo/logo.png"
                    alt="Site Logo"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </div>
            {/* <!-- Header Logo End --> */}

            {/* <!-- Header Menu Start --> */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="main-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="has-children">
                    <a href="#">
                      Home <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.php">Home 1</a>
                      </li>
                      <li>
                        <a href="index-2.php">Home 2</a>
                      </li>
                      <li>
                        <a href="index-3.php">Home 3</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="shop.php">Shop</a>
                  </li>
                  <li className="has-children position-static">
                    <a href="#">
                      Shop <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="mega-menu row">
                      <li className="col-3">
                        <h4 className="mega-menu-title">Shop Layout</h4>
                        <ul className="mb-n2">
                          <li>
                            <a href="shop.php">Shop Grid</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.php">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.php">Right Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-list-fullwidth.php">List Fullwidth</a>
                          </li>
                          <li>
                            <a href="shop-list-left-sidebar.php">
                              List Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right-sidebar.php">
                              List Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-3">
                        <h4 className="mega-menu-title">Product Layout</h4>
                        <ul className="mb-n2">
                          <li>
                            <a href="single-product.php">Single Product</a>
                          </li>
                          <li>
                            <a href="single-product-sale.php">
                              Single Product Sale
                            </a>
                          </li>
                          <li>
                            <a href="single-product-group.php">
                              Single Product Group
                            </a>
                          </li>
                          <li>
                            <a href="single-product-normal.php">
                              Single Product Normal
                            </a>
                          </li>
                          <li>
                            <a href="single-product-affiliate.php">
                              Single Product Affiliate
                            </a>
                          </li>
                          <li>
                            <a href="single-product-slider.php">
                              Single Product Slider
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-3">
                        <h4 className="mega-menu-title">Product Layout</h4>
                        <ul className="mb-n2">
                          <li>
                            <a href="single-product-gallery-left.php">
                              Gallery Left
                            </a>
                          </li>
                          <li>
                            <a href="single-product-gallery-right.php">
                              Gallery Right
                            </a>
                          </li>
                          <li>
                            <a href="single-product-tab-style-left.php">
                              Tab Style Left
                            </a>
                          </li>
                          <li>
                            <a href="single-product-tab-style-right.php">
                              Tab Style Right
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sticky-left.php">
                              Sticky Left
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sticky-right.php">
                              Sticky Right
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-3">
                        <h4 className="mega-menu-title">Other Pages</h4>
                        <ul className="mb-n2">
                          <li>
                            <a href="my-account.php">My Account</a>
                          </li>
                          <li>
                            <a href="login.php">Loging | Register</a>
                          </li>
                          <li>
                            <a href="wishlist.php">Wishlist</a>
                          </li>
                          <li>
                            <a href="cart.php">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.php">Checkout</a>
                          </li>
                          <li>
                            <a href="compare.php">Compare</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="faq.php">FAQ</a>
                  </li>
                  <li className="has-children">
                    <a href="#">
                      Pages <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="about.php">About Us</a>
                      </li>
                      <li>
                        <a href="contact.php">Contact Us</a>
                      </li>
                      <li>
                        <a href="error-404.php">Error 404</a>
                      </li>
                      <li>
                        <a href="faq.php">FAQ</a>
                      </li>
                      <li>
                        <a href="login.php">Login</a>
                      </li>
                      <li>
                        <a href="register.php">Register</a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-children">
                    <a href="#">
                      Blog <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog.php">Blog</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.php">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.php">Blog Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-details.php">Blog Details</a>
                      </li>
                      <li>
                        <a href="blog-details-sidebar.php">
                          Blog Details Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.php">About</a>
                  </li>
                  <li>
                    <a href="contact.php">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Header Menu End --> */}

            {/* <!-- Header Action Start --> */}
            <div className="col-md-6 col-lg-3 col-xl-4 col-6">
              <div className="header-actions header-actions-width">
                {/* <!-- Header Action Left Side Start --> */}
                <div className="header-action-left">
                  {/* <!-- Search bar Start --> */}
                  <form
                    action="#"
                    className="search-bar d-xl-flex d-none position-relative"
                  >
                    <input
                      type="text"
                      placeholder="Search our store"
                      className="search-bar-input"
                    />
                    <button className="search-bar-button">
                      <i className="pe-7s-search"></i>
                    </button>
                  </form>
                  {/* <!-- Search bar Start --> */}
                </div>
                {/* <!-- Header Action Left Side End --> */}

                {/* <!-- Header Action Right Side Start --> */}
                <div className="header-action-right">
                  {/* <!-- Search Action Button Start --> */}
                  <a
                    href="javascript:void(0)"
                    className="header-action-btn header-action-btn-search d-xl-none d-lg-block d-none"
                  >
                    <i className="pe-7s-search"></i>
                  </a>
                  {/* <!-- Search Action Button End --> */}

                  {/* <!-- User Dropdown Start --> */}
                  <div className="dropdown-user d-none d-lg-block">
                    <a href="javascript:void(0)" className="header-action-btn">
                      <i className="pe-7s-user"></i>
                    </a>
                    <ul className="dropdown-menu-user">
                      <li>
                        <a className="dropdown-item" href="#">
                          Usd
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Pound
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Taka
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- User Dropdown End --> */}

                  {/* <!-- Wishlist Action Button Start --> */}
                  <a
                    href="wishlist.php"
                    className="header-action-btn header-action-btn-wishlist"
                  >
                    <i className="pe-7s-like"></i>
                  </a>
                  {/* <!-- Wishlist Action Button End --> */}

                  {/* <!-- Cart Action Button Start --> */}
                  <a
                    href="javascript:void(0)"
                    className="header-action-btn header-action-btn-cart"
                  >
                    <i className="pe-7s-cart"></i>
                    <span className="header-action-num">3</span>
                  </a>
                  {/* <!-- Cart Action Button End --> */}

                  {/* <!-- Mobile Menu Hambarger Action Button Start --> */}
                  <a
                    href="javascript:void(0)"
                    className="header-action-btn header-action-btn-menu d-lg-none d-md-block"
                  >
                    <i className="fa fa-bars"></i>
                  </a>
                  {/* <!-- Mobile Menu Hambarger Action Button End --> */}
                </div>
                {/* <!-- Header Action Right Side End --> */}
              </div>
            </div>
            {/* <!-- Header Action End --> */}
          </div>
        </div>
      </div>
    </section>
  );
}
