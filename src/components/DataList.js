import { DataItem } from "../DataItem";

export const DataList = (props) => {
  return (
    <ul className="list-group todo-list">
      {props.data.map((task) => {
        return <DataItem title={task.taskTitle} key={task.id} />;
      })}
    </ul>
  );
};
