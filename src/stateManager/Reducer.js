export const DEFAULT_EDITING_RECORD_VALUE = {
  name: "",
  phone: "",
  id: "",
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

    case "SAVE_CLICKED":
      return handleSave(state, action.payload);

    default:
      return state
  }
}

function handleSave(state, { id, name, phone }) {
  const { records } = state;
  let newRecords = [];
  if (!!id) {
    const index = records.findIndex((x) => x.id === id);
    if (index !== -1) {
      newRecords = [...records];
      newRecords.splice(index, 1, { name, phone, id });
    }
  } else {
    newRecords = [...records, new PhoneBookRecords(name, phone)];
  }
  return {
    ...state,
    mode: "search",
    editingRecord: DEFAULT_EDITING_RECORD_VALUE,
    records : newRecords
  };
}
class PhoneBookRecords {
    constructor(name, phone) {
      this.name = name;
      this.phone = phone;
      this.id = Math.random().toString();
    }
  }