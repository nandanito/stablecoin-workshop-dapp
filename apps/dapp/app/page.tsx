'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Details, Header, PermissionManagement, ProofOfReserve, Review } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Index() {
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
                  <Tab eventKey="Stable coin details" title="Stable coin details">
                    <Details />
                  </Tab>
                  <Tab eventKey="Manage Permissions" title="Manage Permissions">
                    <PermissionManagement />
                  </Tab>
                  <Tab eventKey="Proof Of Reserve" title="Proof Of Reserve">
                    <ProofOfReserve />
                  </Tab>
                  <Tab eventKey="Review" title="Review">
                    <Review />
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
