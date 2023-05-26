import { useState } from "react";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";
import Layer from "../models/Layer";

interface Props {
  addALayer: (newLayer: Layer) => void;
}

const LayerAdd = ({ addALayer }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="LayerAdd">
      {show ? (
        <LayerForm closeForm={() => setShow(false)} addALayer={addALayer} />
      ) : (
        <button style={{ width: 100 + "%" }} onClick={() => setShow(true)}>
          Add a Layer
        </button>
      )}
    </div>
  );
};

export default LayerAdd;
