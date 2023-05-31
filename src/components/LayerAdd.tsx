import { useState } from "react";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";
import Layer from "../models/Layer";
import Header from "./Header";

interface Props {
  addALayer: (newLayer: Layer) => void;
  clearCake: () => void;
}

const LayerAdd = ({ addALayer, clearCake }: Props) => {
  const [show, setShow] = useState(false);
  const closeForm = (): void => {
    setShow(false);
    //clear cake
    clearCake();
  };
  return (
    <div className="LayerAdd">
      {show ? (
        <LayerForm closeForm={closeForm} addALayer={addALayer} />
      ) : (
        <div className="changeView">
          <Header />
          <button style={{ width: 100 + "%" }} onClick={() => setShow(true)}>
            Add a Layer
          </button>
        </div>
      )}
    </div>
  );
};

export default LayerAdd;
