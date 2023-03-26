import Icon from '../icon/icon';
import styles from './panel.module.css';

/* eslint-disable-next-line */
export interface PanelProps {
  title: string;
  onClick: () => void;
  children: JSX.Element | JSX.Element[];
  fallback: boolean;
}

export function Panel({ title, onClick, children, fallback }: PanelProps) {
  return (
    <div className={styles['panel']}>
      <div className={styles['panel-title']}>
        <p>{title}</p>
        <button onClick={onClick}>
          <Icon variant="plus-circle" color="secondary" size="xlarge" />
        </button>
      </div>
      <div className={styles['panel-content']}>
        {fallback ? <NoDataFound /> : children}
      </div>
    </div>
  );
}

function NoDataFound() {
  return (
    <div style={{ color: '#bec0c3' }}>
      <p>No data found</p>
    </div>
  );
}

export default Panel;
