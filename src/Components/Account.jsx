import { React, useState } from 'react'
import { BiFilter } from "react-icons/bi";
import { Accordion } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { BiListUl } from "react-icons/bi";
import { RiShareBoxLine } from "react-icons/ri";
import { BsFillGrid3X3GapFill, BsFillGridFill, BsShareFill } from "react-icons/bs";
import Card1 from "./Elements/Card1";

export default function Account() {

    const [grid, setgrid] = useState(0)
    const [sidebar, setsidebar] = useState(1)
    const [tabs, settabs] = useState(1)
    return (
        <>
            <div className="banner-img">
                <img src={process.env.PUBLIC_URL + "images/collection-banner.png"} alt="" />
            </div>

            <div className="d-flex flex-column align-items-center">
                <img src={process.env.PUBLIC_URL + "images/collection-logo.jpg"} className="collection-logo" alt="" />
                <h2 className="mt-3 fw-600 text-center">Unamed</h2>
                <span className="me-1 fs-5 text-faded">0x1800...f80e</span>
                <span className="me-1 fs-5 text-faded">Joined December 2021</span>
                <div className="social-icons mt-3">
                    {/* <a href=""><RiShareBoxLine /></a> */}
                </div>
            </div>

            <div className="tabs mt-4 justify-content-lg-start justify-content-center flex-wrap ps-lg-3">
                <span onClick={() => { settabs(1) }} className={tabs == 1 && "active"}>Collected</span>
                <span onClick={() => { settabs(2) }} className={tabs == 2 && "active"}>Created</span>
                {/* <span onClick={() => { settabs(3) }} className={tabs == 3 && "active"}>Favorited</span> */}
                <span onClick={() => { settabs(3) }} className={tabs == 3 && "active"}>Activity</span>
                <span onClick={() => { settabs(4) }} className={tabs == 4 && "active"}>Offers</span>
            </div>

            <div className={sidebar == 1 ? "row mx-0 border-top mt-4" : "d-flex mx-0 mt-2"}>
                {sidebar == 1 ?
                    <div className="col-lg-3 px-0">
                        <div>
                            <div className="side-item">
                                <div>
                                    <BiFilter className="fs-4 me-2" />
                                    <span className="fw-600">Filter</span>
                                </div>
                                <AiOutlineArrowLeft className="fs-5 pointer" onClick={() => setsidebar(0)} />
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
                    :
                    <div>
                        <div className="side-item d-flex align-items-start pt-4 me-2" style={{ height: "100%" }} >
                            <AiOutlineArrowRight className="fs-5 pointer" onClick={() => setsidebar(1)} />
                        </div>
                    </div>
                }
                <div className={sidebar == 1 ? "col-lg-9 pt-3" : "pt-3"}>
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
                                <div className={grid == 0 ? "left active" : "left"} onClick={() => { setgrid(0) }}>
                                    <BsFillGridFill />
                                </div>
                                <div className={grid == 1 ? "right active" : "right"} onClick={() => { setgrid(1) }}>
                                    <BsFillGrid3X3GapFill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 mx-0">
                        <Card1 grid={grid} />
                        <Card1 grid={grid} />
                        <Card1 grid={grid} />
                        <Card1 grid={grid} />
                        <Card1 grid={grid} />
                        <Card1 grid={grid} />
                    </div>
                </div>
            </div>

        </>
    )
}
