import Panel from '../panel/panel';
import Task, { TaskProps } from '../task/task';
import { useTasks } from './tasks-panel.hook';
import styles from './tasks-panel.module.css';

/* eslint-disable-next-line */
export interface TasksPanelProps {
  tasks?: TaskProps[];
}

export function TasksPanel({ tasks: initial }: TasksPanelProps) {
  const [tasks, addTask, deleteTask] = useTasks(initial || []);

  return (
    <Panel title="Create New Task" onClick={addTask}>
      {(tasks &&
        tasks.map((item, index) => (
          <Task key={index} {...item} onDelete={() => deleteTask(item.id)} />
        ))) || <p>Data missing =(</p>}
    </Panel>
  );
}

export default TasksPanel;
