import Layer from "../models/Layer";
import "./CakeLayer.css";

interface Props {
  propLayer: Layer; //child is receiving the array
}

const CakeLayer = ({ propLayer }: Props) => {
  return (
    <div className="CakeLayer">
      <div
        style={{
          width: propLayer.width * 10 + "px",
          height: propLayer.height * 10 + "px",
          backgroundColor: propLayer.color,
          border: "2px solid black",
        }}
      ></div>
    </div>
  );
};

export default CakeLayer;
