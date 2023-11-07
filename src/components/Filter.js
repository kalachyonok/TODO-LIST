import style from "./Filter.module.css";

export const Filter = (props) => {
  // props.activeFilter;

  return (
    <form className={`top-panel d-flex ${style.filter}`}>
      <input
        className="form-control search-input "
        type="text"
        placeholder="type to search"
      />
      <div className="btn-group">
        <button
          className={`btn btn-outline-secondary ${
            props.activeFilter === "all" ? style.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            props.changeState("all");
          }}
        >
          All
        </button>

        <button
          className={`btn btn-outline-secondary ${
            props.activeFilter === "active" ? style.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            props.changeState("active");
          }}
        >
          Active
        </button>

        <button
          className={`btn btn-outline-secondary ${
            props.activeFilter === "done" ? style.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            props.changeState("done");
          }}
        >
          Done
        </button>
      </div>
    </form>
  );
};
