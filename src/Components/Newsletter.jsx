import React from 'react'

export default function Newsletter() {
    return (
        <div className="px-lg-5 px-4">
            <div className="row mx-0 mb-5">
                <div className="col-lg-6 col-12 d-flex flex-column pt-5 mt-lg-5 mt-0 order-lg-1 order-2">
                    <h1>Sign up for The Tide, OpenSea’s newsletter!</h1>
                    <p className="text-faded pt-3 mb-2">
                        Sign up to receive our monthly newsletter, featuring updates from the team, new decentralized applications and NFT projects, and trends we’re seeing in the space.
                    </p>

                    <form action="" className='d-flex flex-column align-items-start'>
                        <input type="text" className="form-control mt-3 py-3" placeholder="Enter your email address.." />
                        <div className="btn-1 mt-3">Subscribe</div>
                    </form>
                </div>
                <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5 order-lg-2 order-1">
                    <img
                        src={process.env.PUBLIC_URL + "images/newsletter.png"}
                        className="col-10"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
