import { initialTask } from "../data/tasks";
import type { TaskStatus } from "../types/task";
import { KanbanColumn } from "./KanbanColumn";

interface Column {
  title: string;
  status: TaskStatus;
}

const columns: Column[] = [
  { title: "Backlog", status: "backlog" },
  { title: "To Do", status: "todo" },
  { title: "In Progress", status: "in-progress" },
  { title: "Done", status: "done" },
];

export function KanbanBoard() {
  return (
    <main className="kanban-board">
      {columns.map((column) => {
        const matchingTasks = initialTask.filter(
          (task) => task.status === column.status,
        );

        return (
          <KanbanColumn
            key={column.status}
            title={column.title}
            tasks={matchingTasks}
          />
        );
      })}
    </main>
  );
}
