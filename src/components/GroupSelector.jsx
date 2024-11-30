// src/components/GroupSelector.jsx
import React from "react";

const GroupSelector = ({ selectedGroup, setGroup }) => (
  <div>
    <label>Group By: </label>
    <select value={selectedGroup} onChange={(e) => setGroup(e.target.value)}>
      <option value="status">Status</option>
      <option value="user">User</option>
      <option value="priority">Priority</option>
    </select>
  </div>
);

export default GroupSelector;
