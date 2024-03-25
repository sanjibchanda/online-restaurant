import React, { useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;
  return (
    <div className="bg-gray-200 p-4">
      <h3>name: {name}</h3>
      <p>Location: {location}</p>
      <p>Contact: {contact}</p>
    </div>
  );
};

export default User;
