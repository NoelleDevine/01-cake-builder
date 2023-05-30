import { useState } from "react";
import "./LayerBuilder.css";
import Layer from "../models/Layer";

interface Props {
  layerMade: Layer;
  deleteLayer: (i: number) => void;
  i: number;
}

const LayerBuilder = ({ layerMade, deleteLayer, i }: Props) => {
  const [deleteBtn, setDeleteBtn] = useState(false);
  return (
    <div>
      <div className="LayerBuilder">
        <section className="colorMadeSelection">
          Color:
          <div
            className="colorDiv"
            style={{
              backgroundColor: layerMade.color,
              height: "15px",
              width: "30px",
            }}
          ></div>
        </section>
        <div className="sizeSelection">
          <section className="widthSelection">
            <label htmlFor="width">Width: </label>
            {layerMade.width}
            <input
              style={{ width: 100 + "%" }}
              type="range"
              value={(layerMade.width / 30) * 100}
              id="madeWidth"
            ></input>
          </section>
          <section className="heightSelection">
            <label htmlFor="height">Height: </label>
            {layerMade.height}
            <input
              style={{ width: 100 + "%" }}
              type="range"
              value={(layerMade.height / 10) * 100}
              id="madeHeight"
            ></input>
          </section>
        </div>
        <section className="buttonSelection">
          <button
            className="delButton"
            onClick={(e) => deleteLayer(i)}
            style={{ width: 75 + "px" }}
          >
            Delete
          </button>
        </section>
      </div>
      <hr></hr>
    </div>
  );
};

export default LayerBuilder;
