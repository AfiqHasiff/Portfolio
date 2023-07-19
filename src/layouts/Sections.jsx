import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";

import "./Sections.css";
import dotAnimation from "../assets/dot.json";
import helloAnimation from "../assets/hello.json";

export default function Sections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const observeElements = () => {
    const hiddenSections = document.querySelectorAll(".hidden");
    hiddenSections.forEach((section) => observer.observe(section));
  };

  useEffect(() => {
    observeElements();
  }, []);

  return (
    <div className="row" style={{ backgroundColor: "#1b1f25" }}>
      <div className="col-12">
        <section id="landingSection" class="hidden">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Lottie animationData={helloAnimation} style={{ filter: "invert(100%)", marginLeft: "-650px" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div class="aboutMe" style={{ maxWidth: "935px", marginTop: "-140px" }}>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "18px",
                  }}
                >
                  My name is Afiq Hasif, I'm a full stack software developer based in Klang Valley, Malaysia. I'm a proven
                  afable, who served as vice president for UMP's Flying Disc Association. Adept with software engineering
                  principles, network configuration and related skills. Equipped with experience working in a software
                  development scrum team. Lead a software development team as a Tech Lead for the aviation industry.
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-12">
            <div class="borderMiddle hidden" />
          </div>
        </div>

        <section id="optionSection" class="hidden">
          <div className="row">
            <div className="col-12 d-flex flex-fill">
              <h1
                style={{
                  color: "#FFFFFF",
                }}
              >
                Explore more
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <span style={{ color: "#7d8590" }}>Choose which experience of mine you would like to know more</span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <div className="optionCard hidden">
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ color: "white" }}>Work Experience</span>
                  </div>
                </div>
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ color: "white", fontSize: "42px" }}>29</span>
                    <span style={{ color: "#b1b1b1" }}> months</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="borderLine" />
                  </div>
                </div>
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ color: "white" }}>Asia Digital Engineering</span>
                    <br />
                    <span style={{ color: "white" }}>Air Asia</span>
                    <br />
                    <span style={{ color: "white" }}>Airod Sdn Bhd</span>
                    <br />
                    <span style={{ color: "white" }}>MIMOS Berhad</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="optionCard hidden">
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ color: "white" }}>Education</span>
                  </div>
                </div>
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ color: "white", fontSize: "42px" }}>152</span>
                    <span style={{ color: "#b1b1b1" }}> months</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="borderLine" />
                  </div>
                </div>
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ color: "white" }}>University of Malaysia Pahang</span>
                    <br />
                    <span style={{ color: "white" }}>UiTM Dengkil</span>
                    <br />
                    <span style={{ color: "white" }}>SMK Seksyen 7 Shah Alam</span>
                    <br />
                    <span style={{ color: "white" }}>SMK Seksyen 2 Shah Alam</span>
                    <br />
                    <span style={{ color: "white" }}>SK Seksyen 7 Shah Alam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="row">
          <div className="col-12">
            <div class="border hidden" />
          </div>
        </div>

        <section id="section-2" class="hidden">
          <div className="row">
            <div className="col-12 d-flex flex-fill">
              <h1
                style={{
                  color: "#FFFFFF",
                  marginRight: "280px",
                }}
              >
                About me
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div style={{ maxWidth: "935px", marginLeft: "490px" }}>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "24px",
                  }}
                >
                  Hands-on computer and technology enthusiast. Proven afable, who served as vice president for UMP's Flying
                  Disc Association. Adept with software engineering principles, network configuration and related skills.
                  Equipped with experience working in a software development scrum team. Lead a software development team as
                  a Tech Lead for the aviation industry.
                </span>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
