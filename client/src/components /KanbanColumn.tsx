import type { Task } from "../types/task";
import { TaskCard } from "./TaskCard";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}

export function KanbanColumn({ title, tasks }: KanbanColumnProps) {
  return (
    <section className="kanban-column">
      <header className="kanban-column__header">
        <h2>{title}</h2>
        <span className="kanban-column__count">{tasks.length}</span>
      </header>

      <div className="kanban-column__tasks">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p className="kanban-column__empty">No tasks</p>
        )}
      </div>
    </section>
  );
}
