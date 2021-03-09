import React from "react";
import { switchColor } from "../../../../../functions/index";

function EasternCity(props) {
  const { selectToggle } = props;
  return (
    <>
      <div className="d-flex justify-content-center">
        <a href="##" className="a mr-5">
          <div
            className="page3circle page3area"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(18);
            }}
          >
            花蓮
          </div>
        </a>
        <a href="##" className="a ml-5">
          <div
            className="page3circle page3area"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(19);
            }}
          >
            臺東
          </div>
        </a>
      </div>
    </>
  );
}

export default EasternCity;
