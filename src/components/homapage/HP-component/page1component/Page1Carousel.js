import React, { useEffect, useState } from "react";

function Page1Carousel(props) {
  const { img1, img2, img3, img4 } = props;

  const display = `<div class="d-flex page1img-wrap position-absolute">
  <img src=${img1} alt="" />
  <img src=${img2} alt="" />
  <img src=${img3} alt="" />
  <img src=${img4} alt="" />
  <img src=${img1} alt="" />
</div>`;

  useEffect(() => {
    const slr = (id) => document.querySelector(id);
    let newIndex = 1;
    let slide = -60;

    const interval = setInterval(() => {
      slr(".page1img-wrap").style.transform = `translate(${slide}vw, 0px)`;
      newIndex++;
      slide = newIndex * -60;

      if (newIndex === 5) {
        newIndex = 0;
        slide = 0;

        setTimeout(() => {
          slr(".page1right-wrap").innerHTML = display;
          slr(".page1img-wrap").style.transform = `translate(${slide}vw, 0px)`;
        }, 1200);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="page1right-wrap position-relative">
        <div className="d-flex page1img-wrap position-absolute">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
}

export default Page1Carousel;
