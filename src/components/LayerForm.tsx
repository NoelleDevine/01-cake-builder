import { FormEvent, useState } from "react";
import "./LayerForm.css";
import Layer from "../models/Layer";
import { v4 as uuidv4 } from "uuid";

interface Props {
  addALayer: (newLayer: Layer) => void;
  closeForm: () => void;
}

const LayerForm = ({ addALayer, closeForm }: Props) => {
  const [height, setHeight] = useState("1");
  const [width, setWidth] = useState("1");
  const [color, setColor] = useState("steelblue");
  const [save, setSave] = useState(false);
  const [pattern, setPattern] = useState("None");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newLayer: Layer = {
      height: +height,
      width: +width,
      color: color,
      pattern: pattern,
      id: uuidv4(), //add id to object when layer is made, not upon render
    };
    if (save) {
      addALayer(newLayer);
    }
  };

  return (
    <form onSubmit={submitHandler} className="LayerForm">
      <h2 className="addLayerHeading">Add A Layer</h2>
      <section className="colorSelection">
        <label htmlFor="color">Color:</label>
        <select
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="saddlebrown">Brown</option>
          <option value="pink">Pink</option>
          <option value="blueviolet">Purple</option>
          <option value="steelblue">Teal Blue</option>
          <option value="darkturquoise">Turquoise</option>
        </select>
      </section>
      <section className="patternSelection">
        <label htmlFor="pattern">Pattern:</label>
        <select
          name="pattern"
          id="pattern"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        >
          <option value="None">None</option>
          <option value="Bone">Bones</option>
          <option value="pawPrints">Paw Prints</option>
        </select>
      </section>
      <section className="widthSelection">
        <label htmlFor="width">Width: </label>
        {width}
        <input
          style={{ width: 100 + "%" }}
          type="range"
          id="width"
          name="width"
          min="1"
          max="30"
          step="1"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        ></input>
      </section>
      <section className="heightSelection">
        <label htmlFor="height">Height: </label>
        {height}
        <input
          style={{ width: 100 + "%" }}
          type="range"
          id="height"
          name="height"
          min="1"
          max="10"
          step="1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        ></input>
      </section>
      <section className="buttonSelection">
        <button
          onClick={(e) => setSave(true)}
          className="saveBtn"
          style={{ width: 75 + "px" }}
        >
          Save
        </button>
        <button onClick={closeForm} style={{ width: 75 + "px" }}>
          Cancel
        </button>
      </section>
    </form>
  );
};

export default LayerForm;
