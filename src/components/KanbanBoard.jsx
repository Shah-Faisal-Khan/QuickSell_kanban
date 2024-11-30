// src/components/KanbanBoard.jsx
import React from "react";
import TicketCard from "./TicketCard";
import "./KanbanBoard.css";

const KanbanBoard = ({ tickets }) => {
  const groupedTickets = Object.entries(tickets);

  return (
    <div className="kanban-board">
      {groupedTickets.map(([group, tickets]) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
