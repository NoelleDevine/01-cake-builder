import Layer from "../models/Layer";
import "./CakeLayer.css";

interface Props {
  propLayer: Layer; //child is receiving the array
}

const CakeLayer = ({ propLayer }: Props) => {
  console.log("testing 123");

  return (
    <div className="CakeLayer">
      <p>
        Testing:
        {propLayer.height} {propLayer.width}
      </p>

      <div
        style={{
          width: propLayer.width + "px",
          height: propLayer.height + "px",
          backgroundColor: propLayer.color,
          border: "2px solid black",
        }}
      ></div>
    </div>
  );
};

export default CakeLayer;
