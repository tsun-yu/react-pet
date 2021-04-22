import React, { useEffect } from "react";
import Page1Carousel from "./HP-component/page1component/Page1Carousel";
import Page1Text from "./HP-component/page1component/Page1Text";

function Page1(props) {
  useEffect(() => {
    let newIndex = 0;

    const interval = setInterval(() => {
      newIndex > 3 && (newIndex = 0);
      let slide = newIndex * -70;
      document.querySelector(".page1left-wrap").style.top = slide + "vh";
      newIndex++;
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {/* scroll svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="170.71"
        viewBox="0 0 47 170.71"
        className="page1scroll position-absolute"
      >
        <g
          id="Group_1828"
          data-name="Group 1828"
          transform="translate(-66.5 -663)"
        >
          <text
            id="SCROLL"
            transform="translate(113.5 663) rotate(90)"
            fill="#a5a58d"
            fontSize="20"
            fontFamily="Roboto-Regular, Roboto"
            letterSpacing="0em"
          >
            <tspan x="0" y="21">
              SCROLL
            </tspan>
          </text>
          <line
            id="Line_1"
            data-name="Line 1"
            y2="84.5"
            transform="translate(97.5 748.5)"
            fill="none"
            stroke="#707070"
            strokeWidth="1"
          />
          <line
            id="Line_52"
            data-name="Line 52"
            y1="13"
            x2="6"
            transform="translate(97.5 820.5)"
            fill="none"
            stroke="#707070"
            strokeWidth="1"
          />
        </g>
      </svg>
      <div className="d-flex page1 position-relative">
        <div className="page1left position-relative">
          <div className="position-absolute page1left-wrap">
            <Page1Text
              class1="page1des"
              des1="Love them likes family."
              des2="給他們一個機會, 擁有一個家。"
            />
            <Page1Text
              class1="page1des sm"
              des1="It's not coincidence about meet our furbaby."
              des2="與毛孩的相遇，從來都不是巧合。"
            />
            <Page1Text
              class1="page1des"
              des1="Love them likes family."
              des2="給他們一個機會, 擁有一個家。"
            />
            <Page1Text
              class1="page1des sm"
              des1="It's not coincidence about meet our furbaby."
              des2="與毛孩的相遇，從來都不是巧合。"
            />
          </div>
        </div>
        <div className="page1right position-absolute">
          <Page1Carousel
            img1="../../image/homepage/homepage1-1.png"
            img2="../../image/homepage/homepage1-2.png"
            img3="../../image/homepage/homepage1-3.png"
            img4="../../image/homepage/homepage1-4.png"
          />
        </div>
      </div>
    </>
  );
}

export default Page1;
