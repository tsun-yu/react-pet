import React from "react";
import Page3Topic from "./Page3Topic";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Page3Ques6(props) {
  const { pet, select } = props;

  const postResultToDB = async (select) => {
    const url = "http://localhost:3001/straymao/homepage/question";
    const data = { arr: select };
    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log("lll:", data);
    } catch (error) {
      //setError(error)
    }
  };
  return (
    <>
      <div className="page3single ">
        <Page3Topic title="體型" />
        {pet}
      </div>
      <div
        onClick={() => {
          props.history.push("/adoptionmain");
        }}
      >
        <div className="forward position-absolute d-flex flex-column justify-content-center align-items-center hvr-bounce-to-right">
          <IoIosArrowDroprightCircle
            size="5rem"
            color=" #cb997e"
            className="forward2"
          />
          <div
            className="forward2adoption"
            onClick={() => {
              postResultToDB(select);
            }}
          >
            開 始 媒 合
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { pet: store.pet };
};
export default withRouter(
  connect(
    mapStateToProps, // mapDispatchToProps,
    //actionCreators
    {}
  )(Page3Ques6)
);
