import React from 'react'
import { useHistory } from 'react-router-dom';
import { BsSuitHeart } from "react-icons/bs";
export default function Card1(props) {

    const history = useHistory();

    return (
        <div className={props.grid == 1 ? "col-lg-4 col-md-6 col-12 p-2" : "col-lg-3 col-md-6 col-12 p-2" } onClick={()=>{history.push('/details')}}>
            <div class="card  card-dark" >
                <img src={process.env.PUBLIC_URL + "images/monkey.png"} class="card-img-top" />
                <div class="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="text-faded text-small">Ape Kids Club</span>
                        <span className="text-faded text-small">Top Bid</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <span className=" text-small fw-600">Ape Kids Club #73847</span>
                        <span className=" text-small fw-600 d-flex"> <img src={process.env.PUBLIC_URL + "images/eth.svg"} className="eth me-1" /> 0.0000000000</span>
                    </div>
                    <span className="text-faded text-small d-flex justify-content-end">6 days left</span>
                </div>
                <div className="card-footer">
                    <BsSuitHeart />
                    <span className="text-faded text-small ms-2">36</span>
                </div>
            </div>
        </div>
    )
}
