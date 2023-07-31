import React from "react";

import "../App.css";
import Fog1 from "../common/assets/fog_1.png";
import Fog2 from "../common/assets/fog_2.png";
import Fog3 from "../common/assets/fog_3.png";
import Fog4 from "../common/assets/fog_4.png";
import Sunrays from "../common/assets/sun_rays.png";
import BlackShadow from "../common/assets/black_shadow.png";
import Mountain1 from "../common/assets/mountain_1.png";
import Mountain2 from "../common/assets/mountain_2.png";
import Mountain3 from "../common/assets/mountain_3.png";
import Mountain4 from "../common/assets/mountain_4.png";
import Mountain5 from "../common/assets/mountain_5.png";
import Mountain6 from "../common/assets/mountain_6.png";

export default function Navbar() {
  return (
    <React.Fragment>
      <img
        src={Mountain6}
        data-speedx="0.065"
        data-speedy="0.05"
        data-speedz="0.05"
        data-rotation="0.12"
        data-distance="2300"
        className="parallax mountain-6"
      />
      <img
        src={Fog4}
        data-speedx="0.135"
        data-speedy="0.04"
        data-speedz="0"
        data-rotation="0"
        data-distance="2400"
        className="parallax fog-4"
      />
      <img
        src={Mountain5}
        data-speedx="0.08"
        data-speedy="0.03"
        data-speedz="0.13"
        data-rotation="0.1"
        data-distance="2550"
        className="parallax mountain-5"
      />
      <img
        src={Fog3}
        data-speedx="0.11"
        data-speedy="0.018"
        data-speedz="0"
        data-rotation="0"
        data-distance="2800"
        className="parallax fog-3"
      />
      <img
        src={Mountain4}
        data-speedx="0.059"
        data-speedy="0.024"
        data-speedz="0.35"
        data-rotation="0.14"
        data-distance="3200"
        className="parallax mountain-4"
      />
      <img
        src={Mountain3}
        data-speedx="0.04"
        data-speedy="0.018"
        data-speedz="0.32"
        data-rotation="0.05"
        data-distance="3400"
        className="parallax mountain-3"
      />
      <img
        src={Fog2}
        data-speedx="0.15"
        data-speedy="0.0115"
        data-speedz="0"
        data-rotation="0"
        data-distance="3600"
        className="parallax fog-2"
      />
      <img
        src={Mountain2}
        data-speedx="0.0235"
        data-speedy="0.013"
        data-speedz="0.42"
        data-rotation="0.15"
        data-distance="3800"
        className="parallax mountain-2"
      />
      <img
        src={Mountain1}
        data-speedx="0.027"
        data-speedy="0.018"
        data-speedz="0.53"
        data-rotation="0.2"
        data-distance="4000"
        className="parallax mountain-1"
      />
      <img src={Sunrays} className="sun-rays hide" />
      <img src={BlackShadow} className="black-shadow hide" />
      <img
        src={Fog1}
        data-speedx="0.12"
        data-speedy="0.01"
        data-speedz="0"
        data-rotation="0"
        data-distance="4200"
        className="parallax fog-1"
      />
    </React.Fragment>
  );
}
