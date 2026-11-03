import { FiCheckCircle } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
    const location = useLocation();

    return (
    <div className="confirmation-container">
       <FiCheckCircle aria-hidden="true" />
       <h1>YOUR BOOKING HAS BEEN CONFIRMED!</h1>
       <p>Your table has been successfully reserved.</p>
        <dl className="dynamic-data">
           <dt>Date</dt>
           <dd>{location.state?.date}</dd>
           <dt>Time</dt>
           <dd>{location.state?.time}</dd>
           <dt>Guests</dt>
           <dd>{location.state?.guests}</dd>
           <dt>Occasion</dt>
           <dd>{location.state?.occasion}</dd>
       </dl>
       <p>We look forward to seeing you!</p>
    </div>
)}
