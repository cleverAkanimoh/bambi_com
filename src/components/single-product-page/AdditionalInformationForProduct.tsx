import React from "react";
import Image from "next/image";

export default function AdditionalInformationForProduct() {
  return (
    <div className="flex">
      {/* <!-- Single Product Tab Start --> */}
      <div className="">
        <ul className="flex">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              href="#connect-1"
              role="tab"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              href="#connect-2"
              role="tab"
              aria-selected="false"
            >
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              href="#connect-3"
              role="tab"
              aria-selected="false"
            >
              Shipping Policy
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="review-tab"
              data-bs-toggle="tab"
              href="#connect-4"
              role="tab"
              aria-selected="false"
            >
              Size Chart
            </a>
          </li>
        </ul>
        <div className="tab-content mb-text" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="connect-1"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="desc-content p-3">
              <p className="mb-3">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of
                duty or the obligations of business it will frequently occur
                that pleasures have to be repudiated and annoyances accepted.
                The wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to secure other
                greater pleasures, or else he endures pains to avoid worse
                pains.
              </p>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="connect-2"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {/* <!-- Start Single Content --> */}
            <div className="product_tab_content border p-3">
              {/* <!-- Start Single Review --> */}
              <div className="single-review d-flex mb-4">
                {/* <!-- Review Thumb Start --> */}
                <div className="review_thumb">
                  <Image
                    width={100}
                    height={100}
                    alt="review images"
                    src="/assets/images/review/1.jpg"
                  />
                </div>
                {/* <!-- Review Thumb End --> */}

                {/* <!-- Review Details Start --> */}
                <div className="review_details">
                  <div className="review_info mb-2">
                    {/* <!-- Rating Start --> */}
                    <span className="ratings justify-content-start mb-3">
                      <span className="rating-wrap">
                        <span
                          className="star"
                          style={{ width: " 100%" }}
                        ></span>
                      </span>
                      <span className="rating-num">(1)</span>
                    </span>
                    {/* <!-- Rating End --> */}

                    {/* <!-- Review Title & Date Start --> */}
                    <div className="review-title-date d-flex">
                      <h5 className="title">Admin - </h5>
                      <span> January 19, 2022</span>
                    </div>
                    {/* <!-- Review Title & Date End --> */}
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin in viverra ex, vitae vestibulum arcu. Duis
                    sollicitudin metus sed lorem commodo, eu dapibus libero
                    interdum. Morbi convallis viverra erat, et aliquet orci
                    congue vel. Integer in odio enim. Pellentesque in dignissim
                    leo. Vivamus varius ex sit amet quam tincidunt iaculis.
                  </p>
                </div>
                {/* <!-- Review Details End --> */}
              </div>
              {/* <!-- End Single Review --> */}

              {/* <!-- Rating Wrap Start --> */}
              <div className="rating_wrap">
                <h5 className="rating-title mb-2">Add a review </h5>
                <p className="mb-2">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <h6 className="rating-sub-title mb-2">Your Rating</h6>

                {/* <!-- Rating Start --> */}
                <span className="ratings justify-content-start mb-3">
                  <span className="rating-wrap">
                    <span className="star" style={{ width: " 100%" }}></span>
                  </span>
                  <span className="rating-num">(2)</span>
                </span>
                {/* <!-- Rating End --> */}
              </div>
              {/* <!-- Rating Wrap End --> */}

              {/* <!-- Comments ans Replay Start --> */}
              <div className="comments-area comments-reply-area">
                <div className="row">
                  <div className="col-lg-12 col-custom">
                    {/* <!-- Comment form Start --> */}
                    <form action="#" className="comment-form-area">
                      <div className="row comment-input">
                        {/* <!-- Input Name Start --> */}
                        <div className="col-md-6 col-custom comment-form-author mb-3">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input type="text" required name="Name" />
                        </div>
                        {/* <!-- Input Name End --> */}

                        {/* <!-- Input Email Start --> */}
                        <div className="col-md-6 col-custom comment-form-emai mb-3">
                          <label>
                            Email <span className="required">*</span>
                          </label>
                          <input type="text" required name="email" />
                        </div>
                        {/* <!-- Input Email End --> */}
                      </div>
                      {/* <!-- Comment Texarea Start --> */}
                      <div className="comment-form-comment mb-3">
                        <label>Comment</label>
                        <textarea className="comment-notes" required></textarea>
                      </div>
                      {/* <!-- Comment Texarea End --> */}

                      {/* <!-- Comment Submit Button Start --> */}
                      <div className="comment-form-submit">
                        <button className="btn btn-dark btn-hover-primary">
                          Submit
                        </button>
                      </div>
                      {/* <!-- Comment Submit Button End --> */}
                    </form>
                    {/* <!-- Comment form End --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Comments ans Replay End --> */}
            </div>
            {/* <!-- End Single Content --> */}
          </div>
          <div
            className="tab-pane fade"
            id="connect-3"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {/* <!-- Shipping Policy Start --> */}
            <div className="shipping-policy mb-n2 p-3">
              <h4 className="title-3 mb-4">Shipping policy for our store</h4>
              <p className="desc-content mb-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate
              </p>
              <ul className="policy-list mb-2">
                <li>1-2 business days (Typically by end of day)</li>
                <li>
                  <a href="#">30 days money back guaranty</a>
                </li>
                <li>24/7 live support</li>
                <li>odio dignissim qui blandit praesent</li>
                <li>luptatum zzril delenit augue duis dolore</li>
                <li>te feugait nulla facilisi.</li>
              </ul>
              <p className="desc-content mb-2">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim placerat facer possim assum. Typi
                non habent claritatem insitam; est usus legentis in iis qui
                facit eorum
              </p>
              <p className="desc-content mb-2">
                claritatem. Investigationes demonstraverunt lectores legere me
                lius quod ii legunt saepius. Claritas est etiam processus
                dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
                est notare quam littera gothica, quam nunc putamus parum claram,
                anteposuerit litterarum formas humanitatis per
              </p>
              <p className="desc-content mb-2">
                seacula quarta decima et quinta decima. Eodem modo typi, qui
                nunc nobis videntur parum clari, fiant sollemnes in futurum.
              </p>
            </div>
            {/* <!-- Shipping Policy End --> */}
          </div>
          <div
            className="tab-pane fade"
            id="connect-4"
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            <div className="size-tab table-responsive-lg p-3">
              <h4 className="title-3 mb-4">Size Chart</h4>
              <table className="table border mb-0">
                <tbody>
                  <tr>
                    <td className="cun-name">
                      <span>UK</span>
                    </td>
                    <td>18</td>
                    <td>20</td>
                    <td>22</td>
                    <td>24</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td className="cun-name">
                      <span>European</span>
                    </td>
                    <td>46</td>
                    <td>48</td>
                    <td>50</td>
                    <td>52</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td className="cun-name">
                      <span>usa</span>
                    </td>
                    <td>14</td>
                    <td>16</td>
                    <td>18</td>
                    <td>20</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td className="cun-name">
                      <span>Australia</span>
                    </td>
                    <td>28</td>
                    <td>10</td>
                    <td>12</td>
                    <td>14</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td className="cun-name">
                      <span>Canada</span>
                    </td>
                    <td>24</td>
                    <td>18</td>
                    <td>14</td>
                    <td>42</td>
                    <td>36</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Single Product Tab End --> */}
    </div>
  );
}
