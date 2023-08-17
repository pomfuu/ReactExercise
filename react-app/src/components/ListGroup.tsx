import { Fragment, useState } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "Tangsel", "Angjay", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  // EventHandler
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <Fragment>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { setSelectedIndex(index);} }
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
