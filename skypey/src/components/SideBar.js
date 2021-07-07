import React from "react";

import User from "../containers/User";
import "./Sidebar.css";

/**
 *
 * @param {Array} contacts -> Array of users generate by fakeData
 * @returns {Component} SideBar
 */
const SideBar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map((contact) => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

export default SideBar;
