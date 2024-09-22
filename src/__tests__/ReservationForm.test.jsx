import { render, screen } from '@testing-library/react';
import ReservationForm from '../components/ReservationForm';

test('Renders the ReservationForm heading', () => {
  const availableTimesState = [{ date: '2024-09-22', times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] }];

  render(<ReservationForm availableTimesState={availableTimesState} dispatch={() => {}} />);

  const headingElement = screen.getByText(/Choose date/i);
  expect(headingElement).toBeInTheDocument();
});
