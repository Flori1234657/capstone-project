import { screen, render, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import BookingPage from "../pages/BookingPage";

describe(BookingForm, () => {
  it("If times are seted correctlly", () => {
    const { getByTestId } = render(<BookingForm />);
    const datFunc = getByTestId("dat");
    fireEvent.select(datFunc);
    const datVal = getByTestId("tim").textContent;
    expect(datVal).toMatch(/\d+/g);
  });
});
