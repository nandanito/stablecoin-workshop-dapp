"use client";
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
            <div className='heading-area'>
                <h1>Create New Stable Coin</h1>
            </div>

            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                Tab content for Home
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Tab content for Profile
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
              </Tab>
            </Tabs>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Stable Coin Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manage Permissions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Proof Of Reserve
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Review
                </a>
              </li>
            </ul>
          </div>
          {/* form */}
          <div className="form">
            <div className="row">
              <div className="col-4">
                <h4>STABLE COIN DETAILS :</h4>
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
                <h4>STABLE COIN SUPPLY DETAILS :</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Initial Supply</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
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

          {/* footer */}
          <div className="footer fade-info">
            <button type="submit">
              Next Step <img src="../imgs/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
