import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeSelected = (id) => {
    const newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <h2 key={id} className="item">
            {name}
            <button onClick={() => removeSelected(id)}>remove</button>
          </h2>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
