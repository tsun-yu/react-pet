import React from "react";
import { withRouter } from "react-router-dom";

function DonateButton(props) {
  return (
    <>
      <div className="position-fixed donateButtonArea">
        <div className="donateButtonArea-1 position-relative">
          <div
            className="donateButton position-absolute d-flex justify-content-center align-items-center hvr-reveal a"
            onClick={() => {
              props.history.push("/donate");
            }}
          >
            捐款
          </div>
          <div
            className="adoptionButton position-absolute d-flex justify-content-center align-items-center hvr-radial-out a"
            onClick={() => {
              props.history.push("/adoptionMain");
            }}
          >
            領養
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(DonateButton);
