import React from "react";
import { withRouter } from "react-router";

function Page1Text(props) {
  const { des1, des2, class1 } = props;
  return (
    <>
      <div className="page1left-1">
        <div className={class1}>{des1}</div>
        <div className="page1des2 d-flex flex-column justify-content-around">
          <div className="hide">fuck</div>
          <div>{des2}</div>
          <div
            onClick={() => {
              props.history.push("/adoptionmain");
            }}
            className="text-right"
          >
            <div className="page1des3 mr-2 a hvr-underline-from-center">
              >了解更多
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Page1Text);
