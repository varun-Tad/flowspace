import "./App.css";
import { KanbanBoard } from "./components /KanbanBoard";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="app-header__eyebrow">Project workspace</p>
          <h1>FlowSpace</h1>
          <p>Plan projects and collaborate with your team.</p>
        </div>
      </header>
      <KanbanBoard />
    </div>
  );
}

export default App;
