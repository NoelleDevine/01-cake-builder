import Layer from "../models/Layer";
import "./Cake.css";
import CakeLayer from "./CakeLayer";
import cakeStand from "../images/cakeStand.png";

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
            key={item.id} //this is specific to react, not the index
          />
        ))}

        {propLayers.length > 0 && (
          <img className="picOfStand" src={cakeStand}></img>
        )}
      </ul>
    </div>
  );
};

export default Cake;
