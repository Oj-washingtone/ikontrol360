import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="content">
      <Header />
      <div className="main">
        <div className="container main-content-wrapper">
          <div className="row">
            <div className="col-md-7">
              <h1>
                Experience the <br /> comfort of connected
                <br /> living.
              </h1>
              <p>
                At iKontrol360, we are transforming how individuals engage with
                their surroundings. Imagine the ability to connect, control, and
                monitor every facet of your daily life through a single,
                intuitive platform.
              </p>
              <div className="maintainance-notice">
                WEBSITE UNDER MAINTAINANCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
