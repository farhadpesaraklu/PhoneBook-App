import React from "react";
import { useDispatch } from "../context/dispatch";
import {
  deleteButtonClicked,
  editButtonClicked,
} from "../stateManager/actions";
import ListItem from "./ListItem";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function List({ data }) {
  const dispatch = useDispatch();
  const items = data.map((item) => {
    return (
      <ListItem
        key={item.id}
        text={
          <Row>
            <Col md="6">{item.name}</Col>
            <Col md="6">{item.phone}</Col>
          </Row>
        }
        onDelete={() => dispatch(deleteButtonClicked(item.id))}
        onEdit={() => dispatch(editButtonClicked(item))}
      />
    );
  });

  return <ListGroup variant="flush">{items}</ListGroup>;
}
