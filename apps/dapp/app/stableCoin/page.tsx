'use client'

import styles from './page.module.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';

/* eslint-disable-next-line */
export interface stableProps { }
export function stablecoin(props: stableProps) {



  return (
    <div className={styles.page}>
      <Header />
      <div className="wrapper">
        <LeftNav />

        <div className="content-area">
          <div className={styles['heading-area']} >
                 <h1>Stable Coin Details</h1>
          </div>
          <div className="col-4">
            <div className={styles['operate-box']}>
                    <select
                        className="form-select"
                        aria-label="Default select example">
                        <option selected>Select Stable Coin</option>
                        <option value="1">Coin1</option>
                        <option value="2">Coin2</option>
                        <option value="3">Coin3</option>
                        <option value="4">Coin4</option>
                      </select>
            </div>
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
                          <div className="review-info">
                            <label htmlFor="">Cash In:</label>
                            <div className="hash-tag"><span>0xf7a30...57730</span> <button className="copybtn">Copy</button></div>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Burn:</label>
                            <div className="hash-tag"><span>0xf7a30...57730</span> <button className="copybtn">Copy</button></div>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Wipe :</label>
                            <div className="hash-tag"><span>0xf7a30...57730</span> <button className="copybtn">Copy</button></div>
                          </div>
                          <div className="review-info">
                            <label htmlFor="">Pause :</label>
                            <div className="hash-tag"><span>0xf7a30...57730</span> <button className="copybtn">Copy</button></div>
                          </div>
                      </div>
                    </li>
                    <li>
                      <div className="review-box">
                          <h3>Proof Of Reserve Details  :</h3>
                          <div className="review-info">
                            <label htmlFor="">Oracle Feed Address:</label>
                            <div className="hash-tag"><span>0xf7a30...57730</span> <button className="copybtn">Copy</button></div>
                          </div>
                      </div>
                    </li>
                  </ul>
          
        </div>
      </div>
    </div>
  );
}
export default stablecoin;
