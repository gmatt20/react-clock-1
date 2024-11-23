import { useState, useEffect } from "react";

function Time() {
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
    <div className="font-Orbitron text-white absolute h-fill w-fill z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <p className="text-9xl inline">
        {formatHours(time.getHours())}:
      </p>
      <p className="text-9xl inline">
        {time.getMinutes().toString().padStart(2, "0")}:
      </p>
      <p className="text-5xl inline mx-3">
        {time.getSeconds().toString().padStart(2, "0")} 
      </p>
      <p className="text-9xl inline">
        {period}
      </p>
    </div>
  );
}

export default Time;