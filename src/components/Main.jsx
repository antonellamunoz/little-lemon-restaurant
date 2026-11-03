import Homepage from "./Homepage.jsx";
import BookingPage from "./BookingPage.jsx";
import ConfirmedBooking from "./ConfirmedBooking.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

export function initializeTimes() {
    const todayDate = new Date();
    return fetchAPI(todayDate);
}

export function updateTimes(availableTimes, action) {
    return fetchAPI(new Date(action));
    }

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    function submitForm(formData) {
        if (submitAPI(formData) === true) {
            navigate("/booking-confirmed", {
                state: formData
            });
        }
    }

    return (
        <main>
           <Routes>
               <Route
                 path="/"
                 element={<Homepage />}
               />
               <Route
                 path="/bookings"
                 element={
                     <BookingPage
                         availableTimes={availableTimes}
                         dispatch={dispatch}
                         submitForm={submitForm}
                     />
                 }
               />
               <Route
                 path="/booking-confirmed"
                 element={<ConfirmedBooking />}
               />
           </Routes>
        </main>
    )
}
