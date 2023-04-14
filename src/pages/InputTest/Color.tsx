import React from "react";
import { Input } from "../../theme/daisyui";

export default function CopyMe() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-3xl text-center">
        Color
      </h2>
      <div className="flex flex-col items-center p-4 mt-4">
        <div>
          <label htmlFor="" className="label">input-primary</label>
          <Input className="input-primary"></Input>
        </div>
        <div>
          <label htmlFor="" className="label">input-secondary</label>
          <Input className="input-secondary"></Input>
        </div>
        <div>
          <label htmlFor="" className="label">input-accent</label>
          <Input className="input-accent"></Input>
        </div>
        <div>
          <label htmlFor="" className="label">input-info</label>
          <Input className="input-info"></Input>
        </div>
        <div>
          <label htmlFor="" className="label">input-success</label>
          <Input className="input-success"></Input>
        </div>
        <div>
          <label htmlFor="" className="label">input-warning</label>
          <Input className="input-warning"></Input>
        </div>
        <div>
          <label htmlFor="" className="label">input-error</label>
          <Input className="input-error"></Input>
        </div>
      </div>
    </section>
  );
}
