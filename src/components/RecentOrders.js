import React from 'react';
import { Table, Card } from 'react-bootstrap';

function RecentOrders() {
  return (
    <Card>
      <Card.Body>
        <h5>Recent Orders</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wade Warren</td>
              <td>15478256</td>
              <td>$124.00</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>Jane Cooper</td>
              <td>48967586</td>
              <td>$305.02</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>Guy Hawkins</td>
              <td>78985215</td>
              <td>$45.88</td>
              <td>Cancelled</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default RecentOrders;
