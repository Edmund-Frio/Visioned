import { useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import { FiDownload, FiX } from "react-icons/fi";

export const ToolbarButtons = () => {
  return (
    <div>
      <button className="text-lg text-gray-500">
        <AiIcons.AiOutlineVerticalLeft />
      </button>
    </div>
  );
};