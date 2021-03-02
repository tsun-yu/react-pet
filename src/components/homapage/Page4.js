import React, { useState, useEffect } from 'react'
import Page4Card from './HP-component/Page4Card'
import QueueAnim from 'rc-queue-anim'

function Page4(props) {
  return (
    <>
      <div className="page4title my-5">
        <div className="page4Store">
          <span>Store -</span>
        </div>
        <div className="page4slogan">您需要的一切, 我們都準備好了。</div>
      </div>
      <div className="container page4">
        <div className="row align-items-center">
          <Page4Card
            img="./image/homepage/homepage4-1.png"
            label="狗 狗 用 品"
            cardClass="col-lg-3 page4product hvr-float-shadow"
            labelClass="page4label label1 "
            product="最方便自動餵食器"
          />

          <Page4Card
            img="./image/homepage/homepage4-2.png"
            label="貓 咪 用 品"
            cardClass="hvr-float-shadow col-lg-3 page4product mt-5"
            labelClass="page4label label2 "
            product="最好用貓砂盆"
          />

          <Page4Card
            img="./image/homepage/homepage4-3.png"
            label="寵 物 玩 具"
            cardClass="hvr-float-shadow col-lg-3 page4product"
            labelClass="page4label label1"
            product="最好玩布娃娃"
          />

          <Page4Card
            img="./image/homepage/homepage4-4.png"
            label="寵 物 飼 料"
            cardClass="hvr-float-shadow col-lg-3 page4product mt-5"
            labelClass="page4label label2"
            product="最營養的寵物飼料"
          />
        </div>
      </div>
    </>
  )
}

export default Page4
