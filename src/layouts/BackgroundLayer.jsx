import React from "react";

import "../App.css";
import Fog5 from "../common/assets/fog_5.png";
import Fog6 from "../common/assets/fog_6.png";
import Fog7 from "../common/assets/fog_7.png";
import Background from "../common/assets/background.png";
import Mountain7 from "../common/assets/mountain_7.png";
import Mountain8 from "../common/assets/mountain_8.png";
import Mountain9 from "../common/assets/mountain_9.png";
import Mountain10 from "../common/assets/mountain_10.png";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="vignette hide"></div>
      <img
        src={Background}
        data-speedx="0.3"
        data-speedy="0.38"
        data-speedz="0"
        data-rotation="0"
        data-distance="-200"
        className="parallax bg-img"
      />
      <img
        src={Fog7}
        data-speedx="0.27"
        data-speedy="0.32"
        data-speedz="0"
        data-rotation="0"
        data-distance="850"
        className="parallax fog-7"
      />
      <img
        src={Mountain10}
        data-speedx="0.195"
        data-speedy="0.305"
        data-speedz="0"
        data-rotation="0"
        data-distance="1100"
        className="parallax mountain-10"
      />
      <img
        src={Fog6}
        data-speedx="0.25"
        data-speedy="0.28"
        data-speedz="0"
        data-rotation="0"
        data-distance="1400"
        className="parallax fog-6"
      />
      <img
        src={Mountain9}
        data-speedx="0.125"
        data-speedy="0.155"
        data-speedz="0.15"
        data-rotation="0.02"
        data-distance="1700"
        className="parallax mountain-9"
      />
      <img
        src={Mountain8}
        data-speedx="0.1"
        data-speedy="0.11"
        data-speedz="0"
        data-rotation="0.02"
        data-distance="1800"
        className="parallax mountain-8"
      />
      <img
        src={Fog5}
        data-speedx="0.16"
        data-speedy="0.105"
        data-speedz="0"
        data-rotation="0"
        data-distance="1900"
        className="parallax fog-5"
      />
      <img
        src={Mountain7}
        data-speedx="0.1"
        data-speedy="0.1"
        data-speedz="0"
        data-rotation="0.09"
        data-distance="2000"
        className="parallax mountain-7"
      />
    </React.Fragment>
  );
}
