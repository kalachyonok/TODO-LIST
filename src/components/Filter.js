import style from "./Filter.module.css";

export const Filter = (props) => {
  return (
    <form className={`top-panel d-flex ${style.filter}`}>
      <input
        className="form-control search-input"
        type="text"
        placeholder="type to search"
      />
      <div className="btn-group">
        <button className="btn btn-outline-secondary">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-secondary">Done</button>
      </div>
    </form>
  );
};
