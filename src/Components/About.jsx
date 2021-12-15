import React from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import ExploreCard from "./Elements/ExploreCard";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function About() {
  return (
    <div className="px-lg-5 px-4">
      <div className="row mx-0 mb-4">
        <div className="col-lg-6 col-12 d-flex flex-column pt-5 mt-lg-5 mt-0 order-lg-1 order-2">
          <h1>Building an open digital economy</h1>
          <p className="text-faded pt-3 mb-2">
            At OpenSea, we're excited about a brand new type of digital good
            called a non-fungible token, or <a href="">NFT</a> . NFTs have
            exciting new properties: they’re unique, provably scarce, tradeable,
            and usable across multiple applications. Just like physical goods,
            you can do whatever you want with them! You could throw them in the
            trash, gift them to a friend across the world, or go sell them on an
            open marketplace. But unlike physical goods, they're armed with all
            the programmability of digital goods.
          </p>
          <p className="text-faded pt-3 mb-2">
            A core part of our vision is that open protocols like Ethereum and
            interoperable standards like <a href=""> ERC-721 </a> and{" "}
            <a href=""> ERC-1155 </a> will enable vibrant new economies. We're
            building tools that allow consumers to trade their items freely,
            creators to launch new digital works, and developers to build rich,
            integrated marketplaces for their digital items.
          </p>
          <p className="text-faded pt-3 mb-2">
            We’re proud to be the first and largest marketplace for NFTs.
          </p>
        </div>
        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5 order-lg-2 order-1">
          <img
            src={process.env.PUBLIC_URL + "images/about.svg"}
            className="col-10"
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <div class="d-flex justify-content-between flex-wrap mx-0 my-4 px-lg-5 px-2 pt-4">
          <div className=" p-2 col">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "images/icon-timeline.svg"}
                className="create-img"
                alt=""
              />
              <span className="text-center fw-600 mb-2 fs-5">2017</span>
              <p className=" mb-0 d-flex text-center text-faded">Founded</p>
            </div>
          </div>
          <div className=" p-2 col">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "images/icon-employees.svg"}
                className="create-img"
                alt=""
              />
              <span className="text-center fw-600 mb-2 fs-5">70</span>
              <p className=" mb-0 d-flex text-center text-faded">Employees</p>
            </div>
          </div>
          <div className=" p-2 col">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "images/icon-users.svg"}
                className="create-img"
                alt=""
              />
              <span className="text-center fw-600 mb-2 fs-5">600K+</span>
              <p className=" mb-0 d-flex text-center text-faded">Users</p>
            </div>
          </div>
          <div className=" p-2 col">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "images/icon-collections.svg"}
                className="create-img"
                alt=""
              />
              <span className="text-center fw-600 mb-2 fs-5">2M+</span>
              <p className=" mb-0 d-flex text-center text-faded">Collections</p>
            </div>
          </div>
          <div className=" p-2 col">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "images/nfts.svg"}
                className="create-img"
                alt=""
              />
              <span className="text-center fw-600 mb-2 fs-5">80M+</span>
              <p className=" mb-0 d-flex text-center text-faded">NFTs</p>
            </div>
          </div>
          <div className=" p-2 col">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "images/icon-money.svg"}
                className="create-img"
                alt=""
              />
              <span className="text-center fw-600 mb-2 fs-5">$10B+</span>
              <p className=" mb-0 d-flex text-center text-faded">Volume</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center fw-600 fs-1">Our story</h2>
      <h6 className="text-center text-faded pt-2 ">
        {" "}
        Navigating the uncharted waters of non-fungible tokens
      </h6>
      <div className="row mx-0">
        <div className="col-lg-6 col-12">
          <img src="https://static.opensea.io/about/founders.png" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 col-12">
          <p className="text-faded pt-5">
            In 2017 the world witnessed the birth of CryptoKitties. For the
            first time, the world experienced a decentralized application built
            on blockchains but targetted towards a mainstream audience.
          </p>

          <p className="text-faded">
            While CryptoKitties felt like a toy to many, it represented a
            dramatic shift in how we interact with items in the digital world.
            While previous digital items lived on company servers,
            blockchain-native items lived on shared, public blockchains owned by
            no single party. They could be viewed anywhere, exchanged openly,
            and truly owned in a way that was never before possible in the
            digital world.
          </p>

          <p className="text-faded">
            Fascinated by the movement that was forming, Devin Finzer and Alex
            Atallah joined early adopter communities in Discord and started
            talking to users. With the OpenSea beta launch in December 2017, the
            first open marketplace for any non-fungible token on the Ethereum
            blockchain was born.
          </p>

          <p className="text-faded">
            Today, we’re proud to remain the largest general marketplace for u
            ser-owned digital items, supporting multiple blockchains, with the
            broadest set of categories and the best prices for new emerging
            digital item classes.
          </p>
          <p className="text-faded">
            As a company, we’re thrilled to be at the center of this growing
            industry, and will continue to invest in our core infrastructure as
            we build the most accessible marketplace for buyers, sellers, and
            creators.
          </p>
        </div>
      </div>
      <h2 class="text-center fw-600 fs-1 pt-5 mt-lg-5 mt-4">
        Backed by top firms & industry leaders
      </h2>
      <h6 class="text-center text-faded pt-2">
        who are helping us pave the way towards a brand new digital economy
      </h6>

      <div classname="container">
        <div className=" row mx-0 my-5 pb-51">
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img
              src="https://static.opensea.io/about/vc-andressen-horowitz.svg"
              alt="" className="w-75" /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img src="https://static.opensea.io/about/vc-coinbase.svg" alt="" className="w-75" /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img
              src="https://static.opensea.io/about/vc-ycombinator.svg"
              alt="" className="w-75" /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img
              src="https://static.opensea.io/about/vc-trust-wallet.svg"
              alt="" className="w-75"
            /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img src="https://static.opensea.io/about/vc-dapper.svg" alt="" className="w-75" /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img
              src="https://static.opensea.io/about/vc-quantstamp.svg"
              alt="" className="w-75"
            /></div>

          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img
              src="https://static.opensea.io/about/vc-blockstack.svg"
              alt="" className="w-75"
            /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img src="https://static.opensea.io/about/vc-NFTKred.svg" alt="" className="w-75" /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img
              src="https://static.opensea.io/about/vc-founders-fund.svg"
              alt="" className="w-75"
            /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img
              src="https://static.opensea.io/about/vc-blockchain-capital.svg"
              alt="" className="w-75"
            /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img
              src="https://static.opensea.io/about/vc-pascal-capital.svg"
              alt="" className="w-75"
            /></div>
          <div className=" col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-centre p-2">
            <img src="https://static.opensea.io/about/vc-1c.svg" alt="" className="w-25" />
          </div>
        </div>
      </div>


      <h2 class="text-center fw-600 fs-1 pt-5 mt-lg-5 mt-4">
        You might have read about us in the news
      </h2>
      <h6 class="text-center text-faded pt-2">
      If not, here are just a few stories about OpenSea</h6>
      <div class="row mx-0 w-100 my-5  ">
        <Carousel responsive={false} show={3} slide={1} infinite={false} transition={0.5} rightArrow={<div className="arrow-right"><MdKeyboardArrowRight /></div>} leftArrow={<div className="arrow-right"><MdKeyboardArrowLeft /></div>}>
          <ExploreCard slick={1} />
          <ExploreCard slick={1} />
          <ExploreCard slick={1} />
          <ExploreCard slick={1} />
          <ExploreCard slick={1} />
        </Carousel >
      </div>
    </div>
  );
}