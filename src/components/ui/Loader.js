import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import IconLoaderAnimation from "../../assets/Animations/iconLoader.json";

const style = {
  height: 150,
  width: 150,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const IconLoader = () => {
  const LottieRef = useRef();

  useEffect(() => {
    console.log(LottieRef);
  }, []);

  return (
    <Lottie
      LottieRef={LottieRef}
      animationData={IconLoaderAnimation}
      style={style}
    /> //load the animation icon in the register view
  );
};

export default IconLoader;
