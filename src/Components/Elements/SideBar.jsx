import React from 'react'
import { HiUserCircle } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

export default function SideBar(props) {
    return (
        <div className='sider-bar'>
            <div className='d-flex align-items-center border-bottom p-3 justify-content-between '>
                <div className="d-flex align-items-center">
                    <HiUserCircle className='fs-2 text-faded' />
                    <span className="fw-600 ps-2">My Wallet </span>
                </div>
                <RiCloseLine className='text-faded fs-4 pointer' onClick={()=>props.close(0)}/>
            </div>
            <div className="p-3 ">
                <p className='text-faded'>Connect with one of our available wallet providers or create a new one.</p>

                <div className="d-flex flex-column ">
                    {/* <div className="d-flex justify-content-between py-3 align-items-center side-items px-3">
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/walletconnect-alternative.webp"} className='ws-wallet-icons' alt="" />
                            <span className="fw-600 text-small-3 ps-2">WalletConnect </span>
                        </div>
                    </div> */}
                    <div className="d-flex justify-content-between py-3 align-items-center side-items px-3">
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/metamask-alternative.webp"} className='ws-wallet-icons' alt="" />
                            <span className="fw-600 text-small-3 ps-2">MetaMask </span>
                        </div>
                        <span className=" text-faded text-small ps-2">Popular </span>
                    </div>
                    {/* <div className="d-flex justify-content-between py-3 align-items-center side-items px-3">
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/walletlink-alternative.webp"} className='ws-wallet-icons' alt="" />
                            <span className="fw-600 text-small-3 ps-2">Coinbase Wallet </span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between py-3 align-items-center side-items px-3">
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/fortmatic-alternative.webp"} className='ws-wallet-icons' alt="" />
                            <span className="fw-600 text-small-3 ps-2">Fortmatic </span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
