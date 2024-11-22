import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
    const seedRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185552;
        var s = seed % m;
        return function () {
            return (s = (s * a) % m) / m;
        };
    };

    const fetchAPI = function (date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + `:00`);
            }
            if (random() > 0.5) {
                result.push(i + `:30`);
            }
        }
        return result;
    };

    const submitApi = function (formData) {
        return true;
    };

    // Reducer setup
    const initialState = { availableTimes: fetchAPI(new Date()) };

    const updateTimes = (state, action) => {
        return { availableTimes: fetchAPI(action.date) };
    };

    const [state, dispatch] = useReducer(updateTimes, initialState);

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitApi(formData)) {
            navigate("/confirmed");
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route
                    path="/booking"
                    element={
                        <Booking
                            availableTimes={state.availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;
