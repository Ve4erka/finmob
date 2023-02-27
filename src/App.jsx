import React from "react";
import { Mobile } from "./Components/Mobile";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Mobile/>} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
