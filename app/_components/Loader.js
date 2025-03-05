"use client";
import loader from "@/app/_assets/loader.json";
import loader2 from "@/app/_assets/loader2.json";

import Lottie from "lottie-react";
function Loader({ style = {}, type = 1 }) {
  return (
    <Lottie
      autoplay
      loop={true}
      animationData={type === 1 ? loader : loader2}
      style={{ maxHeight: "80px", maxWidth: "80px", ...style }}
    />
  );
}

export default Loader;
