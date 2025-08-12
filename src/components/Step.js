import React from "react";

export default function Step({ step, formData, onChange, onNext, onPrev, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {step === 1 && (
        <>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              id="first_name"
              type="text"
              value={formData.first_name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              id="last_name"
              type="text"
              value={formData.last_name}
              onChange={onChange}
              required
            />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label htmlFor="model">Car Model:</label>
            <input
              id="model"
              type="text"
              value={formData.model}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="car_price">Car Price:</label>
            <input
              id="car_price"
              type="number"
              value={formData.car_price}
              onChange={onChange}
              required
            />
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div>
            <label htmlFor="card_info">Card Info:</label>
            <input
              id="card_info"
              type="text"
              value={formData.card_info}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="expiry_date">Expiry Date:</label>
            <input
              id="expiry_date"
              type="month"
              value={formData.expiry_date}
              onChange={onChange}
              required
            />
          </div>
        </>
      )}

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button type="button" onClick={onPrev}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={onNext}>
            Next
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
}
