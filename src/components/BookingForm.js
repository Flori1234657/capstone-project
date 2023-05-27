import { useState } from "react";
import { useFormik } from "formik";

const BookingForm = () => {
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
    console.log(formik);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="Date"
        onChange={formik.handleChange}
        value={formik.values.Date}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        name="Time"
        onChange={formik.handleChange}
        value={formik.values.Time}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="Guests"
        onChange={formik.handleChange}
        value={formik.values.Guests}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="Occasion"
        onChange={formik.handleChange}
        value={formik.values.Occasion}
      >
        <option>Eid Al-Fitr</option>
        <option>Eid Al-Adha</option>
      </select>
      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;
