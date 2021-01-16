export const DEFAULT_EDITING_RECORD_VALUE = {
  first_name: "",
  last_name: "",
  email: "",
  id: "",
  avatar:""
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_CLICKED":
      return {
        ...state,
        mode: "addOrEdit",
      };
    case "CANCEL_CLICKED":
      return {
        ...state,
        mode: "search",
        editingRecord: DEFAULT_EDITING_RECORD_VALUE,
      };
    case "DELETE_CLICKED":
      return {
        ...state,
        mode: "search",
        records: state.records.filter((item) => item.id !== action.payload),
      };
    case "EDIT_CLICKED":
      return {
        ...state,
        mode: "addOrEdit",
        editingRecord: action.payload,
      };

    case "DATA_RECEIVED":
      return {
        ...state,
        records: action.payload,
      };

    case "SAVE_CLICKED":
      return handleSave(state, action.payload);

    default:
      return state;
  }
}

function handleSave(state, { id="", name="", LastName="", email="", avatar="" }) {
  const { records } = state;
  let newRecords = [];
  if (!!id) {
    const index = records.findIndex((x) => x.id === id);
    if (index !== -1) {
      newRecords = [...records];
      newRecords.splice(index, 1, { id, name, LastName, email, avatar });
    }
  } else {
    newRecords = [...records, new PhoneBookRecords(name, LastName, email)];
  }
  return {
    ...state,
    mode: "search",
    editingRecord: DEFAULT_EDITING_RECORD_VALUE,
    records: newRecords,
  };
}
class PhoneBookRecords {
  constructor(name, LastName, email) {
    this.name = name;
    this.LastName = LastName;
    this.email = email;
    this.id = Math.random().toString();
  }
}
