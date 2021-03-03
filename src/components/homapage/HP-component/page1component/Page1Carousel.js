import React, { useEffect } from "react";

function Page1Carousel(props) {
  const { img1, img2, img3, img4 } = props;

  useEffect(() => {
    let newIndex = 0;

    const interval = setInterval(() => {
      newIndex > 3 && (newIndex = 0);

      let slide = newIndex * -60;
      document.querySelector(".page1img-wrap").style.left = slide + "vw";
      newIndex++;
    }, 2000);
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
        </div>
      </div>
    </>
  );
}

export default Page1Carousel;
