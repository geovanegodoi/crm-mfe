import styles from './navbar-section.module.css';

/* eslint-disable-next-line */
export interface NavbarSectionProps {
  options: NavbarItemProps[];
  separator?: boolean;
}

export function NavbarSection({
  options,
  separator = false,
}: NavbarSectionProps) {
  return (
    <>
      {options.map((item, index) => (
        <NavbarItem key={index} {...item} />
      ))}
      {separator && <hr />}
    </>
  );
}

interface NavbarItemProps {
  icon: JSX.Element;
  text: string;
}

function NavbarItem({ icon, text }: NavbarItemProps) {
  return (
    <div className={styles['navbar-item']}>
      {icon}
      {text}
    </div>
  );
}

export default NavbarSection;
