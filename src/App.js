// src/App.jsx
import React, { useEffect, useState } from "react";
import GroupSelector from "./components/GroupSelector";
import SortSelector from "./components/SortSelector";
import KanbanBoard from "./components/KanbanBoard";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useLocalStorage("groupBy", "status");
  const [sortBy, setSortBy] = useState("priority");

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((data) => setTickets(data.tickets));
  }, []);

  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = ticket[groupBy] || "Others";
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});

  if (sortBy === "priority") {
    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key].sort((a, b) => b.priority - a.priority);
    });
  } else {
    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key].sort((a, b) => a.title.localeCompare(b.title));
    });
  }

  return (
    <div className="App">
      <header className="header">
        <GroupSelector selectedGroup={groupBy} setGroup={setGroupBy} />
        <SortSelector selectedSort={sortBy} setSort={setSortBy} />
      </header>
      <KanbanBoard tickets={groupedTickets} />
    </div>
  );
};

export default App;
