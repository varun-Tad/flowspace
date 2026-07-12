import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="task-card">
      <h3 className="task-card_title">{task.title}</h3>

      {task.description && (
        <p className="task-card_description">{task.description}</p>
      )}

      <span className={`priority priority--${task.priority}`}>
        {task.priority}
      </span>
    </article>
  );
}
