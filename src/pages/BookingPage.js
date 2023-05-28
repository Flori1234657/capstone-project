import { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const nav = useNavigate();
  const [allowNav, setAllowNav] = useState(true);
  const date = new Date();
  const [randTimes, setRandTimes] = useState();
  const [selDat, setSelDat] = useState();

  const INITIAL_STATE = {
    availableTime: ["", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`:
        return { availableTime: ["", ...randTimes] };
      default:
        return {
          availableTime: ["", ...randTimes],
        };
    }
  };

  const [state, dispatch] = useReducer(updateTimes, INITIAL_STATE);
  const initializeTimes = (e) => {
    dispatch({ type: e.target.value });
    setSelDat(e.target.value);
    setRandTimes(fetchAPI(date));
  };

  const handleSubmit = (obj) => {
    setAllowNav(submitAPI(obj));
    if (allowNav) {
      nav("/bookingConfirmation");
      return;
    }
    return;
  };

  return (
    <BookingForm
      availableTimes={state}
      dispatch={initializeTimes}
      handleSubmit={handleSubmit}
    />
  );
};

export default BookingPage;
