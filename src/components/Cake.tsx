import Layer from "../models/Layer";
import "./Cake.css";
import CakeLayer from "./CakeLayer";

interface Props {
  propLayers: Layer[]; //child is receiving the array
}

const Cake = ({ propLayers }: Props) => {
  return (
    <div className="allLayers">
      <ul className="fullCakeLayers">
        {propLayers.map((item, index) => (
          <CakeLayer
            propLayer={item}
            key={index + Math.random()} //this is specific to react, not the index
          />
        ))}
      </ul>
    </div>
  );
};

export default Cake;
