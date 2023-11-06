import style from "./Header.module.css";

export const Header = ({ doneTaskCount, totalToDoTask }) => {
  return (
    <div className={style.header}>
      <h1 className={style["header-name"]}>Todo List</h1>
      <div>
        {totalToDoTask} more to do, {doneTaskCount} done
      </div>
    </div>
  );
};
