import React from "react";
import "../../styles/custom.scss";

function MainContent(props) {
  return (
    <>
      <main className="flex-shrink-0">
        <div>{props.children}</div>
      </main>
    </>
  );
}

export default MainContent;
