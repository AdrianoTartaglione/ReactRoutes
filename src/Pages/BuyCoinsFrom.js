import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default () => {
  const history = useHistory();

  const buy = e => {
    e.preventDefault();
    Axios.get("https://dog.ceo/api/breeds/image/random")
      .then(risultato => {
        console.log(risultato);
        history.push("/my-account/buy-coins/tnks");
      })
      .catch(risultato => {
        alert("E' esploso tutto");
      });
  };

  return (
    <div className="p-5">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <button
          onClick={buy}
          className="bg-blue-700 rounded-full py-3 px-5 text-white hover:bg-blue-400 hover:text-blue-100"
        >
          BUY
        </button>
      </form>
    </div>
  );
};
