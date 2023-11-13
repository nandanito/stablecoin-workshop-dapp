'use client';
import styles from './page.module.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';

/* eslint-disable-next-line */
export interface OperateProps {}
export function Operate(props: OperateProps) {
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = () => setShowPopup(!showPopup);

  return (
    <div className={styles.page}>
      <Header />
      <div className="wrapper">
        <LeftNav />

        <div className="content-area">
          <div className={styles['heading-area']}>
            <h1>Operate Stable Coins</h1>
          </div>
          <div className="col-4">
            <div className={styles['operate-box']}>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Stable Coin</option>
                <option value="1">Coin1</option>
                <option value="2">Coin2</option>
                <option value="3">Coin3</option>
                <option value="4">Coin4</option>
              </select>
            </div>
            <div className={styles['operate-box']}>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Choose An Operation</option>
                <option value="1">Cash</option>
                <option value="2">Burn</option>
                <option value="3">Wipe</option>
                <option value="4">Pause</option>
              </select>
            </div>
            <div className={styles['cashBox']}>
              <label>Cash</label>
              <input type="number" name="cash" />
            </div>
            <div>
              <button type="button" className={styles['submitBtn']}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Operate;
