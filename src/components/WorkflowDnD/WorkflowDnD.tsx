import React, { useState, useEffect } from "react";
import "./WorkflowDnD.css";

type DroppableFuncs = {
  onDrop: (event: React.DragEvent<HTMLDivElement>, title: TaskStatus) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    taskName: string
  ) => void;
};

enum TaskStatus {
  inProgress = "In Progress",
  done = "Done"
}
enum TaskBackgroundColor {
  red = "rgb(255, 0, 0)",
  green = "rgb(0, 255, 0)",
  blue = "rgb(0,0,255)"
}
type Task = {
  id: string;
  taskName: string;
  type: TaskStatus;
  backgroundColor: TaskBackgroundColor;
};
const initstate: {
  tasks: Task[];
} = {
  tasks: [
    {
      id: "1",
      taskName: "Read book",
      type: TaskStatus.inProgress,
      backgroundColor: TaskBackgroundColor.red
    },
    {
      id: "2",
      taskName: "Pay bills",
      type: TaskStatus.inProgress,
      backgroundColor: TaskBackgroundColor.green
    },
    {
      id: "3",
      taskName: "Go to the gym",
      type: TaskStatus.done,
      backgroundColor: TaskBackgroundColor.blue
    },
    {
      id: "4",
      taskName: "Play baseball",
      type: TaskStatus.done,
      backgroundColor: TaskBackgroundColor.green
    }
  ]
};

export const WorkflowDnD: React.FC<{}> = props => {
  const [state, setState] = useState(initstate);

  // DnD functions
  const onDragStart = (event, taskName: string) => {
    console.log("dragstart on div: ", taskName);
    event.dataTransfer.setData("taskName", taskName);
  };
  const onDragOver = event => {
    event.preventDefault();
  };
  const onDrop = (event, cat) => {
    let taskName = event.dataTransfer.getData("taskName");
    let tasks = state.tasks.filter(task => {
      if (task.taskName === taskName) {
        task.type = cat;
      }
      return task;
    });
    setState({ ...state, tasks });
  };
  // bundle of DnD functions to make them easier to hand around
  const droppableFuncs: DroppableFuncs = {
    onDrop: onDrop,
    onDragOver: onDragOver,
    onDragStart: onDragStart
  };

  return (
    <div className="WorkflowDnD">
      <h1>To Do List Drag and Drop</h1>
      <DroppableSection
        className="inProgress"
        title={TaskStatus.inProgress}
        items={state.tasks.filter(t => t.type === TaskStatus.inProgress)}
        f={droppableFuncs}
      />
      <DroppableSection
        className="done"
        title={TaskStatus.done}
        items={state.tasks.filter(t => t.type === TaskStatus.done)}
        f={droppableFuncs}
      />
    </div>
  );
};

const DroppableSection: React.FC<{
  title: TaskStatus;
  items: Task[];
  f: DroppableFuncs;
  className?: string;
}> = props => {
  return (
    <div
      className={props.className + " droppable"}
      onDragOver={event => props.f.onDragOver(event)}
      onDrop={event => props.f.onDrop(event, props.title)}
    >
      <span className="group-header">{props.title}</span>
      {props.items.map(t => (
        <div
          key={t.id}
          onDragStart={event => props.f.onDragStart(event, t.taskName)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.backgroundColor }}
        >
          {t.taskName}
        </div>
      ))}
    </div>
  );
};
