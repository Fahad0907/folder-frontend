import React, { useState, useEffect } from "react";
import { Section } from "./FolderStyle";
import axios from "axios";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
const Folder = () => {
  const [data, setData] = useState<any[]>([]);
  const nevigate: any = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/main/",
    })
      .then((respose) => {
        setData(respose.data.result);
      })
      .catch((err) => {});
  }, []);
  const deleteFolder = () => {};
  const findSubFolder = (id: string, index: number) => {
    axios({
      method: "get",
      url: `http://localhost:3000/sub/${id}/`,
    })
      .then((respose) => {
        const size = respose.data.result.length;
        const a = [...data];
        console.log(a.length);
        for (let i = 0; i < size; i++) {
          let find: boolean = false;
          for (let j = 0; j < a.length; j++) {
            if (respose.data.result[i]._id == a[j]._id) {
              find = true;
              break;
            }
          }
          if (find) break;
          if (!find) a.splice(index + 1, 0, respose.data.result[i]);
        }

        setData(a);
        console.log(a);
      })
      .catch((err) => {});
  };
  return (
    <Section>
      <div className="middle">
        <div className="root">
          <BsFillArrowRightCircleFill />
          <h2 className="root-title">root</h2>
          <h3
            onClick={() => {
              nevigate("add", { state: { id: "-1", margin: -1 } });
            }}
            className="root-add"
          >
            + New
          </h3>
        </div>
        <div className="root-folder">
          {data &&
            data.map((d, index) => (
              <div className="subfolder">
                <BsFillArrowRightCircleFill
                  style={{ marginLeft: d?.margin }}
                  onClick={() => findSubFolder(d?._id, index)}
                />
                <h2 className="subfolder-heading">{d?.name}</h2>
                <h3
                  className="root-del"
                  onClick={() => {
                    nevigate("delete", {
                      state: { id: d?._id, name: d?.name },
                    });
                  }}
                >
                  X
                </h3>
                <h3
                  onClick={() => {
                    nevigate("add", {
                      state: { id: d?._id, margin: d?.margin },
                    });
                  }}
                  className="root-add"
                >
                  + New
                </h3>
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Folder;
