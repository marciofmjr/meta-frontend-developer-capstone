import { useReducer } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import ReservationCalendar from '../components/ReservationCalendar';
import ReservationForm from '../components/ReservationForm';

function generateAvailableDates() {
  const availableDates = [];
  const today = new Date();

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayOfWeek = date.getDay();
    if (dayOfWeek >= 3 && dayOfWeek <= 6) {
      availableDates.push({
        date: date.toISOString().split('T')[0],
        times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      });
    }
  }
  return availableDates;
}

export function initializeTimes() {
  return generateAvailableDates();
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_DATE':
      return state.map(day => {
        if (day.date === action.payload) {
          return { ...day, isSelected: true };
        }
        return { ...day, isSelected: false };
      });

    case 'RESERVE_TIME':
      return state.map(day => {
        if (day.date === action.payload.date) {
          return {
            ...day,
            times: day.times.filter(time => time !== action.payload.time),
          };
        }
        return day;
      });

    default:
      return state;
  }
}

function Reservations() {
  const [availableTimesState, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <Header />
      <Main>
        <PageTitle title="Reservations" />
        <ReservationCalendar availableTimesState={availableTimesState} />
        <ReservationForm availableTimesState={availableTimesState} dispatch={dispatch} />
      </Main>
      <Footer />
    </>
  );
}

export default Reservations;
