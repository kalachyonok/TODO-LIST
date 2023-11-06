import { DataItem } from "../DataItem";

export const DataList = (props) => {
  return (
    <ul className="list-group todo-list">
      {props.data.map((task) => {
        return (
          <DataItem
            title={task.taskTitle}
            key={task.id}
            id={task.id}
            isImportant={task.isImportant}
            isDone={task.isDone}
            onChildClick={props.onUpgradeData}
            onDoImportant={props.onChangeImportantTask}
          />
        );
      })}
    </ul>
  );
};
