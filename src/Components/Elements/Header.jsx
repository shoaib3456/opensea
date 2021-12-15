import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import SideBar from './SideBar'

export default function Header() {

    const [sidebar, setsidebar] = useState(0)

    const location = useLocation();
    let path = location.pathname;
    return (
        <>
            <div>
                <Navbar bg="dark" expand="lg" className="px-lg-4 px-2 py-lg-0" variant="dark">

                    <Navbar.Brand href="/">
                        <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="" />
                    </Navbar.Brand>
                    <div className="d-flex align-items-center">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <div className="wallet-icon d-lg-none d-flex" ><MdOutlineAccountBalanceWallet className='pointer' onClick={() => sidebar == 1 ? setsidebar(0) : setsidebar(1)} /></div>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <div className="d-flex align-items-center ">
                                <div className="ws-input-box mt-lg-0 mt-3">
                                    <AiOutlineSearch />
                                    <input type="text" placeholder="Search items, collections, and accounts" />
                                </div>
                            </div>

                            <Link to="explore" className={path == "/explore" ? "nav-link active" : "nav-link"} >Explore</Link>
                            <NavDropdown title="Stats" className="ws-user-drop common-drop" id="basic-nav-dropdown">
                                <Link to='/ranking' className='dropdown-item' >Ranking</Link>
                                <Link to='/activity' className='dropdown-item' >Activity</Link>
                            </NavDropdown>
                            <NavDropdown title="Resources" className="ws-user-drop common-drop" id="basic-nav-dropdown">
                                <Link to='/about' className='dropdown-item' >About</Link>
                                <Link to='/help-center' className='dropdown-item' >Help Center</Link>
                                <Link to='/newsletter' className='dropdown-item' >Newsletter</Link>
                            </NavDropdown>
                            <Link to="create" className={path == "/create" ? "nav-link active" : "nav-link"}>Create</Link>
                            <div className="d-flex">
                                <NavDropdown title={<><img src={process.env.PUBLIC_URL + "images/dummy.png"} alt="" /></>} className="ws-user-drop common-drop" id="basic-nav-dropdown">
                                    <Link to='/account' className='dropdown-item' >Profile</Link>
                                    <Link to='/my-collections' className='dropdown-item' >My Collection </Link>
                                    <Link to='/settings' className='dropdown-item' >Settings </Link>
                                    <Link to='/' className='dropdown-item' >Logout </Link>
                                </NavDropdown>
                                <div className="wallet-icon nav-link d-lg-flex d-none" ><MdOutlineAccountBalanceWallet className='pointer' onClick={() => sidebar == 1 ? setsidebar(0) : setsidebar(1)} /></div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            {sidebar == 1 && <SideBar close={setsidebar} />}
        </>
    )
}
