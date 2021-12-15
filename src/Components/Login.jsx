import React from 'react'

export default function Login() {
    return (
        <div className='row mx-0 justify-content-center my-5 py-5'>
            <div className="col-lg-6 col-11">
                <h3 className='fw-600'>Connect your wallet.</h3>
                <p className='text-faded'>Connect with one of our available wallet providers or create a new one.</p>
                <div className="d-flex flex-column ">
                    {/* <div className="d-flex justify-content-between py-3 align-items-center side-items border-bottom rounded-0 border-top border-start border-end px-3">
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/walletconnect-alternative.webp"} className='ws-wallet-icons' alt="" />
                            <span className="fw-600 text-small-3 ps-2">WalletConnect </span>
                        </div>
                    </div> */}
                    <div className="d-flex justify-content-between py-3 align-items-center side-items  px-3">
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/metamask-alternative.webp"} className='ws-wallet-icons' alt="" />
                            <span className="fw-600 text-small-3 ps-2">MetaMask </span>
                        </div>
                        <span className=" text-faded text-small ps-2">Popular </span>
                    </div>
                    {/* <div className="d-flex justify-content-between py-3 align-items-center side-items border-bottom rounded-0  border-start border-end px-3">
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + "images/walletlink-alternative.webp"} className='ws-wallet-icons' alt="" />
                            <span className="fw-600 text-small-3 ps-2">Coinbase Wallet </span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between py-3 align-items-center side-items border-bottom rounded-0 border-start border-end px-3">
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
