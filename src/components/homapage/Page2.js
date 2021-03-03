import React from "react";
import { Parallax } from "rc-scroll-anim";

function Page2() {
  return (
    <>
      <div className=" container page2">
        <div className="row">
          <div className="d-flex mx-auto">
            <Parallax
              animation={{ y: 0, opacity: 0.8, playScale: [0, 0.5] }}
              style={{ transform: "translateY(150px)", opacity: 0 }}
              className="page2img1"
            />
            <Parallax
              animation={{ y: 0, opacity: 0.8, playScale: [0.1, 0.6] }}
              style={{ transform: "translateY(150px)", opacity: 0 }}
              className="page2img2"
            />
            <Parallax
              animation={{ y: 0, opacity: 0.8, playScale: [0.2, 0.7] }}
              style={{ transform: "translateY(150px)", opacity: 0 }}
              className="page2img3"
            />
            <div className="page2desBlock">
              <div className="adopt">
                <span>Adopt -</span>
              </div>
              <div className="page2des">
                <span>遇見，命中注定的那個牠</span>
              </div>
              <div>
                <a href="##" className="hvr-icon-forward page2des2 a">
                  立刻前往
                  <i className="fas fa-arrow-circle-right hvr-icon "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
