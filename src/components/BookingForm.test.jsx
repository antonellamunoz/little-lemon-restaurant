import BookingForm from "./BookingForm";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

test('Renders the bookingForm label', () => {
    render(
        <BookingForm
            availableTimes={["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]}
        />
    );
    const labelElement = screen.getByText("Select time");
    expect(labelElement).toBeInTheDocument();
})
