import style from "./DataItem.module.css";

export const DataItem = (props) => {
  const deliteItemHandler = (e) => {
    e.preventDefault();

    const delitedItemId = props.id;

    props.onChildClick(delitedItemId);
  };

  const doImportantHandler = (e) => {
    e.preventDefault();

    const importantID = props.id;

    props.onDoImportant(importantID);
  };

  const doDoneHandler = (e) => {
    e.preventDefault();

    const doneID = props.id;

    props.onDoDone(doneID);
  };

  const importantStyle = props.isImportant ? style.important : "";
  const doneStyle = props.isDone ? style.done : "";

  return (
    <li className={`list-group-item ${style.li}`}>
      <div
        // className={props.isImportant ? style.important : ""}
        className={`style.title ${doneStyle} ${importantStyle}`}
        onClick={doDoneHandler}
      >
        {props.title}
      </div>
      <div className={style["btn-set"]}>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={deliteItemHandler}
        >
          DEL
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={doImportantHandler}
        >
          !
        </button>
      </div>
    </li>
  );
};
