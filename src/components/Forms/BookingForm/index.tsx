import React, { useState } from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import TextArea from "../../common/TextArea";

interface Props {
  venue: string;
  startDate: Date;
  endDate: Date;
  description: string;
  cleaningDate: Date;

  // booking: string;
}

const BookingForm: React.FC<Props> = ({
  venue,
  startDate,
  endDate,
  description,
  cleaningDate,
}) => {
  const venues = ["venue1", "venue2", "venue3", "venue4"];

  return (
    <form onSubmit={() => console.log("dispatchUpdatebooking")}>
      <div className="booking-form edit-form">
        <div className="booking-form_select">
          <label className="booking-form__select--label">select Venue</label>
          <select
            className="booking-form__select--options"
            name="venue"
            value={venue}
            onChange={() => console.log("first")}
          >
            {venues.map((venue) => (
              <option key={venue} value={venue}>
                {venue}
              </option>
            ))}
          </select>
        </div>
        <div className="booking-form__input">
          <Input
            label="Start Date"
            name="start date"
            value={startDate.toDateString()}
            type="datetime-local"
            onChange={() => console.log("onchange")}
          />
        </div>
        <div className="booking-form__input">
          <Input
            label="End Date"
            name="end date"
            value={endDate.toDateString()}
            type="datetime-local"
            onChange={() => "onchange"}
          />
        </div>
        <div className="booking-form__input">
          <Input
            label="CleaningDate"
            name="cleaningDate"
            value={cleaningDate.toDateString()}
            type="date"
            onChange={() => console.log(onchange)}
          />
        </div>
        <div className="booking-form__text-area">
          <TextArea
            label="Description"
            name="description"
            value={description}
            rows={4}
            cols={30}
            type="text"
          />
        </div>

        {/* <TextArea
          name="cleaningTag"
          value={description}
          rows="4"
          cols="30"
          type="text"
          onChange={({ target }) => setCleaningTag(target.value)}
        /> */}
        <div className="booking-form__button">
          <Button primary>submit</Button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
