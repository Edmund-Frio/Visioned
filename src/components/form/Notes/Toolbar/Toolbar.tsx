import { useState } from "react";
import { ToolbarButtons } from "./ToolbarButtons";

export function Toolbar() {
  return (
    <div className=" bg-primary-sub h-12 rounded-lg w-full">
      <ToolbarButtons />
    </div>
  );
}
