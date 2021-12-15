import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube, AiOutlineMail } from 'react-icons/ai'
import { FaDiscord, FaRedditAlien } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="footer mt-5">
            <div className="container">
                <div className="row mx-0 py-lg-5 py-3 border-bottom-white ">
                    <div className="col-lg-6 col-12 d-flex flex-column pt-lg-0 pt-2">
                        <span className="fw-600 fs-5 text-lg-start text-center col-12">Stay in the loop</span>
                        <p className=" pt-2 text-lg-start text-center">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
                        <div className="d-flex py-lg-0 py-2 ">
                            <input type="text" className="form-control col me-2" placeholder="Your email address" />
                            <button className="btn-1">Sign up</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 ps-lg-5 ps-1 d-flex flex-column pt-lg-0 pt-3">
                        <span className="fw-600 fs-5 text-lg-start text-center">Join the community</span>
                        <div className="d-flex pt-3 justify-content-lg-start justify-content-center">
                            <a href="" className="add-btn me-2"><AiOutlineTwitter /></a>
                            <a href="" className="add-btn me-2"><AiOutlineInstagram /></a>
                            <a href="" className="add-btn me-2"><FaDiscord /></a>
                            <a href="" className="add-btn me-2"><FaRedditAlien /></a>
                            <a href="" className="add-btn me-2"><AiFillYoutube /></a>
                            <a href="" className="add-btn me-2"><AiOutlineMail /></a>
                        </div>
                    </div>
                </div>
                <div className="row mx-0 py-lg-5 py-4 ">
                    <div className="col-lg-4 col-12">
                        <img src={process.env.PUBLIC_URL + "images/logo.png"} className="col-5" alt="" />
                        <p className=" pt-2  pt-3">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    </div>
                    <div className="col-lg-8 col-12 ">
                        <div className="row mx-0">
                            <div className="d-flex col-lg-3 col-md-6 col-6 flex-column ps-0 pt-lg-0 pt-3">
                                <span className="fw-600">Marketplace</span>
                                <Link to='explore' className='text-light text-small-3 pt-2'>All NFTs</Link>
                                <Link to='explore' className='text-light text-small-3 pt-2'>New</Link>
                                <Link to='explore' className='text-light text-small-3 pt-2'>Art</Link>
                                <Link to='explore' className='text-light text-small-3 pt-2'>Music</Link>
                                <Link to='explore' className='text-light text-small-3 pt-2'>Sports</Link>
                            </div>
                            <div className="d-flex col-lg-3 col-md-6 col-6 flex-column ps-0 pt-lg-0 pt-3">
                                <span className="fw-600">My Account</span>
                                <Link to='account' className='text-light text-small-3 pt-2'>Profile</Link>
                                {/* <Link to='favourite' className='text-light text-small-3 pt-2'>Favorites</Link> */}
                                <Link to='my-collections' className='text-light text-small-3 pt-2'>My Collections</Link>
                                <Link to='settings' className='text-light text-small-3 pt-2'>Settings</Link>
                            </div>
                            <div className="d-flex col-lg-3 col-md-6 col-6 flex-column ps-0 pt-lg-0 pt-3">
                                <span className="fw-600">Resources</span>
                                <Link to='help-center' className='text-light text-small-3 pt-2'>Help Center</Link>
                                {/* <Link to='platform-status' className='text-light text-small-3 pt-2'>Platform Status</Link> */}
                                {/* <Link to='partners' className='text-light text-small-3 pt-2'>Partners</Link> */}
                                <Link to='newsletter' className='text-light text-small-3 pt-2'>Newsletter</Link>
                            </div>
                            <div className="d-flex col-lg-3 col-md-6 col-6 flex-column ps-0 pt-lg-0 pt-3">
                                <span className="fw-600">Company</span>
                                <Link to='about' className='text-light text-small-3 pt-2'>About</Link>
                                {/* <Link to='carrers' className='text-light text-small-3 pt-2'>Careers</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
