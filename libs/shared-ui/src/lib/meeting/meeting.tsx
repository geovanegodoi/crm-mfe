import Icon from '../icon/icon';
import styles from './meeting.module.css';

/* eslint-disable-next-line */
export interface MeetingProps {
  title: string[];
  date: string;
  time: string;
  duration: string;
}

export function Meeting({ title, date, time, duration }: MeetingProps) {
  return (
    <div className={styles['meeting']}>
      <MeetingTitle title={title} />
      <MeetingData icon="calendar" data={date} />
      <MeetingData icon="clock" data={time} />
      <MeetingData icon="clock" data={duration} />
    </div>
  );
}

interface MeetingInfoProps {
  icon: string;
  data: string;
}

function MeetingTitle({ title }: { title: string[] }) {
  return (
    <div className={styles['meeting-title-column']}>
      <Icon variant="bullhorn" size="small" color="secondary" />
      <div className={styles['meeting-title']}>
        <p>{(title && title[0]) || 'undefined'}</p>
        <p>{(title && title[1]) || 'undefined'}</p>
      </div>
    </div>
  );
}

function MeetingData({ icon, data }: MeetingInfoProps) {
  return (
    <div className={styles['meeting-data-column']}>
      <Icon variant={icon} size="small" color="secondary" />
      <p>{data}</p>
    </div>
  );
}

export default Meeting;
