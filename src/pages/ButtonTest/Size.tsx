import React from "react";
import { Button } from "../../theme/daisyui";

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-3xl text-center">
        Size
      </h2>
      <div className="mt-4 flex justify-evenly">
        <Button className="btn-lg btn-primary">size lg</Button>
        <Button className="btn-md btn-primary">size md</Button>
        <Button className="btn-sm btn-primary">size sm</Button>
        <Button className="btn-xs btn-primary">size xs</Button>
      </div>
    </section>
  );
}
