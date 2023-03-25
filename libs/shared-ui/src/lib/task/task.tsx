import { useCheckbox } from '../checkbox/checkbox.hook';
import Icon from '../icon/icon';
import styles from './task.module.css';

/* eslint-disable-next-line */
export interface TaskProps {
  id: number;
  label: string;
  onDelete: () => void;
}

export function Task({ id, label, onDelete }: TaskProps) {
  const [checkbox] = useCheckbox(label);

  return (
    <div className={styles['task']}>
      {checkbox}
      <div style={{ flexGrow: 1 }}></div>
      <button onClick={onDelete}>
        <Icon variant="trash-alt" color="red" />
      </button>
    </div>
  );
}

export default Task;
