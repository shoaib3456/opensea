import React from "react";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import { Carousel } from '@trendyol-js/react-carousel';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import TopCollectionsCard from "./Elements/TopCollectionsCard";
import CategoryCard from "./Elements/CategoryCard";
import ExploreCard from "./Elements/ExploreCard";

export default function Home() {



    return (
        <>
            <div className="hero-section mb-5">
                <img
                    src={process.env.PUBLIC_URL + "images/bg.jpg"}
                    className="bg"
                    alt=""
                />
                <div className="row content align-items-center mx-0">
                    <div className="col-lg-6 px-0  col-12">
                        <h1 className="fw-600 col-lg-10 col-12">
                            Discover, collect, and sell extraordinary NFTs
                        </h1>
                        <p className="text-faded fs-4 my-3 mb-md-5 col-lg-6 col-12">
                            On the world's first & largest NFT marketplace
                        </p>
                        <div className="col-lg-8 px-0 col-12 row mx-0  ">
                            <Link
                                to=""
                                className="btn-1 col-sm-6 col-12 mt-sm-0 mt-3 text-center "
                            >
                                Explore
                            </Link>
                            <Link
                                to=""
                                className="btn-dark col-sm-6 col-12 mt-sm-0 mt-3 text-center "
                            >
                                Create
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 px-0 mt-lg-0 mt-3">
                        <div className="hero-card">
                            <img
                                src={process.env.PUBLIC_URL + "images/bg.jpg"}
                                className="top"
                                alt=""
                            />
                            <div className="d-flex align-items-center justify-content-between p-3">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={process.env.PUBLIC_URL + "images/bg.jpg"}
                                        className="small-img"
                                        alt=""
                                    />
                                    <div className="d-flex flex-column ps-3">
                                        <span
                                            style={{ lineHeight: "20px" }}
                                            className="text-small-2 fw-600"
                                        >
                                            Make Yourself at Home #48
                                        </span>
                                        <Link to="" className="text-small-2 fw-600">
                                            brookedidonato
                                        </Link>
                                    </div>
                                </div>
                                <AiOutlineInfoCircle className="fs-5 text-faded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" d-flex justify-content-center align-items-center flex-wrap">
                <h2>Top collections over </h2>
                <select className="blue-select ps-2">
                    <option value=""> last 7 days</option>
                </select>
            </div>
            <div className="row mx-0 px-lg-5 px-2 my-5">
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
                <TopCollectionsCard />
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button className="btn-1 ">Go to Ranking</button>
            </div>

            <div className=" d-flex pt-5 justify-content-center align-items-center flex-wrap ">
                <h2>Trending in </h2>
                <select className="blue-select ps-2">
                    <option value=""> all Categories</option>
                </select>
            </div>
            <div class="row mx-0 my-4 px-lg-5 px-2 ">
                <Carousel responsive={false} show={3} slide={1} infinite={false} transition={0.5} rightArrow={<div className="arrow-right"><MdKeyboardArrowRight /></div>} leftArrow={<div className="arrow-right"><MdKeyboardArrowLeft /></div>}>

                    <ExploreCard slick={1} />
                    <ExploreCard slick={1} />
                    <ExploreCard slick={1} />
                    <ExploreCard slick={1} />
                    <ExploreCard slick={1} />

                </Carousel >
            </div>
            <div className=" d-flex pt-5 justify-content-center align-items-center ">
                <h2>Create and sell your NFTs </h2>
            </div>
            <div class="row mx-0 my-4 px-lg-5 px-2 pt-4">
                <div className="col-lg-3 col-12 p-2">
                    <div className="d-flex flex-column align-items-center">
                        <img src={process.env.PUBLIC_URL + "images/wallet.svg"} className="create-img" alt="" />
                        <span className="text-center fw-600 mb-2 ">Set up your wallet</span>

                        <p className=" mb-0 d-flex text-center text-faded" >Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the
                            wallet icon in the top right corner. Learn about the</p>

                        <a href=" wallets we support ">wallets we support.</a>
                    </div>
                </div>
                <div className="col-lg-3 col-12 p-2">
                    <div className="d-flex flex-column align-items-center">
                        <img src={process.env.PUBLIC_URL + "images/collection.svg"} className="create-img" alt="" />
                        <span className="text-center fw-600 mb-2 ">Create your collection</span>

                        <p className=" mb-0  text-center text-faded" >Once you’ve set
                            <a href=""> My collections </a>
                            of choice, connect it to OpenSea by clicking the
                            wallet icon in the top right corner. Learn about the</p>


                    </div>
                </div>
                <div className="col-lg-3 col-12 p-2">
                    <div className="d-flex flex-column align-items-center">
                        <img src={process.env.PUBLIC_URL + "images/nft.svg"} className="create-img" alt="" />
                        <span className="text-center fw-600 mb-2 ">Add your NFTs</span>

                        <p className=" mb-0 d-flex text-center text-faded" >Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the
                            wallet icon in the top right corner. Learn about the</p>


                    </div>
                </div>
                <div className="col-lg-3 col-12 p-2">
                    <div className="d-flex flex-column align-items-center">
                        <img src={process.env.PUBLIC_URL + "images/sale.svg"} className="create-img" alt="" />
                        <span className="text-center fw-600 mb-2 ">List them for sale</span>

                        <p className=" mb-0 d-flex text-center text-faded" >Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the
                            wallet icon in the top right corner. Learn about the</p>


                    </div>
                </div>
            </div>
            <div className=" d-flex pt-5 justify-content-center align-items-center pb-5">
                <h3>Browse by category </h3>
            </div>

            <div className="container mb-5">
                <div className="row mx-0">
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                </div>
            </div>
        </>
    );
}