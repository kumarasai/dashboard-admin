import React from 'react';
import { Card } from 'react-bootstrap';

function CustomerFeedback() {
  return (
    <Card>
      <Card.Body>
        <h5>Customer's Feedback</h5>
        <div className="feedback">
          <div>
            <strong>Jenny Wilson</strong>
            <p>The food was excellent...</p>
            <span>★★★★★</span>
          </div>
          <div>
            <strong>Dianne Russell</strong>
            <p>We enjoyed the Eggs Benedict...</p>
            <span>★★★★★</span>
          </div>
          <div>
            <strong>Devon Lane</strong>
            <p>Normally wings are wings...</p>
            <span>★★★★☆</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomerFeedback;
