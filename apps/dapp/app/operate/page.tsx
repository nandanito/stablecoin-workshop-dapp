'use client'

import styles from './page.module.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';

/* eslint-disable-next-line */
export interface OperateProps { }
export function Operate(props: OperateProps) {

  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = () => setShowPopup(!showPopup);

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div>
          <LeftNav />
        </div>
        <div >
          <h1 className={styles['containeri']} >Operate Stable Coins</h1>
          <div className="col-4">
            <form>
              <select
                className="form-select"
                aria-label="Default select example">
                <option selected>Select Stable Coin</option>
                <option value="1">Coin1</option>
                <option value="2">Coin2</option>
                <option value="3">Coin3</option>
                <option value="4">Coin4</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example">
                <option selected>Choose An Operation</option>
                <option value="1">Cash</option>
                <option value="2">Burn</option>
                <option value="3">Wipe</option>
                <option value="4">Pause</option>
              </select>
            </form>
          </div>
          <div className={styles['iuy']} >
            <h6>Cash</h6>
            <input type="number" name="cash" className={styles['ipl']} />
          </div>
          <div>
            <button onSubmit={handleSubmit} type="button" className={styles['ipo']}   >Submit</button>
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <p>Submission Successful!</p>
                  <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Operate;
