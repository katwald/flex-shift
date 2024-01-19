/* eslint-disable indent */
import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface BookingData {
  venueName: string;
  bookingStatus: {
    bookingStart: string;
    bookingEnd: string;
    bookingDescription: string;
    cleaningDate: string;
  };
  cleaningStatus: {
    cleanedDate: string;
    assignedCleaner: string;
    cleaningStatus: string;
    cleaningHour: number;
  };
  comments: string[];
}

interface BookingListState {
  loading: boolean;
  error: string | null;
  data: BookingData[];
}
const booking = [
  {
    venueName: "",
    bookingStatus: {
      bookingStart: "",
      bookingEnd: "",
      bookingDescription: "",
      cleaningDate: "",
    },
    cleaningStatus: {
      cleanedDate: "",
      assignedCleaner: "",
      cleaningStatus: "",
      cleaningHour: 0,
    },
    comments: [],
  },
];

const initialState = {
  loading: false,
  error: null,
  data: booking,
};
const reducer = (
  state: BookingListState = initialState,
  action: Action
): BookingListState => {
  switch (action.type) {
    case ActionType.FETCH_BOOKING_LIST:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_BOOKING_LIST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_BOOKING_LIST_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
