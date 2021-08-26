import React from "react";
import "./Search.css";


export default function Search() {
  return (
    <form class="form-control" id="city-form">
      <input
        type="text"
        id="city-input"
        placeholder="What's the weather like in..."
        autocomplete="off"
        autofocus="on"
      />
      <input type="submit" value="Search" />
    </form>
  );
}