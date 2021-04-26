import React, { useEffect, useState } from "react";

function Page1Carousel(props) {
  const { img1, img2, img3, img4 } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      const styles = document.querySelectorAll(".carousel-img");
      styles.forEach((v) => {
        let opacity = +v.style.opacity;
        let left = +v.style.left.split("vw")[0];

        if (left === 0) {
          opacity === 0 ? (v.style.left = "120vw") : (v.style.opacity = "0");
        } else {
          v.style.left = left - 60 + "vw";
          v.style.opacity = " 0.8";
        }
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="d-flex position-relative carousel-area">
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
    </>
  );
}

export default Page1Carousel;
