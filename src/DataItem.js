import style from "./DataItem.module.css";

export const DataItem = (props) => {
  const deliteItemHandler = (e) => {
    e.preventDefault();

    const delitedItemId = props.id;

    props.onChildClick(delitedItemId);
  };

  return (
    <li className={`list-group-item ${style.li}`}>
      {props.title}
      <div className={style["btn-set"]}>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={deliteItemHandler}
        >
          DEL
        </button>
        <button type="button" className="btn btn-outline-success">
          !
        </button>
      </div>
    </li>
  );
};
