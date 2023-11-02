import style from "./Form.module.css";

export const Form = () => {
  return (
    <form className={style.form}>
      <input
        className={`form-control ${style.input}`}
        type="text"
        placeholder="What needs to be Done"
      />
      <button className="btn btn-outline-secondary">Add</button>
    </form>
  );
};
