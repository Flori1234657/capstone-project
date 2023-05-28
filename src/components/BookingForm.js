import { useState } from "react";
import { useFormik } from "formik";

const BookingForm = ({ availableTimes, dispatch, handleSubmit }) => {
  const [checkIfNone, setCheckIfNone] = useState(true);

  const formik = useFormik({
    initialValues: {
      Date: "",
      Time: "",
      Guests: "",
      Occasion: "",
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formik.values);
    setCheckIfNone(true);

    for (const key in formik.values) {
      if (formik.values[key] == "") {
        setCheckIfNone(false);
      }
    }

    if (checkIfNone) {
      handleSubmit(formik.values);
      return;
    }
    alert("Please write all the requirement's!");
    return;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          data-testid="dat"
          name="Date"
          onChange={formik.handleChange}
          onSelect={dispatch}
          value={formik.values.Date}
          required
        />
      </div>
      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          name="Time"
          data-testid="tim"
          onChange={formik.handleChange}
          value={formik.values.Time}
          required
        >
          {availableTimes.availableTime.map((el) => (
            <option key={`k${el}`}>{el}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          min="1"
          max="10"
          id="guests"
          name="Guests"
          onChange={formik.handleChange}
          value={formik.values.Guests}
          required
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="Occasion"
          onChange={formik.handleChange}
          value={formik.values.Occasion}
          required
        >
          <option value="" disabled></option>
          <option value="Eid Al-Fitr">Eid Al-Fitr</option>
          <option value="Eid Al-Adha">Eid Al-Adha</option>
        </select>
      </div>

      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;
