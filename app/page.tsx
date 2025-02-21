"use client";

import { useState } from "react";

export default function Home() {
  // Use useState to manage the clicker state
  const [clicker, setClicker] = useState(0);

  // Function to handle clicks
  function countClicks() {
    setClicker(clicker + 1); // Update the state
  }
  return (
    <main>
      <button id = "clicker-button" onClick={countClicks}> Total number of clicks = {clicker} </button>
    </main>
  );
}
