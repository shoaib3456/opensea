import React from "react";

export default function TopCollectionsCard(){
    return(
        <div className="col-lg-4 col-12 p-2">
          <div className=" w-100 d-flex align-items-center border-bottom py-3 px-3">
            <div className="d-flex justify-content-center fw-600 "> 1</div>
            <div className="d-flex justify-content-center ps-3">
              <img
                src={process.env.PUBLIC_URL + "images/bg.jpg"}
                className="small-img"
                alt=""
              />
            </div>
            <div className="d-flex justify-content-between col ps-3">
              <div className="d-flex flex-column  ">
                <span className="first hesding"> CryptoPunks</span>
                <span className="text-faded fw-600 text-small-3 d-flex align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "images/eth.svg"}
                    className="eth-small me-2 "
                  />
                  98,90.066
                </span>
              </div>
              <div className="d-flex  align-items-center">
                <span class="text-success d-flex  align-items-center fw-600  fs-9">+14354%
                </span>
              </div>
            </div>
          </div>
        </div>
    )
}