import React from "react";

export default function CtaSection() {
  return (
    <section className="my-10">
      <div className="" data-aos="fade-up" data-aos-delay="200">
        {/* <!-- Section Title Start --> */}
        <div className="section-title text-center">
          <h2 className="title">Promoting screen-free healthy development</h2>
          <h5 className="sub-title mt-2 text-base max-w-sm mx-auto">
            Once upon a time, families played. Today, between screen time and
            homework, free play Otilo.
          </h5>
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="row mb-n6">
        <CtaCard
          heading="Open-ended Play"
          paragraph=" Our products allows children to be creative, experiment with
              different ideas and work through problems independently"
          icon="fa fa-street-view"
        />
        <CtaCard
          heading="Non-digital"
          paragraph="We create screen-free games and storybooks that delight kids,
              spark imagination and create experiences that engage the whole
              family."
          icon="fa fa-desktop"
        />
        <CtaCard
          heading="Environmental Friendly"
          paragraph="Bambi offers high-quality, sustainably made products focused on
              kids and families. We design with safety in mind, free from
              harmful materials."
          icon="fa fa-refresh"
        />
      </div>
    </section>
  );
}

const CtaCard = ({
  icon,
  paragraph,
  heading,
}: {
  icon: string;
  paragraph: string;
  heading: string;
}) => (
  <div
    className="col-12 col-sm-6 col-md-6 col-lg-4"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div className="single-choose-item text-center mb-6">
      <i className={icon}></i>
      <h4 className="cta-title">{heading}</h4>
      <p>{paragraph}</p>
    </div>
  </div>
);
