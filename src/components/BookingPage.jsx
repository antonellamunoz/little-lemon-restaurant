import BookingForm from "./BookingForm.jsx";
import "./BookingPage.css";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <div className="form-container">
          <h1>Reserve a Table</h1>
          <p className="required-fields-note">
            <span aria-hidden="true">*</span>
            Required fields
          </p>
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
    )
}
