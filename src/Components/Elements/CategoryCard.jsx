import React from 'react'

export default function CategoryCard() {
    return (
        <div className="col-lg-4 col-md-3 p-2 col-12">
            <div className="explore-card">
                <div className="top">
                    <img src={process.env.PUBLIC_URL + "images/art.webp"} alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column py-3">
                    <span className="fw-600 fs-5">Art</span>
                </div>
            </div>
        </div>
    )
}
