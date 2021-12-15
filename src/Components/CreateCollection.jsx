import React from 'react'
import { IoMdImage } from 'react-icons/io'
import { AiOutlineInfoCircle, AiOutlineUnorderedList, AiFillStar, AiOutlineWarning } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { ImStatsBars } from 'react-icons/im'
import { BiLockOpenAlt } from 'react-icons/bi'
export default function CreateCollection() {
    return (
        <div className="row mx-0 mb-5  mt-5 justify-content-center">
            <div className="col-lg-9 col-12">
                <form action="" className='d-flex flex-column'>
                    <h1>Create a Collection</h1>
                    <span className="fw-600">Logo image <small className="text-danger">*</small></span>
                    <p className="text-faded text-small py-1">This image will also be used for navigation. 350 x 350 recommended.</p>
                    <input type="file" name="image" className="d-none" />
                    <div className="file-inp rounded">
                        <IoMdImage />
                    </div>

                    <span className="fw-600 pt-4">Featured image</span>
                    <p className="text-faded text-small py-1">This image will be used for featuring your collection on the homepage, category pages, or other promotional areas of OpenSea. 600 x 400 recommended.</p>
                    <input type="file" name="image" className="d-none" />
                    <div className="file-inp ">
                        <IoMdImage />
                    </div>

                    <span className="fw-600 pt-4">Banner image</span>
                    <p className="text-faded text-small py-1">This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 400 recommended.</p>
                    <input type="file" name="image" className="d-none" />
                    <div className="file-inp w-75 ">
                        <IoMdImage />
                    </div>
                    <div class="mt-4">
                        <label class="form-label fw-600">Name <small className="text-danger">*</small></label>
                        <input type="email" class="form-control" placeholder="Example: Treasures of the Sea" />
                    </div>


                    <div class="mt-4">
                        <label class="form-label fw-600 pb-0 mb-0">Description</label>
                        <p className="text-faded text-small my-1 mb-2 "><a href="" >Markdown</a>  syntax is supported. 0 of 1000 characters used.  </p>
                        <textarea type="email" class="form-control" ></textarea>
                    </div>

                    {/* 
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
                    <div className="d-flex align-items-start pt-4 border-bottom pb-3">
                        <div className="icon pe-3">
                            <AiFillStar className="fs-5" />
                        </div>
                        <div className="d-flex flex-column col">
                            <span className="fw-600">Levels</span>
                            <span>Numerical traits that show as a progress bar</span>
                        </div>
                        <button className="add-btn">+</button>
                    </div>
                    <div className="d-flex align-items-start pt-4 border-bottom pb-3">
                        <div className="icon pe-3">
                            <ImStatsBars className="fs-5" />
                        </div>
                        <div className="d-flex flex-column col">
                            <span className="fw-600">Stats</span>
                            <span>Numerical traits that just show as numbers</span>
                        </div>
                        <button className="add-btn">+</button>
                    </div>
                    <div className="d-flex align-items-start pt-4 border-bottom pb-3">
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
                    </div>
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
                     */}

                    <div class="mt-4">
                        <label class="form-label fw-600 pb-0 mb-0">Category</label>
                        <p className="text-faded text-small my-1 mb-2 ">Adding a category will help make your item discoverable on OpenSea.</p>
                        <button className="btn-dark">Add category</button>
                    </div>

                    <div class="mt-4">
                        <label class="form-label fw-600 pb-0 mb-3">Links</label>
                        <input type="email" class="form-control" placeholder="Yoursite.io" />
                        <div className="ws-input-box mt-1">
                            <span className="split">https://discord.gg/</span>
                            <input type="email" class="" placeholder="" />
                        </div>
                        <div className="ws-input-box mt-1">
                            <span className="split">https://twitter.com/</span>
                            <input type="email" class="" placeholder="" />
                        </div>
                        <div className="ws-input-box mt-1">
                            <span className="split">https://www.instagram.com/</span>
                            <input type="email" class="" placeholder="" />
                        </div>
                        <div className="ws-input-box mt-1">
                            <span className="split">https://www.medium.com/@</span>
                            <input type="email" class="" placeholder="" />
                        </div>
                        <div className="ws-input-box mt-1">
                            <span className="split">https://t.me/</span>
                            <input type="email" class="" placeholder="" />
                        </div>
                    </div>

                    <div class="mt-4 d-flex flex-column">
                        <label class="form-label fw-600">Royalties </label>
                        <span className="text-faded text-small pb-3">Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing.</span>
                        <span className="text-faded text-small fw-500 pb-2">Percentage fee</span>
                        <input type="email" class="form-control" placeholder="e.g. 2.5" />
                    </div>

                    <div className="d-flex align-items-start py-4  ">
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
