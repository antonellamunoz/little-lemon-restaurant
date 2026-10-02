import Homepage from "./Homepage.jsx";
import BookingPage from "./BookingPage";
import { Routes, Route } from "react-router-dom";

export default function Main() {
    return (
        <main>
           <Routes>
               <Route path="/" element={<Homepage />}></Route>
               <Route path="/bookings" element={<BookingPage />}></Route>
           </Routes>
        </main>
    )
}