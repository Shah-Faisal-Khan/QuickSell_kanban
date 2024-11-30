// src/components/TicketCard.jsx
import React from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket }) => (
  <div className="ticket-card">
    <h3>{ticket.title}</h3>
    <p><strong>User:</strong> {ticket.user}</p>
    <p><strong>Status:</strong> {ticket.status}</p>
    <p><strong>Priority:</strong> {ticket.priority}</p>
  </div>
);

export default TicketCard;
