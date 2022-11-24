import {handleActions} from "redux-actions";
import { GET_QUOTE_BY_TICKER, SET_IS_BUSY } from "../actions/action-types";


const INITIAL_STATE = {
  isBusy: false,
  quote: null
};
  
const reducer = handleActions(
  {
    [SET_IS_BUSY]: (state, action) => ({
      ...state,
      isBusy: action.payload.isBusy
    }),
    [GET_QUOTE_BY_TICKER]: (state, action) => ({
      ...state,
      quote: action.payload.quote
    })
  },
  INITIAL_STATE
);
  
export default reducer;