import Link from "next/link";
import React from "react";

export default function Breadcrumbs({
  array,
  active,
}: {
  array?: { title: string; href: string }[];
  active: string;
}) {
  return (
    <section className="section">
      {/* <!-- Breadcrumb Area Start --> */}
      <div className="breadcrumb-area bg-primary">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <Link href="/" className="text-lg">
                  <i className="fa fa-home"></i>
                </Link>
              </li>
              {array &&
                array?.map(({ title, href }, index) => (
                  <Link href={href} key={index}>
                    {title}
                  </Link>
                ))}
              <li className="active"> {active}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb Area End --> */}
    </section>
  );
}
