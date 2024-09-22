import React, { useState } from 'react';

function ReservationForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '20:00',
    guests: 2,
    occasion: 'Birthday',
  });

  const [hasDateError, setHasDateError] = useState(true);
  const [formSubmited, setFormSubmited] = useState(false);

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setFormSubmited(true);
    setHasDateError(false);

    if (!formData.date) {
      setHasDateError(true);
      return false;
    }

    console.log('Form data submitted:', formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Choose date</label>
          <input className={hasDateError && formSubmited ? 'error' : ''} type="date" id="date" value={formData.date} onChange={handleChange} />
          {hasDateError && formSubmited ? <div className="error-details">Select a valid date</div> : ''}
        </div>

        <div>
          <label htmlFor="time">Choose time</label>
          <select id="time" value={formData.time} onChange={handleChange}>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" id="guests" placeholder="1" min="1" max="10" value={formData.guests} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={formData.occasion} onChange={handleChange}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div>
          <button type="submit" value="Make Your reservation">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
