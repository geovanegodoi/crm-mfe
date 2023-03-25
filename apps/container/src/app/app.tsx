import styles from './app.module.css';
import React from 'react';
const Sidebar = React.lazy(() => import('sidebar/Module'));
const WeatherReport = React.lazy(() => import('weatherreport/Module'));
const Meetings = React.lazy(() => import('meetings/Module'));
const Tasks = React.lazy(() => import('tasks/Module'));

export function App() {
  return (
    <div className={styles['container']}>
      <div className={styles['sidebar-container']}>
        <Sidebar />
      </div>
      <div className={styles['main-container']}>
        <main>
          <h1>Dashboard</h1>
          <section>
            <WeatherReport />
            <Meetings />
          </section>
          <section>
            <LatestProjects />
            <Tasks />
          </section>
        </main>
        <footer>
          <span>Microfrontend Application | Powered by Nx</span>
          <span>Version 1.0</span>
        </footer>
      </div>
    </div>
  );
}

export default App;

function LatestProjects() {
  return (
    <div className={styles['card']}>
      <h3>Latest Projects !</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit
        autem recusandae esse perspiciatis rerum, dolorum error voluptatem iste,
        provident quibusdam odit? Aliquam quos porro voluptatum facere neque.
        Fuga, pariatur?
      </p>
    </div>
  );
}
