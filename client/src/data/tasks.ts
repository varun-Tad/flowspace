import type { Task } from "../types/task";

export const initialTask: Task[] = [
  {
    id: "task-1",
    title: "Plan workspace requirements",
    description: "Identify the essential features for the first version.",
    status: "backlog",
    priority: "medium",
  },
  {
    id: "task-2",
    title: "Design the login page",
    description: "Create a simple responsive login screen.",
    status: "todo",
    priority: "high",
  },
  {
    id: "task-3",
    title: "Create project API",
    status: "in-progress",
    priority: "high",
  },
  {
    id: "task-4",
    title: "Set up the repository",
    status: "done",
    priority: "low",
  },
  {
    id: "task-5",
    title: "Create task card design",
    status: "todo",
    priority: "medium",
  },
];
