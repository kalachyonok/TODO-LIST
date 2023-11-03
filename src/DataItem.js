import style from "./DataItem.module.css";

export const DataItem = ({ title }) => {
  return (
    <li className={`list-group-item ${style.li}`}>
      {title}
      <div className={style["btn-set"]}>
        <button type="button" class="btn btn-outline-danger">
          DEL
        </button>
        <button type="button" class="btn btn-outline-success">
          !
        </button>
      </div>
    </li>
  );
};
