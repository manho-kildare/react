import React, { useCallback, useEffect, useRef } from "react";
import { Title } from "../components";

export default function InputValueTest() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`),[]);

  useEffect(() => inputRef.current?.focus(), []);


  return (
    <section className="mt-4">
      <Title></Title>
      <div className="flex justify-center mt-4">
          <div className="flex flex-col p-2 w-1/3">
            <input ref={inputRef} className="input input-primary" />
            <button onClick={getValue} className="mt-4 btn btn-primary">
              get value
            </button>
          </div>
        </div>
    </section>
  );
}
