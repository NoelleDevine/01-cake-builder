import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layer from "./models/Layer";
import CakeBuilder from "./components/CakeBuilder";
import Cake from "./components/Cake";
import LayerForm from "./components/LayerForm";

function App() {
  const [arrayOfLayers, setLayers] = useState<Layer[]>([
    { height: 50, width: 100, color: "darkturquoise" },
  ]);

  return (
    <div className="App">
      <CakeBuilder />
      <Cake propLayers={arrayOfLayers} />
      <LayerForm />
    </div>
  );
}

export default App;
