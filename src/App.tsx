import React from "react";
import "./App.css";
import Folder from "./components/Folder/Folder";
import AddFolder from "./components/AddFolder/AddFolder";
import DeleteFolder from "./components/DeleteFolder/DeleteFolder";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Folder />} />
      <Route path="/add/" element={<AddFolder />} />
      <Route path="/delete/" element={<DeleteFolder />} />
    </Routes>
  );
}

export default App;
