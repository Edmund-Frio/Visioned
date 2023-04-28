import { FiDownload, FiX } from "react-icons/fi";

export function Note() {
  return (
    <div className="Note">
      <form className="grid gap-4 p-8">
        <input
          required
          className="rounded-md p-2 outline-none"
          type="text"
          name="title"
          placeholder="Untitled Note"
        />
        <textarea
          className="rounded-md p-2 resize-none outline-none"
          rows={20}
        ></textarea>
        <div className="grid bg-[#17191b] h-12 rounded-lg  w-full">
          <div className="grid gap-4 grid-flow-col mr-2 justify-end">
            <div className="grid text-xl text-gray-500 items-center">
              |
            </div>
            <button
              type="button"
              className="grid grid-flow-col gap-3 items-center text-gray-500 hover:text-neutral-200/80"
            >
              <FiDownload />
              Download
            </button>
            <button
              type="button"
              className="grid grid-flow-col gap-2 items-center text-gray-500 hover:text-neutral-200/80"
            >
              <FiX />
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
