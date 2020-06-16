import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <ul className="flex p-3 bg-blue-800 text-white">
      <li>
        <Link
          to="/my-account/buy-coins"
          className="hover:font-bold mr-3 text-xs"
        >
          Buy Libra coin
        </Link>
      </li>
      <li>
        <Link
          to="/my-account/sell-coins"
          className="hover:font-bold mr-3 text-xs"
        >
          Sell Libra coin
        </Link>
      </li>
      <li>
        <Link to="/my-account/balance" className="hover:font-bold mr-3 text-xs">
          My Balance
        </Link>
      </li>
    </ul>
  );
};
