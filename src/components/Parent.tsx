import React from "react";
import { Child, ChildAsFC } from "./Child";

export const Parent = () => {
  return (
    <div>
      <Child color="blue" onClick={() => console.log("Clicked")} />

      <ChildAsFC color="red" onClick={() => console.log("Clicked FC")}>
        Inside Child as FC
      </ChildAsFC>
    </div>
  );
};
