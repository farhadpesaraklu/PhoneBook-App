function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

export const addButtonClicked = () => actionCreator("ADD_CLICKED");
export const cancelButtonClicked = () => actionCreator("CANCEL_CLICKED");
export const saveButtonClicked = (record) => actionCreator("SAVE_CLICKED", record);
export const deleteButtonClicked = (id) => actionCreator("DELETE_CLICKED", id);
export const editButtonClicked = (record) => actionCreator("EDIT_CLICKED", record);
