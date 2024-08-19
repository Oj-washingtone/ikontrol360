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
export default function Home() {
  return (
    <main>
      <Banner />
      <Solutions />
      <ProductFeatures />
      <About />
      <VideoComponent />
      <PopularProducts />
      {/* <CallToAction /> */}
      {/* <Statistics /> */}
      <Footer />
    </main>
  );
}
