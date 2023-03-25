import styles from './sidebar.module.css';
import logo from '../assets/logo.png';
import * as SectionStories from '../navbar-section/navbar-section.stories';
import NavbarSection from '../navbar-section/navbar-section';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <div className={styles['sidebar']}>
      <img src={logo} alt={logo} />
      <nav>
        <NavbarSection {...SectionStories.Primary.args} />
        <NavbarSection {...SectionStories.Secondary.args} />
      </nav>
    </div>
  );
}

export default Sidebar;
