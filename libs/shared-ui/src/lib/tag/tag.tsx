import styles from './tag.module.css';

/* eslint-disable-next-line */
export interface TagProps {
  variant: 'active' | 'in-progress' | 'done' | 'high';
}

export function Tag({ variant }: TagProps) {
  const variantClass = styles[`tag-${variant}`];
  return <div className={`${styles['tag']} ${variantClass}`}>{variant}</div>;
}

export default Tag;
