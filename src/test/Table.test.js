import { screen, render, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import BookingPage from "../pages/BookingPage";

describe(BookingForm, () => {
  it("Values not to bee empty string", () => {
    const { getByTestId } = render(<BookingForm />);
    const gsInp = getByTestId("gs");
    fireEvent.input(gsInp);
    const gsVal = getByTestId("gs").textContent;
    expect(gsVal).toMatch(/\d+/g);
  });
});
