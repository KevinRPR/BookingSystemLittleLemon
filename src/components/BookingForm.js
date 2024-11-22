import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occ, setOcc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!date || !times) {
            alert("Please fill out all required fields.");
            return;
        }
        props.submitForm({ date, times, guests, occ });
    };

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        props.dispatch({ date: new Date(selectedDate) });
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input
                                id="book-date"
                                value={date}
                                onChange={(e) => handleDateChange(e.target.value)}
                                type="date"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select
                                id="book-time"
                                value={times}
                                onChange={(e) => setTimes(e.target.value)}
                                required
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.length > 0 ? (
                                    props.availableTimes.map((availableTime) => (
                                        <option key={availableTime} value={availableTime}>
                                            {availableTime}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>No available times</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="guests">Number of Guests:</label>
                            <input
                                id="guests"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                type="number"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="occ">Occasion:</label>
                            <input
                                id="occ"
                                value={occ}
                                onChange={(e) => setOcc(e.target.value)}
                                type="text"
                                required
                            />
                        </div>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
