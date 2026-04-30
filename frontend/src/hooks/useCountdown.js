import { useEffect, useState } from "react";

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const weddingDate = new Date("Nov 28, 2026 18:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0"),

        hours: String(
          Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
          )
        ).padStart(2, "0"),

        minutes: String(
          Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
          )
        ).padStart(2, "0"),

        seconds: String(
          Math.floor(
            (distance % (1000 * 60)) / 1000
          )
        ).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

export default useCountdown;