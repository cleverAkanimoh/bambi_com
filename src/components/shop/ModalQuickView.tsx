import Image from "next/image";
import React from "react";

export default function ModalQuickView() {
  return (
    <div
      className="modalquickview modal fade"
      id="quick-view"
      tab-index="-1"
      aria-labelledby="quick-view"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button className="btn close" data-bs-dismiss="modal">
            ×
          </button>
          <div className="row">
            <div className="col-md-6 col-12">
              {/* <!-- Product Details Image Start --> */}
              <div className="modal-product-carousel">
                {/* <!-- Single Product Image Start --> */}
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <a className="swiper-slide" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="/assets/images/products/large-product/1.jpg"
                        alt="Product"
                      />
                    </a>
                    <a className="swiper-slide" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="w-96"
                        src="/assets/images/products/large-product/2.jpg"
                        alt="Product"
                      />
                    </a>
                    <a className="swiper-slide" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="/assets/images/products/large-product/3.jpg"
                        alt="Product"
                      />
                    </a>
                    <a className="swiper-slide" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="/assets/images/products/large-product/4.jpg"
                        alt="Product"
                      />
                    </a>
                    <a className="swiper-slide" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="/assets/images/products/large-product/5.jpg"
                        alt="Product"
                      />
                    </a>
                  </div>

                  {/* <!-- Swiper Pagination Start --> */}
                  <div className="swiper-pagination d-md-none"></div>
                  {/* <!-- Swiper Pagination End --> */}

                  {/* <!-- Next Previous Button Start --> */}
                  <div className="swiper-product-button-next swiper-button-next">
                    <i className="pe-7s-angle-right"></i>
                  </div>
                  <div className="swiper-product-button-prev swiper-button-prev">
                    <i className="pe-7s-angle-left"></i>
                  </div>
                  {/* <!-- Next Previous Button End --> */}
                </div>
                {/* <!-- Single Product Image End --> */}
              </div>
              {/* <!-- Product Details Image End --> */}
            </div>
            <div className="col-md-6 col-12 overflow-hidden position-relative">
              {/* <!-- Product Summery Start --> */}
              <div className="product-summery position-relative">
                {/* <!-- Product Head Start --> */}
                <div className="product-head mb-3">
                  <h2 className="product-title">Sample product title</h2>
                </div>
                {/* <!-- Product Head End --> */}

                {/* <!-- Rating Start --> */}
                <span className="ratings justify-content-start mb-2">
                  <span className="rating-wrap">
                    <span className="star w-full"></span>
                  </span>
                  <span className="rating-num">(4)</span>
                </span>
                {/* <!-- Rating End --> */}

                {/* <!-- Price Box Start --> */}
                <div className="price-box mb-2">
                  <span className="regular-price">$80.00</span>
                  <span className="old-price">
                    <del>$90.00</del>
                  </span>
                </div>
                {/* <!-- Price Box End --> */}

                {/* <!-- Description Start --> */}
                <p className="desc-content mb-5">
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>
                {/* <!-- Description End --> */}

                {/* <!-- Quantity Start --> */}
                <div className="quantity d-flex align-items-center mb-5">
                  <span className="me-2">
                    <strong>Qty: </strong>
                  </span>
                  <div className="cart-plus-minus">
                    <input
                      className="cart-plus-minus-box"
                      value="1"
                      type="text"
                    />
                    <div className="dec qtybutton"></div>
                    <div className="inc qtybutton"></div>
                  </div>
                </div>
                {/* <!-- Quantity End --> */}

                {/* <!-- Cart Button Start --> */}
                <div className="cart-btn mb-4">
                  <div className="add-to_cart">
                    <a
                      className="btn btn-dark btn-hover-primary"
                      href="cart.php"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
                {/* <!-- Cart Button End --> */}

                {/* <!-- Action Button Start --> */}
                <div className="actions border-bottom mb-4 pb-4">
                  <a
                    href="compare.php"
                    title="Compare"
                    className="action compare"
                  >
                    <i className="pe-7s-refresh-2"></i> Compare
                  </a>
                  <a
                    href="wishlist.php"
                    title="Wishlist"
                    className="action wishlist"
                  >
                    <i className="pe-7s-like"></i> Wishlist
                  </a>
                </div>
                {/* <!-- Action Button End --> */}

                {/* <!-- Social Shear Start --> */}
                <div className="social-share">
                  <span>
                    <strong>Social: </strong>
                  </span>
                  <a href="#" className="facebook-color">
                    <i className="fa fa-facebook"></i> Like
                  </a>
                  <a href="#" className="twitter-color">
                    <i className="fa fa-twitter"></i> Tweet
                  </a>
                  <a href="#" className="pinterest-color">
                    <i className="fa fa-pinterest"></i> Save
                  </a>
                </div>
                {/* <!-- Social Shear End --> */}

                {/* <!-- Payment Option Start --> */}
                <div className="payment-option mt-4 d-flex">
                  <span>
                    <strong>Payment: </strong>
                  </span>
                  <a href="#">
                    <Image
                      width={100}
                      height={100}
                      className="fit-image ms-1"
                      src="/assets/images/payment/payment.png"
                      alt="Payment Option Image"
                    />
                  </a>
                </div>
                {/* <!-- Payment Option End --> */}

                {/* <!-- Product Delivery Policy Start --> */}
                <ul className="product-delivery-policy border-top pt-4 mt-4 border-bottom pb-4">
                  <li>
                    {" "}
                    <i className="fa fa-check-square"></i>{" "}
                    <span>
                      Security Policy (Edit With Customer Reassurance Module)
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-truck"></i>
                    <span>
                      Delivery Policy (Edit With Customer Reassurance Module)
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-refresh"></i>
                    <span>
                      Return Policy (Edit With Customer Reassurance Module)
                    </span>
                  </li>
                </ul>
                {/* <!-- Product Delivery Policy End --> */}
              </div>
              {/* <!-- Product Summery End --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
