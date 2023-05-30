import Layer from "../models/Layer";
import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";

interface Props {
  addALayer: (newLayer: Layer) => void;
  layersMade: Layer[];
  deleteLayer: (theIndex: number) => void;
}
const CakeBuilder = ({ addALayer, layersMade, deleteLayer }: Props) => {
  return (
    <div className="CakeBuilder">
      <LayerAdd addALayer={addALayer} />
      <ul className="layersMade">
        {layersMade.map((item, index) => (
          <LayerBuilder
            layerMade={item}
            i={index}
            key={item.id} //this is specific to react, not the index
            deleteLayer={deleteLayer}
          />
        ))}
      </ul>
    </div>
  );
};

export default CakeBuilder;
