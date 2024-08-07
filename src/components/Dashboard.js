import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TotalOrders from './TotalOrders';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';


function Dashboard() {
  return (
    <>
    
    <Container fluid className="dashboard p-4">
      <Row>
        <Col md={3}><TotalOrders  /></Col>
        <Col md={3}><TotalOrders /></Col>
        <Col md={3}><TotalOrders /></Col>
        <Col md={3}><TotalOrders /></Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}><ActivityChart /></Col>
        <Col md={4}>
          <div className="mb-4">
            <div className="card">
            <h5>Goals</h5>
            <div>
            <h5>Popular Dishes</h5>
          </div>
          </div>
          
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}><RecentOrders /></Col>
        <Col md={6}><CustomerFeedback /></Col>
      </Row>
    </Container>
    </>
  );
}

export default Dashboard;
