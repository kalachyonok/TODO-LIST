import { DataItem } from "../DataItem";

export const DataList = (props) => {
  const selectedIdHandler = (delitedItemId) => {
    const indexDelitItem = props.data.findIndex(
      (task) => task.id === delitedItemId
    );

    const shangedData = [...props.data];

    shangedData.splice(indexDelitItem, 1);
    props.onUpgradeData(shangedData);
  };

  return (
    <ul className="list-group todo-list">
      {props.data.map((task) => {
        return (
          <DataItem
            title={task.taskTitle}
            key={task.id}
            id={task.id}
            onChildClick={selectedIdHandler}
          />
        );
      })}
    </ul>
  );
};
