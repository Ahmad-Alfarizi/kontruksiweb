import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Product from "./product/page";
import About from "./about/page";
import Footer from "@/components/Footer";
import Profile from "./profile/page";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#121714] dark:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Profile />
      <Footer />
    </div>
  );
}
