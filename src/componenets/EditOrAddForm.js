import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "../context/dispatch";
import {
  cancelButtonClicked,
  saveButtonClicked,
} from "../stateManager/actions";

export default function EditOrAddForm({
  initialName,
  initialLastName,
  initialEmail,
  id,
}) {
  const [name, setName] = useState(initialName);
  const [lastName, setLastName] = useState(initialLastName);
  const [email, setEmail] = useState(initialEmail);
  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(cancelButtonClicked());
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSave() {
    dispatch(
      saveButtonClicked({ name, lastName, email, id })
    );
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>FirstName:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>LastName:</Form.Label>
        <Form.Control
          type="text"
          placeholder="LastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSave}>
        Save
      </Button>{" "}
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </Form>
  );
}
