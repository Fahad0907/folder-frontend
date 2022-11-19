import React, { useState, useEffect } from "react";
import { Section } from "./AddFolderStyle";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const AddFolder = () => {
  const [name, setName] = useState<string>("");
  const nevigate: any = useNavigate();
  const id: string = useLocation().state.id;
  const margin: number = useLocation().state.margin;
  const submit = async (): Promise<void> => {
    if (name == "") {
      alert("Enter folder name");
    } else if (id == "-1") {
      try {
        await axios({
          method: "post",
          url: "http://localhost:3000/main/",
          data: { name: name },
        });
        nevigate("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await axios({
          method: "post",
          url: "http://localhost:3000/sub/",
          data: { name: name, parentID: id, margin: margin + 10 },
        });
        nevigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Section>
      <div className="form">
        <div className="title">
          <h1>Add Folder</h1>
        </div>
        <div className="username">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Folder name"
          />
        </div>
        <div className="button">
          <button
            onClick={() => {
              nevigate("/");
            }}
            className="cancle"
          >
            Cancel
          </button>
          <button onClick={submit} className="add">
            Add
          </button>
        </div>
      </div>
    </Section>
  );
};

export default AddFolder;
