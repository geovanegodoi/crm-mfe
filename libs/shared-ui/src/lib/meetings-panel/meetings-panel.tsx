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
    <Panel title="Next Coming Meetings" onClick={addMeeting}>
      {meetings.length === 0 ? (
        <NoMeetingsFound />
      ) : (
        meetings.map((item, index) => <Meeting key={index} {...item} />)
      )}
    </Panel>
  );
}

function NoMeetingsFound() {
  return (
    <div style={{ padding: '1em' }}>
      <p>No meetings found</p>
    </div>
  );
}

export default MeetingsPanel;
