import styles from './icon.module.css';

/* eslint-disable-next-line */
export interface IconProps {
  variant: string;
  size?: 'small' | 'default' | 'large' | 'xlarge' | 'xxlarge';
  color?: 'primary' | 'secondary' | 'white' | 'black' | 'red';
}

const sizes = {
  small: 'fa-sm',
  default: '',
  large: 'fa-lg',
  xlarge: 'fa-xl',
  xxlarge: 'fa-2xl',
};

export function Icon({ variant, size = 'default', color }: IconProps) {
  const iconCss = `fa fa-${variant}`;
  const sizeCss = sizes[size];
  return (
    <i
      className={`${iconCss} ${sizeCss}`}
      style={color && { color: `var(--${color}-color)` }}
    ></i>
  );
}

export default Icon;
