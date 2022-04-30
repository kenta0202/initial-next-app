import React from "react";

const TaskList: React.FC<{ key: string; title: string }> = ({ key, title }) => {
  return (
    <ul key={key} className="m-2 list-disc ">
      <li>{title}</li>
    </ul>
  );
};

export default TaskList;
