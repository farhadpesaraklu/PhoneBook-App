import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "../context/dispatch";
import {
  cancelButtonClicked,
  saveButtonClicked,
} from "../stateManager/actions";

export default function EditOrAddForm({ initialName, initialPhone, id }) {
  const [name, setName] = useState(initialName);
  const [phone, setPhone] = useState(initialPhone);
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const dispatch = useDispatch();

  function handleSave() {
    if (!name.length) {
      setNameValid(false);
    }
    if (!phone.length) {
      setPhoneValid(false);
    }
    if (name.length && phone.length) {
      dispatch(saveButtonClicked({ name, phone, id }));
    }
  }

  function handleCancel() {
    dispatch(cancelButtonClicked());
  }

  function handleNameChange(e) {
    setName(e.target.value);
    if (name.length > 0) {
      setNameValid(true);
    }
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
    if (phone.length > 0) {
      setPhoneValid(true);
    }
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        {!nameValid ? (
          <Form.Text style={{ color: "red" }}>
            Please Enter Your Name!
          </Form.Text>
        ) : (
          () => undefined
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        {!phoneValid ? (
          <Form.Text style={{ color: "red" }}>
            Please Enter Your phone!
          </Form.Text>
        ) : (
          () => undefined
        )}
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
