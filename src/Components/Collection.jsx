import {React,useState} from 'react'
import { BiFilter } from "react-icons/bi";
import { Accordion } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { BiListUl } from "react-icons/bi";
import { BsFillGrid3X3GapFill, BsFillGridFill, BsSuitHeart } from "react-icons/bs";
import  Card1  from "./Elements/Card1";

export default function Collection() {

    const [grid, setgrid] = useState(0)
    return (
        <>
            <div className="banner-img">
                <img src={process.env.PUBLIC_URL + "images/collection-banner.png"} alt="" />
            </div>

            <div className="d-flex flex-column align-items-center">
                <img src={process.env.PUBLIC_URL + "images/collection-logo.jpg"} className="collection-logo" alt="" />
                <h1 className="mt-3 text-center">Ape Kids Club (AKC)</h1>
                <div>
                    <span className="me-1">Created by</span>
                    <a href="">ApeKidsClubTeam</a>
                </div>
                <div className="d-flex flex-wrap mt-4">
                    <div className="d-flex flex-column align-items-center px-lg-4 px-2">
                        <h2 className="fw-600 mb-0">10.0K</h2>
                        <span className="text-small-2">items</span>
                    </div>
                    <div className="d-flex flex-column align-items-center px-lg-4 px-2">
                        <h2 className="fw-600 mb-0">5.0K</h2>
                        <span className="text-small-2">owners</span>
                    </div>
                    <div className="d-flex flex-column align-items-center px-lg-4 px-2">
                        <h2 className="fw-600 mb-0">0.52K</h2>
                        <span className="text-small-2">floor price</span>
                    </div>
                    <div className="d-flex flex-column align-items-center px-lg-4 px-2">
                        <h2 className="fw-600 mb-0">3.4K</h2>
                        <span className="text-small-2">volume traded</span>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mx-0 mt-4">
                <p className="col-lg-8  col-12 text-center text-faded">
                    In a magical world where apes ruled the metaverse, a magical thousand-year-old tree sprouted cute baby apes. A flock of storks were the loyal companions of the thousand-year-old tree. One sunny day, a total of 9999 baby apes were born. Storks followed their inner call and delivered all the baby apes. The families were so grateful and elated that they wanted even more baby apes. All were delivered and all lived a joyous life with their parents.
                    <br />
                    As the parents were busy navigating the metaverse and the kid apes grew up, they left their kid apes with Victorior, the friendliest teacher in the whole metaverse. Victorior was beloved by the kid apes since he is a talented art teacher who spreads his love through art.
                </p>
            </div>

            <div className="row mx-0 border-top mt-4">
                <div className="col-lg-3 px-0">
                    <div>
                        <div className="side-item">
                            <div>
                                <BiFilter className="fs-4 me-2" />
                                <span className="fw-600">Filter</span>
                            </div>
                            <AiOutlineArrowLeft className="fs-6" />
                        </div>
                    </div>
                    <Accordion>
                        <Accordion.Item variant="dark" eventKey="0">
                            <Accordion.Header  >Price</Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex flex-column">
                                    <div className="append-element-input">
                                        <select name="" id="" className="form-control">
                                            <option value="1">Ether (ETH)</option>
                                            <option value="2">United State Dollar</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <input type="text" className="form-control" placeholder="Min" />
                                    <span class="px-3">to</span>
                                    <input type="text" className="form-control" placeholder="Max" />
                                </div>
                                <button className="btn-1 disabled mt-1">Apply</button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
                <div className="col-lg-9 pt-3">
                    <div className="row mx-0 px-2">
                        <div className="col-lg-10 col-12 px-0 row mx-0 justify-content-between">
                            <div className="ws-input-box col-lg-4 col-12 px-0 mt-lg-0 mt-3 ">
                                <AiOutlineSearch className="ms-3" />
                                <input type="text" className="w-100" placeholder="Search " />
                            </div>
               
                            <div className="mt-lg-0 mt-2 px-0 col-lg-8 col-12 ps-2">
                                <div className="append-element-input ">
                                    <select name="" id="" className="form-control ">
                                        <option value="1">Price: Low to High</option>
                                        <option value="1">Price High to Low</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-2 col-12 px-0 mt-lg-0 mt-2 d-flex align-items-center">
                            <div className="d-flex grid ms-lg-2 ms-0 col">
                                <div className={grid == 0 ? "left active" : "left"} onClick={()=>{setgrid(0)}}>
                                    <BsFillGridFill />
                                </div>
                                <div className={grid == 1 ? "right active" : "right"} onClick={()=>{setgrid(1)}}>
                                    <BsFillGrid3X3GapFill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 mx-0">
                        <Card1 grid={grid}/>
                        <Card1 grid={grid}/>
                        <Card1 grid={grid}/>
                        <Card1 grid={grid}/>
                        <Card1 grid={grid}/>
                        <Card1 grid={grid}/>
                    </div>
                </div>
            </div>

        </>
    )
}
