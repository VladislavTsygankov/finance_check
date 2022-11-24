import axios from 'axios';
import {createAction} from "redux-actions";
import { GET_QUOTE_BY_TICKER, SET_IS_BUSY } from './action-types';

const getQuoteAction = createAction(GET_QUOTE_BY_TICKER);
const setIsBusy = createAction(SET_IS_BUSY);

 
const API_SERVER_URL = "http://localhost:4000";

const getQuote = (ticker: string) => async (dispatch: any) => {
  dispatch(setIsBusy({isBusy: true}));
  
  try {
    const {data: quote} = await axios.get(`${API_SERVER_URL}?ticker=${ticker}`);
    dispatch(getQuoteAction({quote}));
    dispatch(setIsBusy({isBusy: false}));
  } catch {
    dispatch(setIsBusy({isBusy: false}));
  }
};
  
export {
  getQuote 
};
