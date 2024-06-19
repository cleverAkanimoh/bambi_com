import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  fallback: ["Impact", "Georgia", "serif"],
});

export { raleway };
