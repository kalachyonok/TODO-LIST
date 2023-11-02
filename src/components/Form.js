import { Button } from "./Button";
import style from "./Form.module.css";

export const Form = () => {
  return (
    <div className={style.form}>
      <form>
        {/* <label htmlFor="task"></label> */}
        <input type="text" placeholder="What needs to be Done" />
      </form>
      <Button />
    </div>
  );
};
