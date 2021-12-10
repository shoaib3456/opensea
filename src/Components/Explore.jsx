import { React, useState } from 'react'
import ExploreCard from './Elements/ExploreCard'

export default function Explore() {
    const [state, setstate] = useState(1)

    return (
        <>

            <div className="d-flex pt-5 justify-content-center">
                <h2 className="fw-600 fs-1">Explore Collections</h2>
            </div>

            <div className="tabs mt-4">
                <span onClick={() => { setstate(1) }} className={state == 1 && "active"}>Trending</span>
                <span onClick={() => { setstate(2) }} className={state == 2 && "active"}>Top</span>
                <span onClick={() => { setstate(3) }} className={state == 3 && "active"}>Art</span>
                <span onClick={() => { setstate(4) }} className={state == 4 && "active"}>Music</span>
                <span onClick={() => { setstate(5) }} className={state == 5 && "active"}>Sports</span>
            </div>

            <div className="row mx-0 mt-4 px-4">
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
            </div>
        </>
    )
}
