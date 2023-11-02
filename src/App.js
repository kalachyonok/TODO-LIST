import { Header } from "./components/Header";
import { Form } from "./components/Form";
import style from "./App.module.css";
import { useState } from "react";
import { DataList } from "./components/DataList";

const data = [
  { taskTitle: "Drink coffee", id: "1" },
  { taskTitle: "Go to the gym", id: "2" },
];

function App() {
  const [dataState, setData] = useState(data);

  const changeDataHandler = (newTask) => {
    setData((prevDataState) => {
      return [...prevDataState, newTask];
    });
  };

  return (
    <div className={style.wrap}>
      <Header />
      <DataList data={dataState} />
      <Form onAddNewData={changeDataHandler} />
    </div>
  );
}

export default App;
