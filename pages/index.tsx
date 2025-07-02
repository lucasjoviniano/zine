import { Geist, Geist_Mono } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import LandingPage from "./Landing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <AnimatedCursor
        innerSize={35}
        outerSize={35}
        color="0, 0, 0"
        innerScale={1}
        outerScale={1.2}
        trailingSpeed={1}
        innerStyle={{
          border: "1px solid black",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
        outerStyle={{
          border: "1px solid black",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
      />
      <LandingPage />
    </div>
  );
}
