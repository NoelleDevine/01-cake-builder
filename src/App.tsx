import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layer from "./models/Layer";
import CakeBuilder from "./components/CakeBuilder";
import Cake from "./components/Cake";
import Header from "./components/Header";

function App() {
  const [arrayOfLayers, setLayers] = useState<Layer[]>([]);

  const deleteLayer = (theIndex: number): void => {
    //because we have a STATE variable we have to use the setContacts

    setLayers((prev) => {
      //make a deep copy
      const copyOfLayers: Layer[] = prev.slice(0);
      //modify copy with splice
      copyOfLayers.splice(theIndex, 1);
      return copyOfLayers; //return is going to the state variable, NOT deleteContact
    });
  };

  const addALayer = (newLayer: Layer): void => {
    // add new contact to array

    setLayers((prev) => [newLayer, ...prev]); //bring in all elements with ... spread opperator
  };

  return (
    <div className="App">
      {/* <Header /> */}

      <Cake propLayers={arrayOfLayers} />
      <CakeBuilder
        addALayer={addALayer}
        layersMade={arrayOfLayers}
        deleteLayer={deleteLayer}
      />
    </div>
  );
}

export default App;
