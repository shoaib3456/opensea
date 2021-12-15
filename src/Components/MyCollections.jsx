import React from 'react'
import { Link ,useHistory} from 'react-router-dom'

export default function MyCollections() {

    const history = useHistory();

    return (
        <div className='row mx-0 justify-content-center my-5'>
            <div className="col-lg-7 col-12 p-0">
                <h1 className="fw-600 mx-2">My Collections</h1>
                <p className="text-faded pt-2 pb-3 mx-2">Create, curate, and manage collections of unique NFTs to share and sell.</p>
                <Link to='create-collection' className="btn-1 mx-2">create collection</Link>
                <div className="row mx-0 mt-5">
                    <div className="col-lg-4 p-2">
                        <div className="explore-card pointer" >
                            <div className="top">
                                <img src={process.env.PUBLIC_URL + "images/monkey.png"} onClick={()=>{history.push('/collection')}} alt="" />
                            </div>
                            <div className="d-flex justify-content-center align-items-center flex-column pb-4">
                                <img src={process.env.PUBLIC_URL + "images/monkey.png"} className="small-logo" alt="" />
                                <div className="d-flex flex-column align-items-center">
                                    <span className="fw-600 ">Lazy Lions</span>
                                    <span><span className="text-faded text-small-2 fw-500">by</span><a href="" className="text-small-2  ps-1 fw-500">Lazy-Lions</a></span>
                                </div>
                                <p className="text-faded col-lg-9 mt-3 mb-0 col-12 text-center">Lazy Lions is the NFT community for 👑's</p>
                                <p className="text-faded col-lg-9 mt-3 mb-0 col-12 text-center">0 items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
