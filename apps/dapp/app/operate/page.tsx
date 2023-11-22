import styles from './page.module.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header , OperateStableCoinDetails} from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';

/* eslint-disable-next-line */
export interface OperateProps {}
export function Operate(props: OperateProps) {
  return (
    <div className={styles.page}>
      <Header />
      <div className="wrapper">
        <LeftNav />

        <div className="content-area">
          <div className={styles['heading-area']}>
            <h1>Operate on Stablecoins</h1>
          </div>
          <OperateStableCoinDetails />
        </div>
      </div>
    </div>
  );
}
export default Operate;
