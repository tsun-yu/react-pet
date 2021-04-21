import React from "react";
import { useHistory } from "react-router-dom";

function NotFound(props) {
  let history = useHistory();
  return (
    <>
      <div className="notFound">
        <div className="updating my-5">持續更新中...</div>
        <button className="btn-green" onClick={() => history.push("/")}>
          回首頁
        </button>
      </div>
    </>
  );
}

export default NotFound;
