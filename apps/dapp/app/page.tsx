'use client';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default async function Index() {
  return (
    <div className={styles.page}>
      <Header />
      <div className="wrapper">
        <LeftNav />

        <div className="container">
          <div className="head">
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
                      <h2>STABLE COIN DETAILS :</h2>
                      <form>
                        <div className="form-group">
                          <label htmlFor="name">Stable Coin Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="symbol">Coin Symbol</label>
                          <input
                            type="text"
                            className="form-control"
                            id="symbol"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="decimals">Decimals</label>
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
                      <h2>STABLE COIN SUPPLY DETAILS :</h2>
                      <form>
                        <div className="form-group">
                          <label htmlFor="supply">Initial Supply</label>
                          <input
                            type="text"
                            className="form-control"
                            id="supply"
                            required
                          />
                        </div>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Supply Type</option>
                          <option value="1">Finite</option>
                          <option value="2">Infinite</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Manage Permissions" title="Manage Permissions">
                <h2>PERMISSION MANAGEMENT :</h2>
              </Tab>
              <Tab
                eventKey="Proof Of Reserve"
                title="Proof Of Reserve"
                className="reserve"
              >
                <h2>PROOF OF RESERVE :</h2>
                <div className="feed-address">
                  <p>Do you want to integrate oracle for the feed address?</p>
                  <div className="btn-group">
                    <button className="btn">NO</button>
                    <button className="btn">YES</button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Oracle Feed Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    width={400}
                    required
                  />
                </div>
              </Tab>
              <Tab eventKey="Review" title="Review">
                <h2>STABLE COIN REVIEW :</h2>
              </Tab>
            </Tabs>
          </div>

          {/* footer */}
          <div className="footer fade-info">
            {/* <button type="submit" disabled>
              <img src="../imgs/next.svg" alt="" /> Go Back
            </button> */}
            <button type="submit" disabled>
              Next Step <img src="../imgs/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
