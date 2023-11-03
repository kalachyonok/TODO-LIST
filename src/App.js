import { Header } from "./components/Header";
import { Form } from "./components/Form";
import style from "./App.module.css";
import { useState } from "react";
import { DataList } from "./components/DataList";

const data = [
  { taskTitle: "Drink coffee", id: "1", key: "1" },
  { taskTitle: "Go to the gym", id: "2", key: "2" },
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

    const shangedData = [...dataState];

    shangedData.splice(indexDelitItem, 1);

    setData(shangedData);
  };

  return (
    <div className={style.wrap}>
      <Header totalTaskCount={dataState.length} />
      <DataList data={dataState} onUpgradeData={upgradeDataHandler} />
      <Form onAddNewData={changeDataHandler} />
    </div>
  );
}

export default App;
