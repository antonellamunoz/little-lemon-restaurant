import BookingForm from "./BookingForm";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { test, expect, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
    cleanup();
})

test('Renders the bookingForm label', () => {
    render(
        <BookingForm
            availableTimes={["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]}
        />
    );
    const labelElement = screen.getByText("Select time");
    expect(labelElement).toBeInTheDocument();
})


test('Date input has the correct HTML5 validation attributes', () => {
    render(
        <BookingForm
            availableTimes={["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]}
        />
    );
    const dateInput = screen.getByLabelText("Select date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
})

test('Time input has the correct HTML5 validation attributes', () => {
    render(
        <BookingForm
            availableTimes={["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]}
        />
    );
    const timeInput = screen.getByLabelText("Select time");
    expect(timeInput).toHaveAttribute("required");
})

test('Number of guests input has the correct HTML5 validation attributes', () => {
    render(
        <BookingForm
            availableTimes={["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]}
        />
    );
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
})

test('Submit button is disabled when the form is invalid', () => {
    render(
        <BookingForm
            availableTimes={["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]}
        />
    );
    const submitButton = screen.getByRole("button", {
        name: "Confirm Your Reservation"
    });
    expect(submitButton).toBeDisabled();
    });

test('Submit button is enabled when the form is valid', () => {
    render(
        <BookingForm
            availableTimes={["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]}
            dispatch={() => {}}
        />
    )
    const submitButton = screen.getByRole("button", {
        name: "Confirm Your Reservation"
    });

    const date = screen.getByLabelText("Select date");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");

    const currentDateString = `${year}-${formattedMonth}-${formattedDay}`;

    fireEvent.change(date, {
        target: { value: currentDateString }
    });

    const time = screen.getByLabelText("Select time");
    const selectedTime = "18.00";
    fireEvent.change(time, {
        target: { value: selectedTime }
    });

    const guestsNumber = screen.getByLabelText("Number of guests");
    const selectedGuestsNumber = "4";
    fireEvent.change(guestsNumber, {
        target: { value: selectedGuestsNumber }
    });

    expect(submitButton).toBeEnabled();
})

