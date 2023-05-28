import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import Header from "./components/Header";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/bookingConfirmation" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
