import { Header } from "./components/Header";
import { Form } from "./components/Form";
import style from "./App.module.css";
import { useCallback, useState } from "react";
import { DataList } from "./components/DataList";
import { Filter } from "./components/Filter";

const data = [
  {
    taskTitle: "Drink coffee",
    id: "1",
    key: "1",
    isImportant: false,
    isDone: false,
  },
  {
    taskTitle: "Go to the gym",
    id: "2",
    key: "2",
    isImportant: false,
    isDone: false,
  },
];

function App() {
  const [dataState, setData] = useState(data);

  const changeDataHandler = useCallback(
    (newTask) => {
      setData((prevDataState) => {
        return [...prevDataState, newTask];
      });
    },
    [setData]
  );

  const deleteItemHandler = (delitedItemId) => {
    const indexDelitItem = dataState.findIndex(
      (task) => task.id === delitedItemId
    );

    const changedData = [...dataState];
    changedData.splice(indexDelitItem, 1);
    setData(changedData);
  };

  const changeImportantTaskHandler = (importantID) => {
    const indexImportantItem = dataState.findIndex(
      (task) => task.id === importantID
    );

    const targetTAsk = dataState[indexImportantItem];
    const updatedImportantTask = {
      ...targetTAsk,
      isImportant: !targetTAsk.isImportant,
    };

    const changedData = [...dataState];
    changedData.splice(indexImportantItem, 1, updatedImportantTask);
    setData(changedData);
  };

  const changeDoneTaskHandler = (doneId) => {
    const indexDoneItem = dataState.findIndex((task) => task.id === doneId);

    const targetTAsk = dataState[indexDoneItem];
    const updatedDoneTask = {
      ...targetTAsk,
      isDone: !targetTAsk.isDone,
    };

    const changedData = [...dataState];
    changedData.splice(indexDoneItem, 1, updatedDoneTask);
    setData(changedData);
  };

  const doneTaskCount = dataState.reduce((sum, current) => {
    return current.isDone ? sum + 1 : sum + 0;
  }, 0);

  const totalToDoTask = dataState.length - doneTaskCount;

  return (
    <div className={style.wrap}>
      <Header doneTaskCount={doneTaskCount} totalToDoTask={totalToDoTask} />
      <Filter />
      <DataList
        data={dataState}
        onDeleteItem={deleteItemHandler}
        onChangeImportantTask={changeImportantTaskHandler}
        onChangeDoneTask={changeDoneTaskHandler}
      />
      <Form onAddNewData={changeDataHandler} />
    </div>
  );
}

export default App;
