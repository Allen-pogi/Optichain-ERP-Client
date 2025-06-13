import React, { useState, useEffect } from "react";

const RealtimeDateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      {now.toLocaleDateString()} {now.toLocaleTimeString()}
    </span>
  );
};

export default RealtimeDateTime;