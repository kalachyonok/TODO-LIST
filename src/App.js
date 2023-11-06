import { Header } from "./components/Header";
import { Form } from "./components/Form";
import style from "./App.module.css";
import { useState } from "react";
import { DataList } from "./components/DataList";

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

  const changeDataHandler = (newTask) => {
    setData((prevDataState) => {
      return [...prevDataState, newTask];
    });
  };

  console.log(dataState);

  const upgradeDataHandler = (delitedItemId) => {
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

    let importantTask = dataState[indexImportantItem];

    importantTask = {
      ...importantTask,
      isImportant: !importantTask.isImportant,
    };

    const changedData = [...dataState];

    changedData.splice(indexImportantItem, 1, importantTask);

    setData(changedData);
  };

  const changeDoneTaskHandler = (doneID) => {
    const indexDoneItem = dataState.findIndex((task) => task.id === doneID);

    let doneTask = dataState[indexDoneItem];

    doneTask = {
      ...doneTask,
      isDone: !doneTask.isDone,
    };

    const changedData = [...dataState];

    changedData.splice(indexDoneItem, 1, doneTask);

    setData(changedData);
  };

  return (
    <div className={style.wrap}>
      <Header totalTaskCount={dataState.length} />
      <DataList
        data={dataState}
        onUpgradeData={upgradeDataHandler}
        onChangeImportantTask={changeImportantTaskHandler}
        onChangeDoneTask={changeDoneTaskHandler}
      />
      <Form onAddNewData={changeDataHandler} />
    </div>
  );
}

export default App;
