import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import FilterableList from "./componenets/FilterableList";
import Form from "./componenets/EditOrAddForm";
import DispatchContext from "./context/dispatch";
import { reducer, DEFAULT_EDITING_RECORD_VALUE } from "./stateManager/Reducer";
import Container  from "react-bootstrap/Container";
import Jumbotron  from "react-bootstrap/Jumbotron";

export default function App() {
  const [{ records, mode, editingRecord }, dispatch] = useReducer(reducer, {
    records: [],
    mode: "search",
    editingRecord: DEFAULT_EDITING_RECORD_VALUE,
  });

  return (
    <Container>
      <Jumbotron>
    <DispatchContext.Provider value={dispatch}>
      {mode === "search" && <FilterableList data={records} />}
      {mode === "addOrEdit" && (
        <Form
          id={editingRecord.id}
          initialName={editingRecord.name}
          initialPhone={editingRecord.phone}
        />
      )}
    </DispatchContext.Provider>
    </Jumbotron>
    </Container>
  );
}
