import { actions } from './actions';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

const PropertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PROPERTY_LIST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        data: action.data.data,
        loading: false,
      };
    case actions.GET_PROPERTY_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error:action.error
      };

    default:
      return state;
  }
};

export default PropertyReducer;
