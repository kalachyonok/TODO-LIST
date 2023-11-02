import { Header } from "./components/Header";
import { Form } from "./components/Form";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.wrap}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
