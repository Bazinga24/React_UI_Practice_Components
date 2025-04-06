import { useEffect, useState } from "react";
import "./App.css";
import "./components/DigitalClock/DigitalClock";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import Pagination from "./components/Pagination/Pagination";
function App() {
  return (
    <>
      <DigitalClock />
    </>
  );
}

export default App;
