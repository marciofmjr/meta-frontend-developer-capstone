import React, { useEffect, useState } from 'react';

function ReservationForm({ availableTimesState, dispatch }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [hasDateError, setHasDateError] = useState(false);
  const [hasTimeError, setHasTimeError] = useState(false);
  const [hasOcasionError, setHasOcasionError] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);

  useEffect(() => {
    if (formData.date) {
      const selectedDay = availableTimesState.find(day => day.date === formData.date);
      if (selectedDay) {
        setAvailableTimes(selectedDay.times);
      }
    }
  }, [formData.date, availableTimesState]);

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === 'date') {
      dispatch({ type: 'UPDATE_DATE', payload: value });
    }
  };

  const clearForm = () => {
    setFormData({
      date: '',
      time: '',
      guests: 1,
      occasion: '',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setFormSubmited(true);
    setHasDateError(!formData.date);
    setHasTimeError(!formData.time);
    setHasOcasionError(!formData.occasion);

    if (!formData.date || !formData.time || !formData.occasion) {
      return;
    }

    dispatch({ type: 'RESERVE_TIME', payload: { date: formData.date, time: formData.time } });
    console.log('Reserva feita:', formData);
    alert('Reserva Feita com Sucesso!');
    clearForm();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Choose date</label>
          <input
            className={hasDateError && formSubmited ? 'error' : ''}
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            min={availableTimesState[0]?.date}
            max={availableTimesState[availableTimesState.length - 1]?.date}
            aria-required="true"
            aria-invalid={hasDateError && formSubmited}
            aria-describedby="dateError"
          />
          {hasDateError && formSubmited ? <div className="error-details">Select a valid date</div> : ''}
        </div>

        <div>
          <label htmlFor="time">Choose time</label>
          <select
            className={hasTimeError && formSubmited ? 'error' : ''}
            id="time"
            value={formData.time}
            onChange={handleChange}
            disabled={!formData.date || availableTimes.length === 0}
            aria-required="true"
            aria-invalid={hasTimeError && formSubmited}
            aria-describedby="timeError"
          >
            <option value="">--select--</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {hasTimeError && formSubmited ? <div className="error-details">Select a valid time</div> : ''}
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" id="guests" placeholder="1" min="1" max="10" value={formData.guests} onChange={handleChange} aria-required="true" />
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            className={hasOcasionError && formSubmited ? 'error' : ''}
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={hasOcasionError && formSubmited}
            aria-describedby="occasionError"
          >
            <option value="">--select--</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {hasOcasionError && formSubmited ? <div className="error-details">Select an occasion</div> : ''}
        </div>

        <div>
          <button type="submit" value="Make Your reservation" aria-label="Submit reservation form">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
