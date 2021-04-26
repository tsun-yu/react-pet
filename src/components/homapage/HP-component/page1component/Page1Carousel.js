import React, { useEffect, useState } from "react";

function Page1Carousel(props) {
  const { img1, img2, img3, img4 } = props;

  useEffect(() => {
    const slr = (id) => document.querySelector(id);
    let newIndex = 1;
    let slide = -60;

    const interval = setInterval(() => {
      const styles = document.querySelectorAll(".carousel-img");
      // console.log(styles);
      styles.forEach((v, i) => {
        let opacity = +v.style.opacity;
        let left = +v.style.left.split("vw")[0];
        console.log(opacity);
        if (opacity != 0) {
          left === 0
            ? (v.style.opacity = "0")
            : (v.style.left = left - 60 + "vw");
        } else if (left === 0) {
          v.style.left = "120vw";
        } else {
          v.style.left = left - 60 + "vw";
          v.style.opacity = " 0.8";
        }
      });
    }, 1800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="page1right-wrap ">
        <div className="d-flex page1img-wrap  position-relative">
          <img
            src={img1}
            className="position-absolute carousel-img"
            style={{ left: "0vw", opacity: "0.8" }}
            alt=""
          />
          <img
            src={img2}
            className="position-absolute carousel-img"
            style={{ left: "60vw", opacity: "0.8" }}
            alt=""
          />
          <img
            src={img3}
            className="position-absolute carousel-img"
            style={{ left: "120vw", opacity: "0.8" }}
            alt=""
          />
          <img
            src={img4}
            className="position-absolute carousel-img"
            style={{ left: "180vw", opacity: "0.8" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Page1Carousel;
