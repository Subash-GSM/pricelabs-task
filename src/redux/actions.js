export const actions = {
  GET_PROPERTY_LIST: 'GET_PROPERTY_LIST',
  GET_PROPERTY_LIST_SUCCESS: 'GET_PROPERTY_LIST_SUCCESS',
  GET_PROPERTY_LIST_FAILURE: 'GET_PROPERTY_LIST_FAILURE',
};

export const getPropertyList = (data) => {
  return {
    type: actions.GET_PROPERTY_LIST,
    payload: data,
  };
};
