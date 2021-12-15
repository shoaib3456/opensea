import React from 'react'
import { IoMdImage } from 'react-icons/io'
import { AiOutlineInfoCircle, AiOutlineUnorderedList, AiFillStar ,AiOutlineWarning} from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { ImStatsBars } from 'react-icons/im'
import { BiLockOpenAlt } from 'react-icons/bi'

export default function Create() {
    return (
        <div className="row mx-0 mb-5  mt-5 justify-content-center">
            <div className="col-lg-7">
                <form action="">
                    <h1>Create new item</h1>
                    <span className="fw-600">Image, Video, Audio, or 3D Model <small className="text-danger">*</small></span>
                    <p className="text-faded text-small py-1">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                    <input type="file" name="image" className="d-none" />
                    <div className="file-inp">
                        <IoMdImage />
                    </div>
                    <div class="mt-4">
                        <label class="form-label fw-600">Name <small className="text-danger">*</small></label>
                        <input type="email" class="form-control" placeholder="Item Name" />
                    </div>
                    <div class="mt-4">
                        <label class="form-label fw-600 pb-0 mb-0">External Link</label>
                        <p className="text-faded text-small my-1 mb-2 ">OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                        <input type="email" class="form-control" placeholder="https://yoursite.io/item/123" />
                    </div>

                    <div class="mt-4">
                        <label class="form-label fw-600 pb-0 mb-0">Description</label>
                        <p className="text-faded text-small my-1 mb-2 ">The description will be included on the item's detail page underneath its image. <a href="" >Markdown</a>  syntax is supported.</p>
                        <textarea type="email" class="form-control" placeholder="Provide a detailed description of your item." ></textarea>
                    </div>

                    <div class="mt-4">
                        <label class="form-label fw-600 pb-0 mb-0">Collection</label>
                        <p className="text-faded text-small my-1 mb-2 ">This is the collection where your item will appear. <AiOutlineInfoCircle /></p>
                        <div className="append-element-input">
                            <input type="email" class="form-control" placeholder="Select Collection" />
                            <div className="inp-arrow">
                                <BsChevronDown />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-start pt-4 border-bottom pb-3">
                        <div className="icon pe-3">
                            <AiOutlineUnorderedList className="fs-5" />
                        </div>
                        <div className="d-flex flex-column col">
                            <span className="fw-600">Properties</span>
                            <span>Textual traits that show up as rectangles</span>
                        </div>
                        <button className="add-btn">+</button>
                    </div>
                    {/* <div className="d-flex align-items-start pt-4 border-bottom pb-3">
                        <div className="icon pe-3">
                            <AiFillStar className="fs-5" />
                        </div>
                        <div className="d-flex flex-column col">
                            <span className="fw-600">Levels</span>
                            <span>Numerical traits that show as a progress bar</span>
                        </div>
                        <button className="add-btn">+</button>
                    </div> */}
                    {/* <div className="d-flex align-items-start pt-4 border-bottom pb-3">
                        <div className="icon pe-3">
                            <ImStatsBars className="fs-5" />
                        </div>
                        <div className="d-flex flex-column col">
                            <span className="fw-600">Stats</span>
                            <span>Numerical traits that just show as numbers</span>
                        </div>
                        <button className="add-btn">+</button>
                    </div> */}
                    {/* <div className="d-flex align-items-start pt-4 border-bottom pb-3">
                        <div className="icon pe-3">
                            <BiLockOpenAlt className="fs-5" />
                        </div>
                        <div className="d-flex flex-column col">
                            <span className="fw-600">Unlockable Content</span>
                            <span>Include unlockable content that can only be revealed by the owner of the item.</span>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div> */}
                    <div className="d-flex align-items-start pt-4 border-bottom pb-3">
                        <div className="icon pe-3">
                            <AiOutlineWarning className="fs-5" />
                        </div>
                        <div className="d-flex flex-column col">
                            <span className="fw-600">Explicit & Sensitive Content</span>
                            <span>Set this item as explicit and sensitive content <AiOutlineInfoCircle /> </span>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div className="d-flex mt-4">
                        <button className=" btn-1 ">Create</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
