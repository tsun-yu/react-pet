import React, { useState, useEffect } from "react";

function Page5Card(props) {
  const { page5cardClass, img, date, title } = props;
  return (
    <>
      <div className={page5cardClass}>
        <div className="page5cardImg mx-auto">
          <img className="" src={img} />
        </div>
        <div className="page5cardDes mx-auto d-flex">
          <div className="page5cardDate my-auto d-flex flex-column justify-content-center">
            <span>2020.</span>
            <span className="text-right">{date}</span>
          </div>
          <div className="page5cardContent my-auto d-flex flex-column justify-content-between">
            <span className="text-center ">日常</span>
            <span className="page5cardTopic text-right">{title}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page5Card;
