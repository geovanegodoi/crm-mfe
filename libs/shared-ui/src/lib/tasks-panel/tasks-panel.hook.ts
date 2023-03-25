import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { TaskProps } from '../task/task';

export function useTasks(
  initial: TaskProps[]
): [TaskProps[], () => void, (id: number) => void] {
  const [tasks, setTasks] = useState(initial);

  function addTask() {
    setTasks((prev) => [...prev, generateRandomTask()]);
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  }

  function generateRandomTask(): TaskProps {
    return {
      id: faker.datatype.number({ min: 1 }),
      label: faker.lorem.words(5),
      onDelete: () => console.log('deleted'),
    };
  }

  return [tasks, addTask, deleteTask];
}
