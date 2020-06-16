import React from "react";

import { Link } from "react-router-dom";

export default () => {
  return (
    <ul className="flex bg-gray-900 text-white p-3">
      <li>
        <Link to="/" className="hover:text-blue-500 hover:font-bold mr-4">
          Libra Bank
        </Link>
      </li>
      <li>
        <Link
          to="/my-account"
          className="hover:text-blue-500 hover:font-bold mr-4"
        >
          My account
        </Link>
      </li>
      <li>
        <Link
          to="/contacts"
          className="hover:text-blue-500 hover:font-bold mr-4"
        >
          Contacts
        </Link>
      </li>
    </ul>
  );
};
