import {ActionType} from '../action-types'
 import {BookingData} from '../reducers/bookingReducer'

interface fetchBookings{
    type: ActionType.FETCH_BOOKING_LIST
}

interface fetchBookingSuccess{
    type: ActionType.FETCH_BOOKING_LIST_SUCCESS;
    payload:BookingData[]
}
interface fetchBookingError {
    type: ActionType.FETCH_BOOKING_LIST_ERROR;
    payload: string
}

export type Action = fetchBookings | fetchBookingSuccess | fetchBookingError