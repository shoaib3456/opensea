import React from 'react'

export default function About() {
    return (
        <div className='px-lg-5 px-4'>
            <div className="row mx-0 mb-4">
                <div className="col-lg-6 col-12 d-flex flex-column pt-5 mt-lg-5 mt-0 order-lg-1 order-2">
                    <h1>Building an open digital economy</h1>
                    <p className="text-faded pt-3 mb-2">At OpenSea, we're excited about a brand new type of digital good called a non-fungible token, or <a href="">NFT</a> . NFTs have exciting new properties: they’re unique, provably scarce, tradeable, and usable across multiple applications. Just like physical goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace. But unlike physical goods, they're armed with all the programmability of digital goods.</p>
                    <p className="text-faded pt-3 mb-2">A core part of our vision is that open protocols like Ethereum and interoperable standards like <a href=""> ERC-721 </a>  and <a href=""> ERC-1155 </a>  will enable vibrant new economies. We're building tools that allow consumers to trade their items freely, creators to launch new digital works, and developers to build rich, integrated marketplaces for their digital items.</p>
                    <p className="text-faded pt-3 mb-2">We’re proud to be the first and largest marketplace for NFTs.</p>
                </div>
                <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5 order-lg-2 order-1">
                    <img src={process.env.PUBLIC_URL + "images/about.svg"} className="col-10" alt="" />
                </div>
            </div>

            <div className="container">
                <div class="d-flex justify-content-between flex-wrap mx-0 my-4 px-lg-5 px-2 pt-4">
                    <div className=" p-2 col">
                        <div className="d-flex flex-column align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/icon-timeline.svg"} className="create-img" alt="" />
                            <span className="text-center fw-600 mb-2 fs-5">2017</span>
                            <p className=" mb-0 d-flex text-center text-faded" >Founded</p>
                        </div>
                    </div>
                    <div className=" p-2 col">
                        <div className="d-flex flex-column align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/icon-employees.svg"} className="create-img" alt="" />
                            <span className="text-center fw-600 mb-2 fs-5">70</span>
                            <p className=" mb-0 d-flex text-center text-faded" >Employees</p>
                        </div>
                    </div>
                    <div className=" p-2 col">
                        <div className="d-flex flex-column align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/icon-users.svg"} className="create-img" alt="" />
                            <span className="text-center fw-600 mb-2 fs-5">600K+</span>
                            <p className=" mb-0 d-flex text-center text-faded" >Users</p>
                        </div>
                    </div>
                    <div className=" p-2 col">
                        <div className="d-flex flex-column align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/icon-collections.svg"} className="create-img" alt="" />
                            <span className="text-center fw-600 mb-2 fs-5">2M+</span>
                            <p className=" mb-0 d-flex text-center text-faded" >Collections</p>
                        </div>
                    </div>
                    <div className=" p-2 col">
                        <div className="d-flex flex-column align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/nfts.svg"} className="create-img" alt="" />
                            <span className="text-center fw-600 mb-2 fs-5">80M+</span>
                            <p className=" mb-0 d-flex text-center text-faded" >NFTs</p>
                        </div>
                    </div>
                    <div className=" p-2 col">
                        <div className="d-flex flex-column align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/icon-money.svg"} className="create-img" alt="" />
                            <span className="text-center fw-600 mb-2 fs-5">$10B+</span>
                            <p className=" mb-0 d-flex text-center text-faded" >Volume</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
