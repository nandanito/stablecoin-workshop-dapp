'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Index() {
  // constructor() {
  //   // super();
  //   this.state = { checked: false };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.page}>
        <Header />
        <div className="wrapper">
          <div className="container-fluid">
            <LeftNav />
            <div className="content-area">
              <div className="">
                <div className="heading-area">
                  <h1>Create New Stable Coin</h1>
                </div>

                <Tabs
                  defaultActiveKey="Stable coin details"
                  id="uncontrolled-tab-example"
                >
                  <Tab
                    eventKey="Stable coin details"
                    title="Stable coin details"
                  >
                    {' '}
                    <div className="form">
                      <div className="row">
                        <div className="col-4">
                          <div className="subheading">
                            <h2>STABLE COIN DETAILS :</h2>
                          </div>
                          <form>
                            <div className="form-group">
                              <label htmlFor="name">
                                Stable Coin Name <i className="imp">*</i>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="symbol">
                                Coin Symbol <i className="imp">*</i>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="symbol"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="decimals">
                                Decimals <i className="imp">*</i>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="decimals"
                                required
                              />
                            </div>
                          </form>
                        </div>

                        <div className="col-4">
                          <div className="subheading">
                            <h2>STABLE COIN SUPPLY DETAILS :</h2>
                          </div>
                          <form>
                            <div className="form-group">
                              <label htmlFor="supply">
                                Initial Supply <i className="imp">*</i>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="supply"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="supply">
                                Initial Supply <i className="imp">*</i>
                              </label>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Select Supply Type</option>
                                <option value="1">Finite</option>
                                <option value="2">Infinite</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="supply">Max Supply </label>
                              <input
                                type="text"
                                className="form-control"
                                id="supply"
                                required
                              />
                            </div>
                          </form>
                        </div>
                        {/* <div className="modal"> */}
                        {/* <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Woohoo, you are reading this text in a modal!
                        </Modal.Body>
                      </Modal> */}
                      </div>
                    </div>
                    {/* </div> */}
                    <div className="btn-botm-wrap">
                      <button type="submit" className="nextbtn" disabled>
                        Next Step <img src="../imgs/next.svg" alt="" />
                      </button>
                    </div>
                  </Tab>
                  <Tab eventKey="Manage Permissions" title="Manage Permissions">
                    <div className="subheading">
                      <h2>PERMISSION MANAGEMENT :</h2>
                    </div>

                    <div className="row mt-4">
                      <div className="col-md-6 mb-4">
                        <ul className="box-area">
                          <li>Cash</li>
                          <li>
                            <div className="wallet-info">
                              <label htmlFor="">Wallet Address</label>
                              <div className="token-area">
                                <input type="text" />
                                <button className="copybtn">Copy</button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 mb-4">
                        <ul className="box-area">
                          <li>Burn</li>
                          <li>
                            <div className="wallet-info">
                              <label htmlFor="">Wallet Address</label>
                              <div className="token-area">
                                <input type="text" />
                                <button className="copybtn">Copy</button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 mb-4">
                        <ul className="box-area">
                          <li>Wipe</li>
                          <li>
                            <div className="wallet-info">
                              <label htmlFor="">Wallet Address</label>
                              <div className="token-area">
                                <input type="text" />
                                <button className="copybtn">Copy</button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 mb-4">
                        <ul className="box-area">
                          <li>Pause</li>
                          <li>
                            <div className="wallet-info">
                              <label htmlFor="">Wallet Address</label>
                              <div className="token-area">
                                <input type="text" />
                                <button className="copybtn">Copy</button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="btn-botm-wrap">
                      <button type="submit" className="backbtn">
                        <img src="../imgs/back-icon.svg" alt="" /> Go Back
                      </button>
                      <button type="submit" className="nextbtn">
                        Next Step <img src="../imgs/next.svg" alt="" />
                      </button>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="Proof Of Reserve"
                    title="Proof Of Reserve"
                    className=""
                  >
                    <div className="subheading">
                      <h2>PROOF OF RESERVE :</h2>
                    </div>
                    <ul className="feed-address">
                      <li>
                        <p>
                          Do you want to integrate oracle for the<br></br> feed
                          address?
                        </p>
                      </li>
                      <li>
                        {/* toggle button should be here start */}
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                        {/* toggle button end */}
                      </li>
                    </ul>
                    {/* this div need to toggle */}
                    <div className="form-group feed-address feed-box">
                      <label htmlFor="address">
                        Oracle Feed Address <i className="imp">*</i>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        width={400}
                        required
                      />
                    </div>
                    {/* end this div */}

                    <div className="btn-botm-wrap">
                      <button type="submit" className="backbtn">
                        <img src="../imgs/back-icon.svg" alt="" /> Go Back
                      </button>
                      <button type="submit" className="nextbtn">
                        Next Step <img src="../imgs/next.svg" alt="" />
                      </button>
                    </div>
                  </Tab>
                  <Tab eventKey="Review" title="Review">
                    <div className="subheading">
                      <h2>STABLE COIN REVIEW :</h2>
                    </div>

                    <ul className="review-area">
                      <li>
                        <div className="review-box">
                          <h3>Stable Coin Details :</h3>
                          <div className="review-info">
                            <label htmlFor="">Stable Coin Details :</label>
                            <span>UnityCoin</span>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Coin Symbol:</label>
                            <span>Unity</span>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Decimals :</label>
                            <span>6</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="review-box">
                          <h3>Stable Coin Supply Details :</h3>
                          <div className="review-info">
                            <label htmlFor="">Initial Supply :</label>
                            <span>10000</span>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Supply Type:</label>
                            <span>Finite</span>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Max Supply :</label>
                            <span>84</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="review-box">
                          <h3>Permission Management Details :</h3>
                          <p className="wallet-address-list">Wallet Address</p>
                          <div className="review-info">
                            <label htmlFor="">Cash In:</label>
                            <div className="hash-tag">
                              <span>0xf7a30...57730</span>{' '}
                              <button className="copybtn">Copy</button>
                            </div>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Burn:</label>
                            <div className="hash-tag">
                              <span>0xf7a30...57730</span>{' '}
                              <button className="copybtn">Copy</button>
                            </div>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Wipe :</label>
                            <div className="hash-tag">
                              <span>0xf7a30...57730</span>{' '}
                              <button className="copybtn">Copy</button>
                            </div>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Pause :</label>
                            <div className="hash-tag">
                              <span>0xf7a30...57730</span>{' '}
                              <button className="copybtn">Copy</button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="review-box">
                          <h3>Proof Of Reserve Details :</h3>
                          <div className="review-info">
                            <label htmlFor="">Oracle Feed Address:</label>
                            <div className="hash-tag">
                              <span>0xf7a30...57730</span>{' '}
                              <button className="copybtn">Copy</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div className="btn-botm-wrap">
                      <button type="submit" className="backbtn">
                        <img src="../imgs/back-icon.svg" alt="" /> Go Back
                      </button>
                      <button type="submit" className="nextbtn">
                        Create an Account
                        <img src="../imgs/next.svg" alt="" />
                      </button>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
