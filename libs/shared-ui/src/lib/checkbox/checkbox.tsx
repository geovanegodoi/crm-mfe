import styles from './checkbox.module.css';

/* eslint-disable-next-line */
export interface CheckboxProps {
  label: string;
  isChecked?: boolean;
  onChange?: () => void;
}

export function Checkbox({
  label,
  isChecked = false,
  onChange,
}: CheckboxProps) {
  return (
    <div className={styles['checkbox-container']}>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        {label || 'label undefined'}
      </p>
    </div>
  );
}

export default Checkbox;
