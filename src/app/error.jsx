"use client";

import { useEffect } from "react";
export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="  text-center mt-10">
      <h1>
        Došlo je do greške pri učitavanju podataka. Pokušajte ponovo kasnije.
      </h1>
      <button className="text-amber-400 hover:text-amber-600 text-lg" onClick={() => reset()}>Pokušaj ponovo</button>
    </div>
  );
}
