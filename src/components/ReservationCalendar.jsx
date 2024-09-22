// ReservationCalendar.js
import React from 'react';

function ReservationCalendar({ availableTimesState }) {
  return (
    <table className="reservation-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>17:00</th>
          <th>18:00</th>
          <th>19:00</th>
          <th>20:00</th>
          <th>21:00</th>
          <th>22:00</th>
        </tr>
      </thead>
      <tbody>
        {availableTimesState.map(day => (
          <tr key={day.date}>
            <td>{day.date}</td>
            {['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map(time => (
              <td key={time} className={day.times.includes(time) ? 'available' : 'reserved'}>
                {day.times.includes(time) ? <span class="ok">Available</span> : <span class="no">Reserved</span>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReservationCalendar;
