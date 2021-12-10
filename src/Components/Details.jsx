import React from 'react'
import { BsSuitHeart, BsShareFill, BsSuitHeartFill, BsArrowUpRightCircleFill, BsFillGrid3X2GapFill } from 'react-icons/bs'
import { RiShareBoxLine } from 'react-icons/ri'
import { FaList } from 'react-icons/fa'
import { GrTextAlignFull } from 'react-icons/gr'
import { BiTimeFive, BiTagAlt } from 'react-icons/bi'
import { Accordion } from 'react-bootstrap'
import Card1 from "./Elements/Card1";


export default function Details() {
    return (
        <div className="row mx-0 justify-content-center mb-5 ">
            <div className="col-lg-10 col-12">
                <div className="row mx-0 mt-5">
                    <div className="col-lg-5 col-12 order-lg-1 order-2 mt-lg-0 mt-3">
                        <div className="card card-dark d-lg-flex d-none">
                            <div className="card-footer">
                                <BsSuitHeart className="text-faded" />
                                <span className="text-faded text-small ms-2">36</span>
                            </div>
                            <img src={process.env.PUBLIC_URL + "images/monkey.png"} class="card-img-top" />
                        </div>

                        <Accordion className="mt-3" defaultActiveKey="0" >
                            <Accordion.Item variant="dark" eventKey="0" className="rounded-accourdian">
                                <Accordion.Header  ><span className="text-small-3  d-flex align-items-center"><BiTagAlt className=" fs-6 me-2" /> Properties </span></Accordion.Header>
                                <Accordion.Body >
                                    <div className="row mx-0">
                                        <div className="col-lg-4 col-md-6 col-6 p-1">
                                            <div className="blue-box">
                                                <span className="blue text-uppercase ">BAckground</span>
                                                <span className="text-small-2 pt-1">Punk Blue</span>
                                                <span className="text-small text-faded pt-1">6% have this trait</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-6 p-1">
                                            <div className="blue-box">
                                                <span className="blue text-uppercase ">BAckground</span>
                                                <span className="text-small-2 pt-1">Punk Blue</span>
                                                <span className="text-small text-faded pt-1">6% have this trait</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-6 p-1">
                                            <div className="blue-box">
                                                <span className="blue text-uppercase ">BAckground</span>
                                                <span className="text-small-2 pt-1">Punk Blue</span>
                                                <span className="text-small text-faded pt-1">6% have this trait</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-6 p-1">
                                            <div className="blue-box">
                                                <span className="blue text-uppercase ">BAckground</span>
                                                <span className="text-small-2 pt-1">Punk Blue</span>
                                                <span className="text-small text-faded pt-1">6% have this trait</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-6 p-1">
                                            <div className="blue-box">
                                                <span className="blue text-uppercase ">BAckground</span>
                                                <span className="text-small-2 pt-1">Punk Blue</span>
                                                <span className="text-small text-faded pt-1">6% have this trait</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-6 p-1">
                                            <div className="blue-box">
                                                <span className="blue text-uppercase ">BAckground</span>
                                                <span className="text-small-2 pt-1">Punk Blue</span>
                                                <span className="text-small text-faded pt-1">6% have this trait</span>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-lg-7 col-12 d-flex order-lg-2 order-1 flex-column">
                        <div className="card card-dark d-lg-none d-flex">
                            <div className="card-footer">
                                <BsSuitHeart className="text-faded" />
                                <span className="text-faded text-small ms-2">36</span>
                            </div>
                            <img src={process.env.PUBLIC_URL + "images/monkey.png"} class="card-img-top" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-2">
                            <a href="" className="text-small-2">Ape Kids Club (AKC)</a>
                            <div className="social-icons">
                                <a href=""><RiShareBoxLine /></a>
                                <a href=""><BsShareFill /></a>
                            </div>
                        </div>
                        <h3 className="fw-600 mt-2">Ape Kids Club #5438</h3>
                        <div className="d-flex align-items-center mt-2">
                            <span className="text-faded text-small-2 pe-2 ">Owned by</span>
                            <a href="" className="text-small-2">NFT_Sniffer</a>

                            <BsSuitHeartFill className="text-faded ms-4" />
                            <span className="text-faded text-small-2 ms-2">78 Followers</span>
                        </div>
                        <Accordion className="mt-4" defaultActiveKey="0">
                            <Accordion.Item variant="dark" eventKey="0" className="rounded-accourdian">
                                <Accordion.Header  ><span className="text-faded fw-400 text-small-3 d-flex align-items-center"><BiTimeFive className="text-faded fs-5 me-1" /> Sale ends December 13, 2021 at 10:53am PKT </span></Accordion.Header>
                                <Accordion.Body>

                                    <div className="d-flex flex-column mb-3">
                                        <span className="text-faded text-small-2 ms-2">Minimum bid</span>
                                        <div className="d-flex mt-2">
                                            <img src={process.env.PUBLIC_URL + "images/eth.svg"} className="eth-detials ms-2" />
                                            <h3 className="fw-600 ms-2 mb-0">2.5</h3>
                                            <div className="d-flex align-items-end pb-1">
                                                <span className="text-faded text-small-2 ms-2">($10,877.88)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn-1 fw-700 mt-1 col-lg-8 col-12">Buy Now</button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="mt-3" defaultActiveKey="0">
                            <Accordion.Item variant="dark" eventKey="0" className="rounded-accourdian">
                                <Accordion.Header  ><span className="text-small-3  d-flex align-items-center"><FaList className=" fs-6 me-2" /> Offers </span></Accordion.Header>
                                <Accordion.Body className="p-0">
                                    <div className="table-head">
                                        <div className="row mx-0">
                                            <div className="col-3 text-small-2 d-flex ps-2 px-0">Price</div>
                                            <div className="col text-small-2 d-flex  px-0">USD Price</div>
                                            <div className="col text-small-2 d-flex  px-0">Floor difference</div>
                                            <div className="col text-small-2 d-flex  px-0">Expiration</div>
                                            <div className="col  text-small-2 d-flex px-0">From</div>
                                        </div>
                                    </div>
                                    <div className="table-data">
                                        <div className="row mx-0">
                                            <div className="col-3 text-small-2 d-flex ps-2 px-0">
                                                <img src={process.env.PUBLIC_URL + "images/eth.svg"} className="eth-small " />
                                                <span className="fw-500 ms-1">0.000000 WETH</span>
                                            </div>
                                            <div className="col text-small-2 d-flex  px-0 text-faded"> {"<"} $0.01</div>
                                            <div className="col text-small-2 d-flex  px-0 text-faded"> 100.0% below</div>
                                            <div className="col text-small-2 d-flex  px-0 text-faded"> in 6 days</div>
                                            <div className="col text-small-2 d-flex  px-0 text-faded"> <a href="">Yoyoitsjo</a> </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                        <Accordion className="mt-3" defaultActiveKey="0" >
                            <Accordion.Item variant="dark" eventKey="0" className="rounded-accourdian">
                                <Accordion.Header  ><span className="text-small-3  d-flex align-items-center"><GrTextAlignFull className=" fs-6 me-2" /> Description </span></Accordion.Header>
                                <Accordion.Body >
                                    <div className="d-flex align-items-center mt-2">
                                        <span className="text-faded text-small-2 pe-2 ">Created by</span>
                                        <a href="" className="text-small-2"> ApeKidsClubTeam</a>
                                    </div>
                                    <p className="mb-0 mt-2 text-small-2 text-faded-2">
                                        In a magical world where apes ruled the metaverse, a magical thousand-year-old tree sprouted cute baby apes. A flock of storks were the loyal companions of the thousand-year-old tree. One sunny day, a total of 9999 baby apes were born with more than 309 traits!
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="col-12 px-2">
                    <Accordion className="mt-3" defaultActiveKey="0" >
                        <Accordion.Item variant="dark" eventKey="0" className="rounded-accourdian">
                            <Accordion.Header  ><span className="text-small-3  d-flex align-items-center"><BsFillGrid3X2GapFill className=" fs-6 me-2" /> More from this collection </span></Accordion.Header>
                            <Accordion.Body >
                                <div className="row mt-2 mx-0">
                                    <Card1 grid={0} />
                                    <Card1 grid={0} />
                                    <Card1 grid={0} />
                                    <Card1 grid={0} />
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <a href="/collection" className="btn-dark">View Collection</a>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
        </div>
    )
}
