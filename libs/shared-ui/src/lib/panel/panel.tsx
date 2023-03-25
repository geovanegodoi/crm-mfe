import Icon from '../icon/icon';
import styles from './panel.module.css';

/* eslint-disable-next-line */
export interface PanelProps {
  title: string;
  onClick: () => void;
  children: JSX.Element | JSX.Element[];
}

export function Panel({ title, onClick, children }: PanelProps) {
  return (
    <div className="card">
      <div className={styles['panel-title']}>
        <p>{title}</p>
        <button onClick={onClick}>
          <Icon variant="plus-circle" color="secondary" size="xlarge" />
        </button>
      </div>
      <div className={styles['panel-content']}>
        {children || <UndefinedContent />}
      </div>
    </div>
  );
}

function UndefinedContent() {
  return (
    <>
      <div>undefined</div>
      <div>undefined</div>
      <div>undefined</div>
    </>
  );
}

export default Panel;
