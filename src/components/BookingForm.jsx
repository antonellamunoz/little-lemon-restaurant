import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [guestsTouched, setGuestsTouched] = useState(false);

    const formRef = useRef(null);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(formRef.current.checkValidity());
    }, [date, time, guests]);

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

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");

    const currentDateString = `${year}-${formattedMonth}-${formattedDay}`;

    const guestsError =
        guests >= 1 && guests <= 10
        ? null
        : "Number of guests must be between 1 and 10!"

    return (
        <form
            className="booking-form"
            aria-label="Table reservation"
            onSubmit={handleSubmit}
            ref={formRef}
        >
            <label htmlFor="res-date">
                Date<span aria-hidden="true">*</span>
            </label>
            <input
               type="date"
               id="res-date"
               name="res-date"
               required
               min={currentDateString}
               value={date}
               onChange={(e) => {
                setDate(e.target.value)
                dispatch(e.target.value)}}
            />
            <label htmlFor="res-time">
                Time<span aria-hidden="true">*</span>
            </label>
            <div className="field-wrapper">
                <select
                    id="res-time"
                    name="res-time"
                    required
                    value={time}
                    onChange={(e) =>
                        setTime(e.target.value)}
                >
                    <option value="" disabled>
                        Choose time
                    </option>
                    {timeOptions}
                </select>

                <FaChevronDown aria-hidden="true"/>
            </div>
            <label htmlFor="guests">
                Number of guests<span aria-hidden="true">*</span>
            </label>
             <div className="guests-field-wrapper">
                <input
                    type="number"
                    id="guests"
                    aria-describedby="guests-error"
                    aria-invalid={guestsTouched && Boolean(guestsError)}
                    name="guests"
                    placeholder="Enter number of guests"
                    min="1" max="10"
                    required
                    value={guests}
                    onChange={(e) =>
                        setGuests(e.target.value)}
                    onBlur={() =>
                        setGuestsTouched(true)}
                />
                {guestsTouched && guestsError && (
                    <div className="guests-validation-message">
                        <HiOutlineExclamationCircle  aria-hidden="true" />
                        <p id="guests-error">{guestsError}</p>
                    </div>
                )}
            </div>

            <label htmlFor="occasion">Occasion (optional)</label>
            <div className="field-wrapper">
                <select
                    id="occasion"
                    name="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="" disabled>Choose occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="graduation">Graduation</option>
                </select>

                <FaChevronDown aria-hidden="true"/>
             </div>
            <input
              type="submit"
              value="Confirm Your Reservation"
              disabled={!isFormValid}
            />
        </form>
    );
}