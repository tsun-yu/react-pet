import React, { useState, useEffect } from "react";
import { Parallax } from "rc-scroll-anim";

function HomeFooter() {
  const scroll2Top = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {});
  return (
    <>
      <footer className="navbar-fixed-bottom homeFt_bg ">
        <div className=" homeFtBlock position-relative">
          <div className="row col-6 justify-content-center">
            <div className="col-3"></div>
            <div className="col">
              <div className="homeFtSlogan">
                <div>給愛一個家,</div>
                <div className="text-right pt-3">也把想要的都打包回家。</div>
              </div>
            </div>
          </div>
          <Parallax
            animation={{ x: "200%", opacity: 1, playScale: [0, 1] }}
            style={{ transform: "translateX(-0)", opacity: 1 }}
            className="homeFtTruck position-absolute"
          />
          <div className="homeFtTree position-absolute"></div>
        </div>
        <div className="homeFtBar d-flex position-relative">
          <div className="row col-5 justify-content-start">
            <div className="col-3"></div>
            <div className="col-3 justify-content-center">
              <div className="homeFtIcon d-flex justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="69.186"
                  height="61.361"
                  viewBox="0 0 69.186 61.361"
                >
                  <g id="LOGO" transform="translate(-0.118 -0.073)">
                    <path
                      id="Path_1075"
                      data-name="Path 1075"
                      d="M63.778,13.029l-.1-.069L41.1,28.753l-3.283,2.3V67.437a1.72,1.72,0,0,0,1.72,1.72H88.016a1.72,1.72,0,0,0,1.72-1.72V31.153l-3.44-2.4Zm5.9,51.127L65.94,68.825l-2.167-1.737L44.211,51.413A12.045,12.045,0,1,1,59.269,32.608l2.922,2.347,1.578-1.966.767-.958a12.04,12.04,0,0,1,14.743-3.273,12.2,12.2,0,0,1,2.2,1.4A12.021,12.021,0,0,1,85.78,41.835a1.229,1.229,0,1,1-2.413-.462,9.583,9.583,0,0,0-16.9-7.811l-2.686,3.354-1.2,1.494-4.848-3.882A9.588,9.588,0,0,0,45.747,49.5L63.778,63.935l1.786,1.43,2.2-2.745a1.229,1.229,0,1,1,1.919,1.536ZM82.7,44.567a7.714,7.714,0,0,1-.167,1.079A6.46,6.46,0,0,1,80.9,48.754a2.9,2.9,0,0,1-2,.956,1.966,1.966,0,0,1-.464-.054,2.67,2.67,0,0,1-1.813-1.9,6.352,6.352,0,0,1-.155-3.194c.022-.108.039-.216.066-.324a6.47,6.47,0,0,1,1.637-3.1,2.664,2.664,0,0,1,2.457-.9c1.423.332,2.251,2.175,2.071,4.335ZM75.654,42.3a7.05,7.05,0,0,1-.956,2.263,3.491,3.491,0,0,1-2.7,1.8,2.069,2.069,0,0,1-.457-.052,2.621,2.621,0,0,1-1.747-1.747,6.364,6.364,0,0,1-.155-3.666,6.472,6.472,0,0,1,1.646-3.113,2.66,2.66,0,0,1,2.457-.9c1.659.391,2.514,2.821,1.907,5.418ZM66.9,44.493v.074c-.118,2.558-1.489,4.593-3.111,4.647h-.14c-1.634-.059-2.9-2.118-2.909-4.652v-.295A6.438,6.438,0,0,1,61.748,40.9a2.742,2.742,0,0,1,2.039-1.354h.206a2.677,2.677,0,0,1,2.145,1.516,6.492,6.492,0,0,1,.754,3.428ZM80.345,65.38a5.091,5.091,0,0,1-2.548.693,4.721,4.721,0,0,1-.722-.059,5.123,5.123,0,0,1-2.7-1.278l-2.74-2.457a2.659,2.659,0,0,0-1.865-.688l-4.652.128a5.065,5.065,0,0,1-1.339-.138,5.16,5.16,0,0,1-2.981-2.005,5.086,5.086,0,0,1-.654-4.728A9.065,9.065,0,0,1,61.915,51.9l.071-.074q.909-.855,1.789-1.538c2.516-1.966,4.848-2.863,7.077-2.759,3.312.16,5.448,2.6,6.723,4.054a11.6,11.6,0,0,0,.8.865l.1.091.079.113c.41.58.8,1.1,1.177,1.609,1.447,1.922,2.6,3.457,3.044,5.642.02.1.034.2.049.3a5.015,5.015,0,0,1-2.494,5.175Zm7-12.547c-1.015,1.845-2.639,3-4.01,3a2.111,2.111,0,0,1-1.025-.246c-1.489-.821-1.651-3.389-.364-5.725a6.46,6.46,0,0,1,2.415-2.551,2.673,2.673,0,0,1,2.619-.2c1.482.808,1.644,3.376.356,5.713Z"
                      transform="translate(-28.914 -10.18)"
                      fill="none"
                    />
                    <path
                      id="Path_1076"
                      data-name="Path 1076"
                      d="M70.718,25.4l-7.1-4.956L37.406,2.143h-.022a.983.983,0,0,0-.12-.066.737.737,0,0,0-.1-.049c-.037-.015-.074-.025-.113-.037a.413.413,0,0,0-.115-.034.845.845,0,0,0-.111-.012H36.7a.953.953,0,0,0-.118,0,.875.875,0,0,0-.115.012.507.507,0,0,0-.115.032.868.868,0,0,0-.113.037l-.1.049c-.039.02-.081.042-.12.066L36,2.156,9.841,20.442l-7.288,5.1a1.229,1.229,0,0,0,1.408,2.012l4.423-3.1V59.126A4.177,4.177,0,0,0,12.561,63.3H61.042a4.177,4.177,0,0,0,4.177-4.177V24.563l4.094,2.858a1.228,1.228,0,1,0,1.406-2.015ZM62.762,36.257V59.126a1.72,1.72,0,0,1-1.72,1.72H12.566a1.72,1.72,0,0,1-1.72-1.72V22.737l3.283-2.3L36.7,4.66l.1.069,22.52,15.726,3.44,2.4Z"
                      transform="translate(-1.94 -1.87)"
                      fill="#a5a58d"
                    />
                    <path
                      id="Path_1077"
                      data-name="Path 1077"
                      d="M75.219,107.074a1.229,1.229,0,0,0-1.72.189l-2.2,2.745-1.786-1.43L51.478,94.139A9.588,9.588,0,1,1,63.464,79.169l4.848,3.882,1.2-1.494L72.194,78.2a9.583,9.583,0,0,1,16.9,7.811,1.229,1.229,0,1,0,2.413.462,12.021,12.021,0,0,0-4.3-11.684,12.2,12.2,0,0,0-2.2-1.4,12.04,12.04,0,0,0-14.743,3.273l-.767.958-1.578,1.966-2.931-2.347A12.045,12.045,0,0,0,49.935,96.051L69.5,111.72l2.167,1.737,3.735-4.669A1.229,1.229,0,0,0,75.219,107.074Z"
                      transform="translate(-34.645 -54.823)"
                      fill="#a5a58d"
                    />
                    <path
                      id="Path_1078"
                      data-name="Path 1078"
                      d="M150.357,165.907c-.455-2.189-1.6-3.725-3.042-5.669-.376-.506-.767-1.03-1.177-1.609l-.079-.113-.1-.091a11.6,11.6,0,0,1-.8-.865c-1.275-1.457-3.411-3.895-6.723-4.054-2.229-.1-4.561.8-7.077,2.759q-.877.683-1.789,1.538l-.071.074a9.065,9.065,0,0,0-1.774,2.949,5.086,5.086,0,0,0,.654,4.728,5.16,5.16,0,0,0,2.981,2.005,5.065,5.065,0,0,0,1.339.138l4.652-.128a2.659,2.659,0,0,1,1.865.688l2.74,2.457a5.123,5.123,0,0,0,2.7,1.278,4.726,4.726,0,0,0,.722.059,5.091,5.091,0,0,0,2.548-.693,5.015,5.015,0,0,0,2.494-5.16C150.391,166.111,150.376,166.013,150.357,165.907Z"
                      transform="translate(-96.489 -116.185)"
                      fill="#a5a58d"
                    />
                    <path
                      id="Path_1079"
                      data-name="Path 1079"
                      d="M134.313,121.16h-.206a2.746,2.746,0,0,0-2.04,1.354,6.438,6.438,0,0,0-1.007,3.364v.295c0,2.533,1.275,4.593,2.909,4.652h.14c1.622-.054,2.993-2.089,3.111-4.647V126.1a6.492,6.492,0,0,0-.764-3.44A2.68,2.68,0,0,0,134.313,121.16Z"
                      transform="translate(-99.243 -91.793)"
                      fill="#a5a58d"
                    />
                    <path
                      id="Path_1080"
                      data-name="Path 1080"
                      d="M168.368,111.088a6.472,6.472,0,0,0-1.637,3.108,6.364,6.364,0,0,0,.155,3.666,2.621,2.621,0,0,0,1.747,1.747,2.069,2.069,0,0,0,.457.052,3.491,3.491,0,0,0,2.7-1.8,7.05,7.05,0,0,0,.956-2.263c.607-2.6-.246-5.027-1.9-5.406A2.673,2.673,0,0,0,168.368,111.088Z"
                      transform="translate(-126 -83.48)"
                      fill="#a5a58d"
                    />
                    <path
                      id="Path_1081"
                      data-name="Path 1081"
                      d="M196.368,124.7a6.47,6.47,0,0,0-1.634,3.108c-.027.108-.044.216-.066.324a6.352,6.352,0,0,0,.155,3.194,2.652,2.652,0,0,0,1.813,1.9,1.966,1.966,0,0,0,.464.054,2.9,2.9,0,0,0,2-.956,6.46,6.46,0,0,0,1.627-3.108,7.716,7.716,0,0,0,.167-1.079c.179-2.16-.649-4-2.071-4.335A2.633,2.633,0,0,0,196.368,124.7Z"
                      transform="translate(-147.12 -93.742)"
                      fill="#a5a58d"
                    />
                    <path
                      id="Path_1082"
                      data-name="Path 1082"
                      d="M217.1,151.313a6.46,6.46,0,0,0-2.415,2.551c-1.288,2.337-1.125,4.914.364,5.725a2.111,2.111,0,0,0,1.025.246c1.371,0,3-1.157,4.01-3,1.288-2.337,1.125-4.914-.364-5.725A2.694,2.694,0,0,0,217.1,151.313Z"
                      transform="translate(-161.663 -114.191)"
                      fill="#a5a58d"
                    />
                  </g>
                </svg>
              </div>
              <div className="d-flex mt-3 justify-content-around">
                <svg
                  id="_001-instagram-logo"
                  data-name="001-instagram-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 33.476 33.477"
                >
                  <path
                    id="Path_219"
                    data-name="Path 219"
                    d="M24.238,0h-15A9.249,9.249,0,0,0,0,9.238v15a9.249,9.249,0,0,0,9.238,9.238h15a9.249,9.249,0,0,0,9.238-9.238v-15A9.249,9.249,0,0,0,24.238,0Zm6.268,24.238a6.275,6.275,0,0,1-6.268,6.268h-15A6.275,6.275,0,0,1,2.97,24.238v-15A6.275,6.275,0,0,1,9.238,2.97h15a6.275,6.275,0,0,1,6.268,6.268v15Z"
                    fill="#fff1e6"
                  />
                  <path
                    id="Path_220"
                    data-name="Path 220"
                    d="M49.594,40.97A8.626,8.626,0,1,0,58.22,49.6,8.636,8.636,0,0,0,49.594,40.97Zm0,14.281A5.656,5.656,0,1,1,55.25,49.6,5.662,5.662,0,0,1,49.594,55.251Z"
                    transform="translate(-32.856 -32.857)"
                    fill="#fff1e6"
                  />
                  <path
                    id="Path_221"
                    data-name="Path 221"
                    d="M121.1,28.251a2.177,2.177,0,1,0,1.541.638A2.187,2.187,0,0,0,121.1,28.251Z"
                    transform="translate(-95.373 -22.657)"
                    fill="#fff1e6"
                  />
                </svg>
                <svg
                  id="_002-line-logo"
                  data-name="002-line-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 35.252 33.681"
                >
                  <path
                    id="Path_222"
                    data-name="Path 222"
                    d="M17.626,5.265C7.907,5.265,0,11.85,0,19.944c0,7.905,6.864,14.2,15.966,14.648a1.119,1.119,0,1,0,.109-2.235C8.187,31.971,2.238,26.634,2.238,19.944c0-6.86,6.9-12.441,15.388-12.441s15.388,5.581,15.388,12.441c0,6.384-8.151,13.313-16.2,16.859a1.119,1.119,0,1,0,.9,2.048,41.6,41.6,0,0,0,11.679-7.7c3.833-3.695,5.859-7.57,5.859-11.206C35.252,11.85,27.345,5.265,17.626,5.265Z"
                    transform="translate(0 -5.265)"
                    fill="#fff1e6"
                  />
                  <path
                    id="Path_223"
                    data-name="Path 223"
                    d="M50.62,77.732a.884.884,0,0,0-.711-.34.868.868,0,0,0-.708.348,1.4,1.4,0,0,0-.24.881v5.839a1.37,1.37,0,0,0,.257.912,1.051,1.051,0,0,0,.846.328h3.173a.936.936,0,0,0,.706-.264.907.907,0,0,0,.252-.659.936.936,0,0,0-.253-.661.919.919,0,0,0-.7-.274H50.87V78.62A1.369,1.369,0,0,0,50.62,77.732Z"
                    transform="translate(-41.656 -66.631)"
                    fill="#fff1e6"
                  />
                  <path
                    id="Path_224"
                    data-name="Path 224"
                    d="M88.343,77.392a.869.869,0,0,0-.706.347,1.409,1.409,0,0,0-.244.882v5.974a1.38,1.38,0,0,0,.249.886.862.862,0,0,0,.7.348.883.883,0,0,0,.713-.345,1.41,1.41,0,0,0,.25-.889V78.62a1.39,1.39,0,0,0-.251-.888A.889.889,0,0,0,88.343,77.392Z"
                    transform="translate(-74.355 -66.631)"
                    fill="#fff1e6"
                  />
                  <path
                    id="Path_225"
                    data-name="Path 225"
                    d="M109.21,81.357l1.9,3.415,0,.008.135.223.08.132a2.03,2.03,0,0,0,.272.357,1.106,1.106,0,0,0,.36.254,1.129,1.129,0,0,0,.437.083c.376,0,1.006-.168,1.006-1.3V78.571a1.374,1.374,0,0,0-.221-.838.825.825,0,0,0-.688-.34.814.814,0,0,0-.676.339,1.39,1.39,0,0,0-.22.839v3.375l-1.968-3.481-.1-.186-.1-.188a2.207,2.207,0,0,0-.23-.343,1.007,1.007,0,0,0-.309-.254.908.908,0,0,0-.443-.1.974.974,0,0,0-.6.208,1.1,1.1,0,0,0-.379.514l0,.008a2.2,2.2,0,0,0-.085.68v5.851a1.393,1.393,0,0,0,.222.829l0,.006a.855.855,0,0,0,1.365,0,1.353,1.353,0,0,0,.235-.839v-3.3Z"
                    transform="translate(-91.361 -66.631)"
                    fill="#fff1e6"
                  />
                  <path
                    id="Path_226"
                    data-name="Path 226"
                    d="M159.2,80.033a.9.9,0,0,0,.683-.254.892.892,0,0,0,.235-.638.88.88,0,0,0-.236-.633.9.9,0,0,0-.682-.255H155.73a1.272,1.272,0,0,0-.6.131.878.878,0,0,0-.4.457,1.715,1.715,0,0,0-.106.653v5.7a1.362,1.362,0,0,0,.26.913,1.045,1.045,0,0,0,.843.327H159.3a.9.9,0,0,0,.686-.262.908.908,0,0,0,.236-.64.926.926,0,0,0-.234-.651.906.906,0,0,0-.688-.264h-2.764V83.053h2.426a.863.863,0,0,0,.674-.26.9.9,0,0,0,.222-.621.828.828,0,0,0-.9-.873h-2.426V80.032H159.2Z"
                    transform="translate(-131.556 -67.363)"
                    fill="#fff1e6"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="row col-7 mt-4">
            <div className="col-3"></div>
            <div className="homeFtContact">
              TEL
              <br />
              02-22455250
              <br />
              <br />
              MAIL
              <br />
              Stroymao@gmail.com
            </div>
          </div>
          <div className="position-absolute straymao2020 d-block">
            STRAYMAO©2020
          </div>
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="goBackToTop"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="200"
              viewBox="0 0 47 214.5"
              className="position-absolute homeFtPagetop"
            >
              <text
                id="PAGE_TOP"
                data-name="PAGE TOP"
                transform="translate(47 96.5) rotate(90)"
                fill="#fff1e6"
                fontSize="20"
                fontFamily="Roboto-Regular, Roboto"
                letterSpacing="0em"
              >
                <tspan x="0" y="21">
                  PAGE TOP
                </tspan>
              </text>
              <line
                id="Line_22"
                data-name="Line 22"
                y2="84.5"
                transform="translate(31)"
                fill="none"
                stroke="#fff1e6"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomeFooter;
