import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";

import { CustomButton } from "../common/components";

import "./Sections.css";
import teslaLogo from "../common/assets/tesla.png";
import amazonLogo from "../common/assets/amazon.png";
import googleLogo from "../common/assets/google.png";
import youtubeLogo from "../common/assets/youtube.png";
import flipkartLogo from "../common/assets/flipkart.png";
// import dotAnimation from "../common/assets/svg/dot.json";
import helloAnimation from "../common/assets/svg/hello.json";

export default function Sections() {
  const handleJumpTo = (elementId) => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showLeft");
      } else {
        entry.target.classList.remove("showLeft");
      }
    });
  });

  const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showRight");
      } else {
        entry.target.classList.remove("showRight");
      }
    });
  });

  const observeElements = () => {
    const leftHiddenSections = document.querySelectorAll(".hiddenLeft");
    const rightHiddenSections = document.querySelectorAll(".hiddenRight");

    leftHiddenSections.forEach((section) => leftObserver.observe(section));
    rightHiddenSections.forEach((section) => rightObserver.observe(section));
  };

  useEffect(() => {
    observeElements();
  }, []);

  return (
    <div className="row" style={{ backgroundColor: "#1b1f25" }}>
      <div className="col-12">
        <section id="landingSection" class="hiddenLeft">
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

        <div className="row mt-3 mb-3">
          <div className="col-12">
            <div class="borderMiddle hiddenLeft" style={{ marginTop: "-150px" }} />
          </div>
        </div>

        <section id="optionSection" class="hiddenLeft">
          <div className="row">
            <div className="col-12">
              <h1
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Gotham-Bold",
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
              <div
                className="optionCard hiddenLeft"
                onClick={() => {
                  handleJumpTo("workExperienceSelectorSection");
                }}
              >
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ fontFamily: "Gotham-Medium", fontSize: "22px" }}>Work Experience</span>
                  </div>
                </div>
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ fontSize: "42px" }}>29</span>
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
                    <span>• Asia Digital Engineering</span>
                    <br />
                    <span>• Air Asia</span>
                    <br />
                    <span>• Airod Sdn Bhd</span>
                    <br />
                    <span>• MIMOS Berhad</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="optionCard hiddenLeft"
                onClick={() => {
                  handleJumpTo("educationSelectorSection");
                }}
              >
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ fontFamily: "Gotham-Medium", fontSize: "22px" }}>Education</span>
                  </div>
                </div>
                <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                  <div className="col-12">
                    <span style={{ fontSize: "42px" }}>152</span>
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
                    <span>• University of Malaysia Pahang</span>
                    <br />
                    <span>• UiTM Dengkil</span>
                    <br />
                    <span>• SMK Seksyen 7 Shah Alam</span>
                    <br />
                    <span>• SMK Seksyen 2 Shah Alam</span>
                    <br />
                    <span>• SK Seksyen 7 Shah Alam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row mt-3 mb-3">
          <div className="col-12">
            <div class="borderMiddle hiddenLeft" />
          </div>
        </div>

        <section id="workExperienceSelectorSection" class="hiddenLeft">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h1
                style={{
                  color: "#FFFFFF",
                }}
              >
                Work Experience
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <span style={{ color: "#7d8590" }}>
                Past and current working experiences with a brief explanation on what I've accomplished and their respective
                tech stack
              </span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-between">
              <div className="boxCard hiddenLeft">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={teslaLogo}
                      alt=""
                      style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-center">
                    <span style={{ fontSize: "12px" }}>ADE</span>
                  </div>
                </div>
              </div>
              <div className="boxCard hiddenLeft">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={googleLogo}
                      alt=""
                      style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-center">
                    <span style={{ fontSize: "12px" }}>AirAsia</span>
                  </div>
                </div>
              </div>
              <div className="boxCard hiddenLeft">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={flipkartLogo}
                      alt=""
                      style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-center">
                    <span style={{ fontSize: "12px" }}>Airod Sdn Bhd</span>
                  </div>
                </div>
              </div>
              <div className="boxCard hiddenLeft">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={youtubeLogo}
                      alt=""
                      style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-center">
                    <span style={{ fontSize: "12px" }}>Mimos Berhad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row mb-3">
          <div className="col-12">
            <div class="borderMiddle hiddenLeft" style={{ marginTop: "-165px" }} />
          </div>
        </div>

        <section id="workExperience-1" class="hiddenLeft">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h1
                style={{
                  color: "#FFFFFF",
                }}
              >
                Asia Digital Engineering
              </h1>
            </div>
          </div>
        </section>

        <div className="row mb-3">
          <div className="col-12">
            <div class="borderMiddle hiddenLeft" style={{ marginTop: "-165px" }} />
          </div>
        </div>

        <section id="educationSelectorSection" class="hiddenLeft">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h1
                style={{
                  color: "#FFFFFF",
                }}
              >
                Education
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <span style={{ color: "#7d8590" }}>
                Past and current working experiences with a brief explanation on what I've accomplished and their respective
                tech stack
              </span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-between">
              <div className="boxCard hiddenLeft">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={teslaLogo}
                      alt=""
                      style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-center">
                    <span style={{ fontSize: "12px" }}>ADE</span>
                  </div>
                </div>
              </div>
              <div className="boxCard hiddenLeft">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={googleLogo}
                      alt=""
                      style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-center">
                    <span style={{ fontSize: "12px" }}>AirAsia</span>
                  </div>
                </div>
              </div>
              <div className="boxCard hiddenLeft">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={flipkartLogo}
                      alt=""
                      style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-center">
                    <span style={{ fontSize: "12px" }}>Airod Sdn Bhd</span>
                  </div>
                </div>
              </div>
              <div className="boxCard hiddenLeft">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={youtubeLogo}
                      alt=""
                      style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 d-flex justify-content-center">
                    <span style={{ fontSize: "12px" }}>Mimos Berhad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
