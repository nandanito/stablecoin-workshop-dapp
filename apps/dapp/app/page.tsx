'use client';
import React, {useState } from "react";
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function Index() {
  // constructor() {
  //   // super();
  //   this.state = { checked: false };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  const [isOpen, setIsOpen] = useState(false)


  return (
    
    <div className={styles.page}>
      <Header />
      <div className="wrapper">
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
              <Tab eventKey="Stable coin details" title="Stable coin details">
                {' '}
                <div className="form">
                  <div className="row">
                    <div className="col-4">
                      <div className='subheading'><h2>STABLE COIN DETAILS :</h2></div>
                      <form>
                        <div className="form-group">
                          <label htmlFor="name">Stable Coin Name <i className='imp'>*</i></label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="symbol">Coin Symbol  <i className='imp'>*</i></label>
                          <input
                            type="text"
                            className="form-control"
                            id="symbol"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="decimals">Decimals  <i className='imp'>*</i></label>
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
                      <div className='subheading'><h2>STABLE COIN SUPPLY DETAILS :</h2></div>
                      <form>
                          <div className="form-group">
                            <label htmlFor="supply">Initial Supply  <i className='imp'>*</i></label>
                            <input
                              type="text"
                              className="form-control"
                              id="supply"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="supply">Initial Supply  <i className='imp'>*</i></label>
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
                  </div>
                </div>
                <div className='btn-botm-wrap'>
                      <button type="submit"className='nextbtn' disabled>
                          Next Step <img src="../imgs/next.svg" alt="" />
                      </button>
                </div>
              </Tab>
              <Tab eventKey="Manage Permissions" title="Manage Permissions">
               <div className='subheading'><h2>PERMISSION MANAGEMENT :</h2></div> 

               <div className='row mt-4'>
                <div className='col-md-6 mb-4'>
                  <ul className='box-area'>
                    <li>Cash</li>
                    <li>
                      <div className='wallet-info'>
                          <label htmlFor="">Wallet Address</label>
                          <div className='token-area'>
                            <input type="text" /><button className='copybtn'>Copy</button>
                          </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-md-6 mb-4'>
                  <ul className='box-area'>
                    <li>Burn</li>
                    <li>
                      <div className='wallet-info'>
                          <label htmlFor="">Wallet Address</label>
                          <div className='token-area'>
                            <input type="text" /><button className='copybtn'>Copy</button>
                          </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-md-6 mb-4'>
                  <ul className='box-area'>
                    <li>Wipe</li>
                    <li>
                      <div className='wallet-info'>
                          <label htmlFor="">Wallet Address</label>
                          <div className='token-area'>
                            <input type="text" /><button className='copybtn'>Copy</button>
                          </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-md-6 mb-4'>
                  <ul className='box-area'>
                    <li>Pause</li>
                    <li>
                      <div className='wallet-info'>
                          <label htmlFor="">Wallet Address</label>
                          <div className='token-area'>
                            <input type="text" /><button className='copybtn'>Copy</button>
                          </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
               </div>
               <div className='btn-botm-wrap'>
                      <button type="submit" className='backbtn' >
                      <img src="../imgs/back-icon.svg" alt="" /> Go Back 
                      </button>
                      <button type="submit" className='nextbtn' >
                          Next Step <img src="../imgs/next.svg" alt="" />
                      </button>
                </div>
              </Tab>
              <Tab
                eventKey="Proof Of Reserve"
                title="Proof Of Reserve"
                className=""
              >
                 <div className='subheading'><h2>PROOF OF RESERVE :</h2></div> 
                <ul className="feed-address">
                  <li>
                  <p>Do you want to integrate oracle for the<br></br> feed address?</p>
                  </li>
                  <li>
                    {/* toggle button should be here start */}
                                      <label className="switch"  >
                                        <input type="checkbox" />
                                        <span className="slider round" ></span>
                                      </label>
                    {/* toggle button end */}
                  </li>
                </ul>
            {/* this div need to toggle */}
                <div className="form-group feed-address" >
                  <label htmlFor="address">Oracle Feed Address <i className='imp'>*</i></label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    width={400}
                    required
                  />
                </div> 
             {/* end this div */}
               
                <div className='btn-botm-wrap'>
                      <button type="submit" className='backbtn' >
                      <img src="../imgs/back-icon.svg" alt="" /> Go Back 
                      </button>
                      <button type="submit" className='nextbtn' >
                          Next Step <img src="../imgs/next.svg" alt="" />
                      </button>
                </div>
              </Tab>
              <Tab eventKey="Review" title="Review">
                <h2>STABLE COIN REVIEW :</h2>
              </Tab>
            </Tabs>
          </div>


        </div>
      </div>
    </div>
  );
}
