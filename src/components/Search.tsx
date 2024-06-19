import React from "react";

export default function Search({
  variant = "on-canvas",
}: {
  variant?: "off-canvas" | "on-canvas";
}) {
  return (
    <form
      action="#"
      className={
        variant === "on-canvas"
          ? "search-bar d-xl-flex d-none position-relative md:!min-w-32"
          : "offcanvas-search-form"
      }
    >
      <input
        type="search"
        name="search"
        placeholder={
          variant === "on-canvas" ? "Search our store" : "Search Product..."
        }
        className={
          variant === "on-canvas"
            ? "search-bar-input"
            : "offcanvas-search-input"
        }
        required
      />
      {variant === "on-canvas" && (
        <button className="search-bar-button">
          <i className="pe-7s-search"></i>
        </button>
      )}
    </form>
  );
}