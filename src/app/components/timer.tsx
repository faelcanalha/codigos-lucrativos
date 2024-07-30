"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  const router = useRouter();

  useEffect(() => {
    const storedTime = localStorage.getItem("timer");
    const initialTimeLeft = storedTime ? parseInt(storedTime, 10) : null;

    if (initialTimeLeft !== null && !isNaN(initialTimeLeft)) {
      setTimeLeft(initialTimeLeft);
    } else {
      localStorage.setItem("timer", (15 * 60).toString());
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1;

        if (newTimeLeft <= 0) {
          clearInterval(interval);
          localStorage.removeItem("timer");
          router.push("https://pay.sunize.com.br/KCwtIcgQ");
          return 0;
        }

        localStorage.setItem("timer", newTimeLeft.toString());
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div className="flex-wrap w-[95%] mx-auto min-h-[50px] gap-2 text-white bg-[#FF0000] flex items-center justify-center rounded-[20px]">
        Oferta Exclusiva: Apenas{" "}
        <strong>{`${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}</strong>{" "}
        Minutos Restantes!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          className="w-8 h-8"
        >
          <path
            fill="currentColor"
            d="M153.59 110.46A21.41 21.41 0 0 0 152.48 79A62.67 62.67 0 0 0 112 64l-3.27.09h-.48C74.4 66.15 48 95.55 48.07 131c0 19 8 29.06 14.32 37.11a20.61 20.61 0 0 0 14.7 7.8c.26 0 .7.05 2 .05a19.06 19.06 0 0 0 13.75-5.89Zm250.2-46.35l-3.27-.1H400a62.67 62.67 0 0 0-40.52 15a21.41 21.41 0 0 0-1.11 31.44l60.77 59.65a19.06 19.06 0 0 0 13.79 5.9c1.28 0 1.72 0 2-.05a20.61 20.61 0 0 0 14.69-7.8c6.36-8.05 14.28-18.08 14.32-37.11c.06-35.49-26.34-64.89-60.15-66.93Z"
          ></path>
          <path
            fill="currentColor"
            d="M256.07 96c-97 0-176 78.95-176 176a175.23 175.23 0 0 0 40.81 112.56l-36.12 36.13a16 16 0 1 0 22.63 22.62l36.12-36.12a175.63 175.63 0 0 0 225.12 0l36.13 36.12a16 16 0 1 0 22.63-22.62l-36.13-36.13A175.17 175.17 0 0 0 432.07 272c0-97-78.95-176-176-176Zm16 176a16 16 0 0 1-16 16h-80a16 16 0 0 1 0-32h64v-96a16 16 0 0 1 32 0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
