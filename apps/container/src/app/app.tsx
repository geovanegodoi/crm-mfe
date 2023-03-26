import 'react-toggle/style.css';
import styles from './app.module.css';
import React, { useState } from 'react';
import Toggle from 'react-toggle';

const Sidebar = React.lazy(() => import('sidebar/Module'));
const WeatherReport = React.lazy(() => import('weatherreport/Module'));
const Meetings = React.lazy(() => import('meetings/Module'));
const Tasks = React.lazy(() => import('tasks/Module'));

export function App() {
  const [showMfe, setShowMfe] = useState(false);
  const outline = showMfe ? { outline: 'var(--outline)' } : {};

  return (
    <div className={styles['container']}>
      <div className={styles['mfe-sidebar']} style={outline}>
        <Sidebar />
      </div>
      <main className={styles['main-container']}>
        <h1>Dashboard</h1>
        <div className={styles['mfe-toggle']}>
          <Toggle
            defaultChecked={showMfe}
            icons={false}
            onChange={() => setShowMfe(!showMfe)}
          />
          <span>Show MFE</span>
        </div>
        <div className={styles['mfe-weather']} style={outline}>
          <WeatherReport />
        </div>
        <div className={styles['lorem']}>
          <Lorem />
        </div>
        <div className={styles['mfe-meetings']} style={outline}>
          <Meetings />
        </div>
        <div className={styles['mfe-tasks']} style={outline}>
          <Tasks />
        </div>
      </main>
      <footer>
        <span>Microfrontend Application | Powered by Nx</span>
        <span>Version 1.0</span>
      </footer>
    </div>
  );
}

export default App;

function Lorem() {
  return (
    <>
      <h2>Lorem Ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at quam
        faucibus, placerat ante sit amet, auctor diam. In justo turpis, ultrices
        ut vehicula et, pulvinar eu dui. Donec euismod ornare luctus. Aliquam
        diam purus, sagittis ac feugiat sit amet, commodo at nisi. Proin
        sollicitudin nulla quis ex elementum sollicitudin. Curabitur tempor
        feugiat ante, quis aliquet risus tincidunt vel. Nulla purus lacus,
        suscipit at egestas ac, sagittis nec urna. Maecenas quis volutpat dui.
        Morbi a imperdiet sem.
      </p>
    </>
  );
}
