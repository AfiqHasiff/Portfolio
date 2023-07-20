import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";

import teslaLogo from "../common/assets/tesla.png";
import amazonLogo from "../common/assets/amazon.png";
import googleLogo from "../common/assets/google.png";
import youtubeLogo from "../common/assets/youtube.png";
import flipkartLogo from "../common/assets/flipkart.png";
// import dotAnimation from "../common/assets/svg/dot.json";
import helloAnimation from "../common/assets/svg/hello.json";

import "./Sections.css";

export default function Sections() {
  const workExperiences = [
    {
      company: "Asia Digital Engineering",
      designation: "Full Stack Software Engineer",
      date: "April 22 - Current",
      code: "ADE",
      logo: teslaLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      company: "AirAsia",
      designation: "Full Stack Software Developer",
      date: "Jan 22 - March 22",
      code: "AirAsia",
      logo: googleLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      company: "Airod Sdn Bhd",
      designation: "IT Engineer",
      date: "Sep 2021 - Dec 2021",
      code: "Airod",
      logo: youtubeLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      company: "MIMOS Berhad",
      designation: "Full Stack Software Engineer",
      date: "Feb 2021 - Aug 2021",
      code: "MIMOS",
      logo: amazonLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const educationExperiences = [
    {
      schoolName: "University of Malaysia Pahang",
      date: "XXX YY - XXX YY",
      code: "UMP",
      logo: teslaLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      schoolName: "UiTM Dengkil",
      date: "XXX YY - XXX YY",
      code: "UiTM",
      logo: googleLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      schoolName: "SMK Seksyen 7 Shah Alam",
      date: "XXX YY - XXX YY",
      code: "SMK Sek 7",
      logo: youtubeLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      schoolName: "SMK Seksyen 2 Shah Alam",
      date: "XXX YY - XXX YY",
      code: "SMK Sek 2",
      logo: amazonLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      schoolName: "SK Seksyen 7 Shah Alam",
      date: "XXX YY - XXX YY",
      code: "SK Sek 7",
      logo: flipkartLogo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

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
    <div className="sectionBackground row">
      <div className="col-12">
        <section id="landingSection" class="hiddenLeft">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Lottie animationData={helloAnimation} style={{ filter: "invert(100%)", marginLeft: "-650px" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div class="aboutMe" style={{ maxWidth: "935px", marginTop: "-140px", paddingBottom: "140px" }}>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "18px",
                  }}
                >
                  {/* My name is Afiq Hasif, I'm a full stack software developer based in Klang Valley, Malaysia. I'm a proven
                  afable, who served as vice president for UMP's Flying Disc Association. Adept with software engineering
                  principles, network configuration and related skills. Equipped with experience working in a software
                  development scrum team. Lead a software development team as a Tech Lead for the aviation industry. */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="timeline">
          <div className="line hiddenLeft"></div>
        </div>

        <section id="optionSection" class="hiddenLeft" style={{ margin: "150px 0px 150px 0px" }}>
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
                    {(() => {
                      return workExperiences.map((work, workIndex) => {
                        return (
                          <React.Fragment>
                            <span>• {work.company}</span>
                            <br />
                          </React.Fragment>
                        );
                      });
                    })()}
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
                    {(() => {
                      return educationExperiences.map((school, schoolIndex) => {
                        return (
                          <React.Fragment>
                            <span>• {school.schoolName}</span>
                            <br />
                          </React.Fragment>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="timeline">
          <div className="line hiddenLeft"></div>
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
              {(() => {
                return workExperiences.map((work, workIndex) => {
                  return (
                    <div
                      className="boxCard hiddenLeft"
                      onClick={() => {
                        handleJumpTo(`workExperience-${workIndex + 1}`);
                      }}
                    >
                      <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                          <img
                            src={work.logo}
                            alt=""
                            style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12 d-flex justify-content-center">
                          <span style={{ fontSize: "12px" }}>{work.code}</span>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </section>

        <div className="workExperienceTimelinePre hiddenLeft">
          <div className="workExperiencePreLine"></div>
        </div>
        <div className="timelineHorizontal hiddenLeft">
          <div className="preLineHorizontal"></div>
        </div>
        <div className="workExperienceTimeline hiddenLeft" style={{ transitionDelay: "400ms" }}>
          <div className="workExperienceLine"></div>
        </div>

        {(() => {
          return workExperiences.map((work, workIndex) => {
            return (
              <React.Fragment>
                <div id={`workExperience-${workIndex + 1}`} style={{ marginTop: workIndex === 0 && "-1400px" }} />
                <section
                  class="workExperience hiddenRight"
                  style={{ marginTop: workIndex === 0 && "-1400px", maxHeight: "300px", minHeight: "300px" }}
                >
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <div className="experienceCard">
                        <div className="row">
                          <div className="col-12">
                            <span
                              style={{
                                fontFamily: "Gotham-Bold",
                                fontSize: "32px",
                              }}
                            >
                              {work.company}
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <span style={{ fontFamily: "Gotham-Medium" }}>{work.date}</span>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-12">
                            <div style={{ maxWidth: "725px" }}>
                              <span>{work.description}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </React.Fragment>
            );
          });
        })()}

        <div className="timelineHorizontal hiddenLeft">
          <div className="postLineHorizontal"></div>
        </div>
        <div className="workExperienceTimelinePost hiddenLeft">
          <div className="workExperiencePostLine"></div>
        </div>

        <div id="educationSelectorSection" style={{ opacity: 0 }} />
        <section class="hiddenRight">
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
              {(() => {
                return educationExperiences.map((school, schoolIndex) => {
                  return (
                    <div
                      className="boxCard hiddenLeft"
                      onClick={() => {
                        handleJumpTo(`workExperience-${schoolIndex + 1}`);
                      }}
                    >
                      <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                          <img
                            src={school.logo}
                            alt=""
                            style={{ maxWidth: "50px", maxHeight: "50px", margin: "10px 0px 0px 0px" }}
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12 d-flex justify-content-center">
                          <span style={{ fontSize: "12px" }}>{school.code}</span>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
