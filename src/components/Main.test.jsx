import { initializeTimes } from "./Main";
import { updateTimes } from "./Main";
import { test, expect } from "vitest"

globalThis.fetchAPI = () => ["17.00", "18.00", "19.00"];

test("initializeTimes returns a non-empty array with available times", () => {
    expect(initializeTimes().length).toBeGreaterThan(0);
})

test("updateTimes returns available booking times for a selected date", () => {
    const availableTimes = ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"];
    const action = "2026-10-20";
    expect(updateTimes(availableTimes, action)).toEqual(["17.00", "18.00", "19.00"]);
})
