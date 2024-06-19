import Link from "next/link";
import React from "react";

export default function UserDropdown() {
  return (
    <div className="dropdown-user d-none d-lg-block">
      <button className="header-action-btn">
        <i className="pe-7s-user"></i>
      </button>
      <ul className="dropdown-menu-user">
        <UserDropdownLi title="Usd" href="" />
        <UserDropdownLi title="Taka" href="" />
        <UserDropdownLi title="Euro" href="" />
      </ul>
    </div>
  );
}

const UserDropdownLi = ({ title, href }: { title: string; href: string }) => (
  <li>
    <Link className="dropdown-item" href={href}>
      {title}
    </Link>
  </li>
);
