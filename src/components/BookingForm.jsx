import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const timeOptions = availableTimes.map((availableTime) =>
          (<option key={availableTime}>{availableTime}</option>))

    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            date,
            time,
            guests,
            occasion
        };

        submitForm(formData);
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{display: "grid", maxWidth: "200px", gap: "20px"}}
        >
            <label htmlFor="res-date">Select date</label>
            <input
               type="date"
               id="res-date"
               name="res-date"
               required
               value={date}
               onChange={(e) => {
                setDate(e.target.value)
                dispatch(e.target.value)}}
            />
            <label htmlFor="res-time">Select time</label>
            <select
               id="res-time"
               name="res-time"
               required
               value={time}
               onChange={(e) => setTime(e.target.value)}
            >
               {timeOptions}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                placeholder="1"
                min="1" max="10"
                required
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                required
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
                <option value="graduation">Graduation</option>
            </select>
            <input type="submit" value="Confirm Your Reservation" />
        </form>
    )
}