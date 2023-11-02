import style from "./Form.module.css";

export const Form = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    props.onAddNewData({});
  };

  return (
    <form className={style.form}>
      <input
        className={`form-control ${style.input}`}
        type="text"
        placeholder="What needs to be Done"
      />
      <button className="btn btn-outline-secondary" onClick={onClick}>
        Add
      </button>
    </form>
  );
};
