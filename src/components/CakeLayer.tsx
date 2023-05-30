import Layer from "../models/Layer";
import "./CakeLayer.css";
import pawPrints from "../images/pawPrints.png";
import bone from "../images/bone.png";
import { useEffect, useState } from "react";

interface Props {
  propLayer: Layer; //child is receiving the array
}

const CakeLayer = ({ propLayer }: Props) => {
  const [picAPrint, setPicAPrint] = useState("");
  const [showImg, setShow] = useState(true);
  useEffect(() => {
    if (propLayer.pattern === "pawPrints") {
      setPicAPrint(pawPrints);
      setShow(true);
    } else if (propLayer.pattern === "Bone") {
      setPicAPrint(bone);
      setShow(true);
    } else {
      setShow(false);
    }
  }, [propLayer]); //stop infinite loop

  return (
    <div className="CakeLayer">
      <div
        style={{
          // backgroundImage: 'url("../images/pawPrints.jpeg")',
          width: propLayer.width * 10 + "px",
          height: propLayer.height * 10 + "px",
          backgroundColor: propLayer.color,
          border: "1px solid black",
          borderRadius: "5px 5px 0px 0px",
        }}
      >
        {showImg && (
          <img className="backgroundIMG" src={picAPrint} alt=""></img>
        )}
      </div>
    </div>
  );
};

export default CakeLayer;
