import React from 'react'
import { Link ,useLocation  } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Header() {

    const location = useLocation();
    let path =  location.pathname;
    return (
        <div>
            <Navbar bg="dark" expand="lg" className="px-lg-4 px-2 py-lg-0" variant="dark">

                <Navbar.Brand href="/">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className="d-flex align-items-center ">
                            <div className="ws-input-box mt-lg-0 mt-3">
                                <AiOutlineSearch />
                                <input type="text" placeholder="Search items, collections, and accounts" />
                            </div>
                        </div>

                        <Link to="explore" className={path == "/explore" ?  "nav-link active" : "nav-link"} >Explore</Link>
                        <Link to="state" className={path == "/state" ?  "nav-link active" : "nav-link"}>Stats</Link>
                        <Link to="resources" className={path == "/resources" ?  "nav-link active" : "nav-link"}>Resources</Link>
                        <Link to="create" className={path == "/create" ?  "nav-link active" : "nav-link"}>Create</Link>
                        <Link to="collection" className={path == "/collection" ?  "nav-link active" : "nav-link"}>Collection</Link>
                        <div className="d-flex">
                            <NavDropdown title={<><img src={process.env.PUBLIC_URL + "images/dummy.png"} alt="" /></>} className="ws-user-drop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <div className="wallet-icon nav-link" ><MdOutlineAccountBalanceWallet /></div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
