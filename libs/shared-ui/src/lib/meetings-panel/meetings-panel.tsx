import Meeting, { MeetingProps } from '../meeting/meeting';
import Panel from '../panel/panel';
import { useMeetings } from './meetings-panel.hook';

/* eslint-disable-next-line */
export interface MeetingsPanelProps {
  meetings?: MeetingProps[];
}

export function MeetingsPanel({ meetings: initial }: MeetingsPanelProps) {
  const [meetings, addMeeting] = useMeetings(initial || []);

  return (
    <Panel
      title="Next Coming Meetings"
      onClick={addMeeting}
      fallback={meetings.length === 0}
    >
      {meetings.map((item, index) => (
        <Meeting key={index} {...item} />
      ))}
    </Panel>
  );
}

export default MeetingsPanel;
