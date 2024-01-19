import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionType } from "../action-types";

export const fetchBookings = () => {
  return async (dispatch: Dispatch<Action>) => {
    console.log("tttt");
    dispatch({
      type: ActionType.FETCH_BOOKING_LIST,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search?text=react"
      );
      console.log("data......", data);
      dispatch({
        type: ActionType.FETCH_BOOKING_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.FETCH_BOOKING_LIST_ERROR,
          payload: error.message,
        });
      }
    }
  };
};
