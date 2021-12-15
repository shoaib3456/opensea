import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlinePoweroff, AiOutlineWarning, AiOutlineInfoCircle } from 'react-icons/ai'
import { FiCopy } from 'react-icons/fi'
import { MdModeEditOutline } from 'react-icons/md'

export default function Settings() {
    return (
        <div className='row mx-0 mt-3'>
            <div className="col-lg-3 border-end d-lg-block d-none">
                <span className="text-faded text-small fw-500 ps-2">SETTINGS</span>
                <div className="setting-tabs active mt-3"> <FaRegUserCircle className='me-3' /> Profile</div>
                <div className="setting-tabs text-faded mt-2"> <AiOutlinePoweroff className='me-3 text-faded fs-5' /> Logout</div>
            </div>
            <div className="col-lg-5 col-12 ps-lg-4 ps-3 order-lg-1 order-2 pt-5">
                <form action="" className='d-flex flex-column'>
                    <h1>Profile Settings</h1>

                    <div class="mt-4">
                        <label class="form-label fw-600">Username <small className="text-danger">*</small></label>
                        <input type="email" class="form-control" placeholder="Example: Treasures of the Sea" />
                    </div>

                    <div class="mt-4">
                        <label class="form-label fw-600 pb-0 mb-2">Bio</label>
                        <textarea type="email" class="form-control" placeholder='Tell the world your story!'></textarea>
                    </div>

                    <div class="mt-4">
                        <label class="form-label fw-600">Email Address <small className="text-danger">*</small></label>
                        <input type="email" class="form-control" value="admin@gmail.com" />
                    </div>

                    <div class="mt-4">
                        <label class="form-label fw-600">Links </label>
                        <input type="email" class="form-control" placeholder="YourTwitterHandle" />
                        <input type="email" class="form-control" placeholder="YourInstagramHandle" />
                        <input type="email" class="form-control" placeholder="yoursite.io" />
                    </div>

                    <div class="mt-4">
                        <label class="form-label fw-600">Username <small className="text-danger">*</small></label>
                        <input type="email" class="form-control" placeholder="Example: Treasures of the Sea" />
                    </div>

                    <div class="mt-4">
                        <label class="form-label fw-600 pb-2 mb-0">Wallet Address</label>
                        <div className="append-element-input">
                            <input type="email" class="form-control" value="0x1800a8d9544ca1a99726829f1e490cadba9bf80e" />
                            <div className="inp-arrow">
                                <FiCopy />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex mt-4">
                        <button className=" btn-1 ">Save</button>
                    </div>

                </form>
            </div>
            <div className="col pt-lg-5 pt-3 ps-lg-4 order-lg-2 order-1">
                <div className="mt-3">
                    <label class="form-label fw-600 pt-2">Profile Image </label>
                    <input type="file" className='d-none' />
                    <div className="edit-img round">
                        <div className="overlay ">
                            <MdModeEditOutline />
                        </div>
                        <img src="https://storage.googleapis.com/opensea-static/opensea-profile/1.png" alt="" />
                    </div>
                </div>
                <div className="mt-3">
                    <label class="form-label fw-600 pt-2">Profile Banner</label>
                    <input type="file" className='d-none' />
                    <div className="edit-img">
                        <div className="overlay">
                            <MdModeEditOutline />
                        </div>
                        <img src="https://storage.googleapis.com/opensea-static/opensea-profile/1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
