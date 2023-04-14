import React from "react";
import { Input } from "../../theme/daisyui";

export default function Border() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-5xl text-center">
        Border
      </h2>
      <div className="flex justify-evenly mt-4 p-4">
        <div>
          <label className="label" >input-bordered</label>
          <Input className="input-bordered"></Input>
        </div>
        <div>
          <label className="label" >input-ghost</label>
          <Input className="input-ghost"></Input>
        </div>
      </div>
    </section>
  );
}
