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
          <a
            className="a mx-2"
            href="##"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(22);
            }}
          >
            <div className="page3circle page3area">黑</div>
          </a>
          <a
            className="a mx-2"
            href="##"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(23);
            }}
          >
            <div className="page3circle page3area">白</div>
          </a>
          <a
            className="a mx-2"
            href="##"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(24);
            }}
          >
            <div className="page3circle page3area">灰</div>
          </a>
          <a
            className="a mx-2"
            href="##"
            onClick={(e) => {
              switchColor(e.target);
              selectToggle(25);
            }}
          >
            <div className="page3circle page3area">黃</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Page3Ques5;
