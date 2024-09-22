import { initializeTimes, updateTimes } from '../pages/Reservations';

describe('initializeTimes function', () => {
  test('should return the correct times for the next two weeks from Wednesday to Saturday', () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
    const sampleDay = times[0];
    expect(sampleDay.times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

describe('updateTimes function', () => {
  test('should return the state without changes when no reservation is made', () => {
    const initialState = [{ date: '2024-09-22', times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'], isSelected: true }];

    const action = { type: 'UPDATE_DATE', payload: '2024-09-22' };
    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual(initialState);
  });

  test('should remove the reserved time from the state', () => {
    const initialState = [{ date: '2024-09-22', times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] }];

    const action = { type: 'RESERVE_TIME', payload: { date: '2024-09-22', time: '18:00' } };
    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual([{ date: '2024-09-22', times: ['17:00', '19:00', '20:00', '21:00', '22:00'] }]);
  });
});
