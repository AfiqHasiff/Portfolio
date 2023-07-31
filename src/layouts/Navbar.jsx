import Lottie from "lottie-react";

import "../App.css";
import Logo from "../common/assets/lottie/logo.json";

export default function Navbar() {
  return (
    <header className="hide">
      <nav>
        <Lottie className="logo" animationData={Logo} />
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/afiqhasif/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/AfiqHasiff" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/13TPCioijCQulYiLoIaH2yxCAm05wbVIO/view?usp=drive_link" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
