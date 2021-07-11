const List = ({ id, item, deleteItem }) => {
  const { name, cal } = item;
  return (
    <>
      <div className="cards">
        <div>
          <h2>{name}</h2>
          <p>This contains {cal} calories</p>
        </div>
        <div>
          <button className="del-btn" onClick={(e) => deleteItem(id)}>
            {" "}
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
