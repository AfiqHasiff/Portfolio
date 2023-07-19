import * as React from "react";
import Lottie from "lottie-react";

import "./Sections.css";
import helloAnimation from "../assets/hello.json";

export default function Sections() {
  return (
    <div className="row">
      <div className="col-12">
        <section id="sectionOne" class="hidden">
          <Lottie animationData={helloAnimation} style={{ filter: "invert(100%)" }} />
        </section>
        <section id="sectionTwo" class="hidden">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <span style={{ color: "#FFFFFF" }}>Test test test test test test</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
