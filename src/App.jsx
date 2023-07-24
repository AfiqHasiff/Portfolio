import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";

import Loader from "./layouts/Loader";
import Navbar from "./layouts/Navbar";
import MiddleLayer from "./layouts/MiddleLayer";
import BackgroundLayer from "./layouts/BackgroundLayer";
import ForegroundLayer from "./layouts/ForegroundLayer";

import "./App.css";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const mainRef = useRef(null);
  const [runInitFuncs, setRunInitFuncs] = useState(false);

  let xValue = 0;
  let yValue = 0;
  let rotateDegree = 0;

  const updateAnimation = (cursorPosition) => {
    const parallaxElement = document.querySelectorAll(".parallax");

    parallaxElement.forEach((element, elementIndex) => {
      let speedx = element.dataset.speedx;
      let speedy = element.dataset.speedy;
      let speedz = element.dataset.speedz;
      let rotateSpeed = element.dataset.rotation;

      let isInLeft = parseFloat(getComputedStyle(element).left) < window.innerWidth / 2 ? 1 : -1;
      let zValue = (cursorPosition - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.1;

      element.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${
        rotateDegree * rotateSpeed
      }deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
  };

  const handleGsapAnimations = () => {
    const timeline = gsap.timeline();
    const parallaxElement = document.querySelectorAll(".parallax");

    if (window.innerWidth >= 725) {
      mainRef.current.style.maxHeight = `${window.innerWidth * 0.6}px`;
    } else {
      mainRef.current.style.maxHeight = `${window.innerWidth * 1.6}px`;
    }

    setTimeout(() => {
      parallaxElement.forEach((el) => {
        el.style.transition = "0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)";
      });
    }, timeline.endTime() * 1000);

    Array.from(parallaxElement)
      .filter((el) => !el.classList.contains("text"))
      .forEach((el) => {
        timeline.from(
          el,
          {
            top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
            duration: 3.5,
            ease: "power3.out",
          },
          "1"
        );
      });

    timeline
      .from(
        ".text h1",
        {
          y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
          duration: 2,
        },
        "2.5"
      )
      .from(
        ".text h2",
        {
          y: -150,
          opacity: 0,
          duration: 1.5,
        },
        "3"
      )
      .from(
        ".hide",
        {
          opacity: 0,
          duration: 1.5,
        },
        "3"
      );
  };

  const eventListeners = () => {
    const timeline = gsap.timeline();

    if (window.innerWidth >= 725) {
      mainRef.current.style.maxHeight = `${window.innerWidth * 0.6}px`;
    } else {
      mainRef.current.style.maxHeight = `${window.innerWidth * 1.6}px`;
    }

    window.addEventListener("mousemove", (event) => {
      if (timeline.isActive()) return;

      xValue = event.clientX - window.innerWidth / 2;
      yValue = event.clientY - window.innerHeight / 2;
      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      updateAnimation(event.clientX);
    });
  };

  const handleLoader = () => {
    const loaderElement = document.querySelectorAll(".loader");

    loaderElement.forEach((element) => {
      if (element !== null) {
        element.style.opacity = 0;
      }
    });
  };

  useEffect(() => {
    if (!_.isEmpty(mainRef.current)) {
      setRunInitFuncs(true);
    }
  }, [mainRef.current]);

  useEffect(() => {
    const onPageLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("\nPage loaded!: ", mainRef.current);

      handleLoader();
      eventListeners();
      updateAnimation(0);
      handleGsapAnimations();
    };

    if (runInitFuncs) {
      onPageLoad();
    }
  }, [runInitFuncs]);

  return (
    <React.Fragment>
      <Navbar />
      <Loader />
      <main ref={mainRef}>
        <BackgroundLayer />
        <MiddleLayer />
        <ForegroundLayer />
      </main>
    </React.Fragment>
  );
}
