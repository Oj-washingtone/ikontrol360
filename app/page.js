import Image from "next/image";
import Banner from "@/components/banner/Banner";
import Solutions from "@/components/solutions/Solutions";
import About from "@/components/about/About";
import VideoComponent from "@/components/video/VideoComponent";
import PopularProducts from "@/components/popular-products/PopularProducts";
import CallToAction from "@/components/call-to-action/CallToAction";
import Statistics from "@/components/statistics/Statistics";
import Footer from "@/components/footer/Footer";
import ProductFeatures from "@/components/features/Features";
import Mobile from "@/components/mobile-features/Mobile";
import Suggestions from "@/components/suggestions/Suggestions";

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Suggestions /> */}
      {/* <About /> */}
      <Solutions />
      <ProductFeatures />
      <VideoComponent />
      <Mobile />
      <PopularProducts />
      {/* <CallToAction />
      <Statistics /> */}
      <Footer />
    </main>
  );
}
