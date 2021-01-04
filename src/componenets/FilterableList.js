import React, { useMemo, useRef, useState, useEffect } from "react";
import { useDispatch } from "../context/dispatch";
import { addButtonClicked } from "../stateManager/actions";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import List from "./List";

export default function FilterableList({ data }) {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const filteredItems = useMemo(() => {
    return data.filter((item) => {
      return item.name.toLowerCase().includes(keyword.toLowerCase());
    });
  }, [data, keyword]);

  const searchInput = useRef();
  useEffect(() => {
    searchInput.current.focus();
  });
  return (
    <Form>
      <Form.Row>
        <Col md="11">
          <Form.Control
            type="text"
            placeholder="Enter keyword to search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            ref={searchInput}
          />
        </Col>
        <Col md="1">
          <Button onClick={() => dispatch(addButtonClicked())}>Add</Button>
        </Col>
      </Form.Row>
      <br />
      <List data={filteredItems} />
    </Form>
  );
}
