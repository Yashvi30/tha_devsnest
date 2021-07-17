import { useState } from "react";

const List = ({ item, id, items, setItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: item.name,
    calorie: item.calorie,
  });

  const deleteItem = (id) => setItems(items.filter((item, idx) => idx !== id));

  const editItem = (e) => {
    const name = e.target.name;
    const calorie = e.target.value;
    setEditData((prevData) => ({
      ...prevData,
      [name]: calorie,
    }));
  };

  const saveItem = (e) => {
    const updatedItems = items.map((item, idx) => {
      if (idx === id) {
        return {
          ...item,
          name: editData.name,
          calorie: editData.calorie,
        };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
    setIsEditing(false);
  };

  return (
    <>
      <div className="cards">
        <div className="inputs">
          {isEditing ? (
            <>
              <input
                type="text"
                placeholder="Edit Food name"
                name="name"
                value={editData.name}
                onChange={editItem}
                required
              />
              <input
                type="number"
                placeholder="Edit calorie count"
                name="calorie"
                value={editData.calorie}
                onChange={editItem}
                required
              />
            </>
          ) : (
            <>
              <h2 className="name">{item.name}</h2>
              <p className="calorie">This contains {item.calorie} calories</p>
            </>
          )}
        </div>
        <div className="icons">
          <button
            className="edit-btn"
            onClick={(e) => setIsEditing(!isEditing)}
          >
            EDIT
          </button>
          <button className="save-btn" onClick={(e) => saveItem()}>
            SAVE
          </button>
          <button className="del-btn" onClick={(e) => deleteItem(id)}>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
