import Lottie from "lottie-react";

import "../App.css";
import LoaderAnimation from "../common/assets/lottie/loader.json";

export default function Loader() {
  return (
    <div className="loader">
      <Lottie className="loaderAnimation" animationData={LoaderAnimation} />
      <span className="loaderText">Fetching assets</span>
    </div>
  );
}
