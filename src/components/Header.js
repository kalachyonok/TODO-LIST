import React from "react";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <h1 className={style["header-name"]}>Todo List</h1>
      <div>XX more to do, YY done</div>
    </div>
  );
};
