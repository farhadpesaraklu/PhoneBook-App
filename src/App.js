import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import FilterableList from "./componenets/FilterableList";
import Form from "./componenets/EditOrAddForm";
import DispatchContext from "./context/dispatch";
import { reducer, DEFAULT_EDITING_RECORD_VALUE } from "./stateManager/Reducer";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { getData } from "./stateManager/actions";

export default function App() {
  const [{ records, mode, editingRecord }, dispatch] = useReducer(reducer, {
    records: [],
    mode: "search",
    editingRecord: DEFAULT_EDITING_RECORD_VALUE,
  });

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) => {
        dispatch(getData(res.data));
      });
  }, []);

  return (
    <Container>
      <Jumbotron>
        <DispatchContext.Provider value={dispatch}>
          {mode === "search" && <FilterableList data={records} />}
          {mode === "addOrEdit" && (
            <Form
              id={editingRecord.id}
              initialName={editingRecord.first_name}
              initialLastName={editingRecord.last_name}
              initialEmail={editingRecord.email}
            />
          )}
        </DispatchContext.Provider>
      </Jumbotron>
    </Container>
  );
}
