import React from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, StableCoinDetails } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';

export default function Index() {
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
                  <StableCoinDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
