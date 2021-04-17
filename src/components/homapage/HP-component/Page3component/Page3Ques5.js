import React from "react";
import Page3Topic from "./Page3Topic";
import { switchColor } from "../../../../functions";

function Page3Ques5(props) {
  const { selectToggle } = props;
  return (
    <>
      <div className="page3single ">
        <Page3Topic title="毛色" />
        <div className="d-flex justify-content-center">
          <div
            className="mx-2 page3circle page3area"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(22);
            }}
          >
            黑
          </div>
          <div
            className=" mx-2 page3circle page3area"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(23);
            }}
          >
            白
          </div>
          <div
            className="mx-2 page3circle page3area"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(24);
            }}
          >
            灰
          </div>
          <div
            className="mx-2 page3circle page3area"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(25);
            }}
          >
            黃
          </div>
        </div>
      </div>
    </>
  );
}

export default Page3Ques5;
