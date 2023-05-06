import { useState } from "react";
import { Toolbar } from "../Toolbar/Toolbar";

export function Markdown() {
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  return (
    <div className="Markdown">
      <form className="flex flex-col gap-4">
        <input
          className="rounded-md p-2 outline-none"
          type="text"
          name="title"
          placeholder="Untitled Note"
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
          value={title}
        />
        <textarea
          className="rounded-md p-2 resize-none outline-none"
          rows={20}
          onChange={(ev) => {
            setTextArea(ev.target.value);
          }}
          value={textArea}
        ></textarea>
        <Toolbar />
      </form>
    </div>
  );
}
