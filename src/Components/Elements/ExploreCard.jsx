import React from 'react'

export default function ExploreCard(props) {
    return (
        <div className={props.slick == 1 ? "p-2 col-12": " col-lg-4 col-md-3 p-3 col-12"}>
            <div className="explore-card">
                <div className="top">
                    <img src={process.env.PUBLIC_URL + "images/lion.png"} alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column pb-4">
                    <img src={process.env.PUBLIC_URL + "images/lion.png"} className="small-logo" alt="" />
                    <div className="d-flex flex-column align-items-center">
                        <span className="fw-600 ">Lazy Lions</span>
                        <span><span className="text-faded text-small-2 fw-500">by</span><a href="" className="text-small-2  ps-1 fw-500">Lazy-Lions</a></span>
                    </div>
                    <p className="text-faded col-lg-9 mt-3 mb-0 col-12 text-center">Lazy Lions is the NFT community for 👑's</p>
                    <p className="text-faded col-lg-9  my-0 col-12 text-center">Check out [Lazy Lions Bungalows](</p>
                </div>
            </div>
        </div>
    )
}
