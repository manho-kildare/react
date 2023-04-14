import React from "react";
import { Div, Subtitle, Title } from "../components";

export type ClockProps = {
  today: Date
}

const Clock = ({today}: ClockProps) => {
  return (
    <Div className="flex flex-col items-center h-screen bg-primary text-white">
      <Title className="text-5xl">{today.toLocaleTimeString()}</Title>
      <Subtitle>{today.toLocaleDateString()}</Subtitle>
    </Div>
  );
}

export default Clock;
