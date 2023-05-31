import Layer from "../models/Layer";
import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";

interface Props {
  addALayer: (newLayer: Layer) => void;
  layersMade: Layer[];
  deleteLayer: (theIndex: number) => void;
  clearCake: () => void;
}
const CakeBuilder = ({
  addALayer,
  layersMade,
  deleteLayer,
  clearCake,
}: Props) => {
  return (
    <div className="CakeBuilder">
      <LayerAdd addALayer={addALayer} clearCake={clearCake} />
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
