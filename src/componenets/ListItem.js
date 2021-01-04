import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ListItem({ text, onDelete, onEdit }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleDelete = () => setShow(true);

  const handleConfirmDelete = () => {
    setShow(false);
    onDelete();
  };

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md="10">{text}</Col>
          <Col md="2">
            <Button variant="outline-secondary" onClick={onEdit}>
              Edit
            </Button>{" "}
            <Button variant="outline-secondary" onClick={handleDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're about to delete a record. Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmDelete}>
            Yes  
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
