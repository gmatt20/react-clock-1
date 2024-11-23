import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  // Helper function to format hours to 12-hour format
  const formatHours = (hours) => {
    const formattedHours = hours % 12 || 12; // Convert 0 (midnight) to 12
    return formattedHours.toString().padStart(2, "0");
  };

  // Determine AM/PM
  const period = time.getHours() >= 12 ? "PM" : "AM";

  return (
    <>
      <p className="text-5xl">
        {formatHours(time.getHours())}:
        {time.getMinutes().toString().padStart(2, "0")}:
        {time.getSeconds().toString().padStart(2, "0")} {period}
      </p>
    </>
  );
}

export default App;