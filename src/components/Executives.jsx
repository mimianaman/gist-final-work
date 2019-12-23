import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const Executives = ({ profileImage, name, role, profile }) => {
  const [showModal, setshowModal] = useState(false);

  return (
    <div className="col-md-3 mt-3 mx -auto">
      <Card>
        <Card.Img variant="top" src={profileImage} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>{role}</Card.Text>
          <Button variant="info" onClick={() => setshowModal(true)}>
            Profile
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{(role, profile)}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="Dark" onClick={() => setshowModal(false)}>
            Close
          </Button>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Executives;
