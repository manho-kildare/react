import React from "react";
import { Title } from "../components";
import { Div } from "../components/Div";

export default function HeightTest() {
  return (
    <section className="mt-4">
      <Title>HeightTest</Title>
      <Div>
        <Div className="h-40 text-center bg-blue-500 mt-4">
          <Div className="bg-blue-500 h-1/2">
            <p className="text-center text-red-50">h-1/2</p>
          </Div>
          <Div className="bg-red-500 h-20">
          <p className="text-center text-red-50">h-1/2</p>
          </Div>
        </Div>
      </Div>
    </section>
  );
}
