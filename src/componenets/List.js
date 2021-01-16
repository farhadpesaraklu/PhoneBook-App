import React from "react";
import { useDispatch } from "../context/dispatch";
import {
  deleteButtonClicked,
  editButtonClicked,
} from "../stateManager/actions";
import ListItem from "./ListItem";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function List({ data }) {
  const dispatch = useDispatch();

  const items = data.map((item) => {
    return (
      <ListItem
        key={item.id}
        text={
          <Row style={{ alignItems: "center" }}>
            <Col md="3">
              <img
                style={{ borderRadius: "50%", with: "50px", height: "50px" }}
                src={item.avatar}
                alt="loading"
              />
            </Col>
            <Col md="3">{item.first_name}</Col>
            <Col md="3">{item.last_name}</Col>
            <Col md="3">{item.email}</Col>
          </Row>
        }
        onDelete={() => dispatch(deleteButtonClicked(item.id))}
        onEdit={() => dispatch(editButtonClicked(item))}
      />
    );
  });

  return <ListGroup variant="flush">{items}</ListGroup>;
}
