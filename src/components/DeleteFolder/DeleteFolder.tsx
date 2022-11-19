import React from "react";
import { Section } from "../DeleteFolder/DeleteFolderStyle";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const DeleteFolder = () => {
  const nevigate: any = useNavigate();
  const id: string = useLocation().state.id;
  const name: string = useLocation().state.name;
  const deleteFolder = async () => {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:3000/sub/${id}/`,
      });
      nevigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Section>
      <div className="form">
        <div className="title">
          <h1>Delete Folder</h1>
        </div>
        <div className="username">
          <input type="text" placeholder="" value={name} />
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
          <button className="delete" onClick={deleteFolder}>
            Delete
          </button>
        </div>
      </div>
    </Section>
  );
};

export default DeleteFolder;
