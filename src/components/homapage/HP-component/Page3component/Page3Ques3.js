import React from "react";
import { connect } from "react-redux";

function Page3Ques3(props) {
  const { city, area } = props;

  return (
    <>
      <div className="page3single ">
        <div className="text-center">
          <div className="page3big mb-3 mt-5">{area}</div>
          <div className="page3small mb-5">一步一步，　找到愛帶回家。</div>
          <div className="page3big">{city}</div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (store) => {
  return { city: store.city, area: store.area };
};
export default connect(
  mapStateToProps // mapDispatchToProps,
  //actionCreators
)(Page3Ques3);
