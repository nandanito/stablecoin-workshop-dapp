'use client'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Details } from './Details';
import { PermissionManagement } from './PermissionManagement';
import { ProofOfReserve } from './ProofOfReserve';
import { Review } from './Review';
export function HomeTabs() {

  return (
    <Tabs
      defaultActiveKey="permission"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="details" title="Stable coin details">
        <Details />
      </Tab>
      <Tab eventKey="permission" title="Manage Permissions">
        <PermissionManagement />
      </Tab>
      <Tab eventKey="reserve" title="Proof Of Reserve">
        <ProofOfReserve />
      </Tab>
      <Tab eventKey="review" title="Review">
        <Review />
      </Tab>
    </Tabs>
  );
}

