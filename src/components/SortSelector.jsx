// src/components/SortSelector.jsx
import React from "react";

const SortSelector = ({ selectedSort, setSort }) => (
  <div>
    <label>Sort By: </label>
    <select value={selectedSort} onChange={(e) => setSort(e.target.value)}>
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  </div>
);

export default SortSelector;
