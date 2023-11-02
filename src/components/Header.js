import style from "./Header.module.css";

export const Header = ({ totalTaskCount }) => {
  return (
    <div className={style.header}>
      <h1 className={style["header-name"]}>Todo List</h1>
      <div> {totalTaskCount} more to do, YY done</div>
    </div>
  );
};
