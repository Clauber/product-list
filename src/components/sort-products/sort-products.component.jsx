import React from "react";
import { Dropdown } from "react-bootstrap";
const SortProducts = ({ sortingOptions, currentSort, updateSort }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Object.keys(sortingOptions).map((option, key) => (
          <Dropdown.Item
            key={key}
            active={sortingOptions[option].value === currentSort}
            onClick={() => {
              updateSort(sortingOptions[option]);
            }}
          >
            {sortingOptions[option].name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortProducts;
