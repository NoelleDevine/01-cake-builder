import { useState } from "react";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";
import Layer from "../models/Layer";
import Header from "./Header";
import cakeStand from "../images/cakeStand.png";

interface Props {
  addALayer: (newLayer: Layer) => void;
}

const LayerAdd = ({ addALayer }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="LayerAdd">
      {show ? (
        <>
          <div className="cakeStand">
            <img className="picOfStand" src={cakeStand}></img>
          </div>
          <LayerForm closeForm={() => setShow(false)} addALayer={addALayer} />
        </>
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
