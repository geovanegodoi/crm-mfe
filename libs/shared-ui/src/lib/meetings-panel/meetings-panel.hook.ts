import { useState } from 'react';
import { MeetingProps } from '../meeting/meeting';
import { faker } from '@faker-js/faker';

export function useMeetings(
  initial: MeetingProps[]
): [MeetingProps[], () => void] {
  const [meetings, setMeetings] = useState(initial);

  function addMeeting() {
    setMeetings((prev) => {
      const newItem: MeetingProps = generateRandomMeeting();
      return [...prev, newItem];
    });
  }

  function generateRandomMeeting() {
    const company = faker.company.bsBuzz();
    const name = faker.name.firstName();
    const date = faker.date.future().toLocaleString('en-GB').split(',');
    const duration = `${faker.datatype.number({ min: 15, max: 120 })}min`;

    return {
      title: [company, name],
      date: date[0],
      time: date[1],
      duration: duration,
    };
  }

  return [meetings, addMeeting];
}
