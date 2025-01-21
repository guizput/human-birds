import { useState } from "react";

import Spinner from "../ui/Spinner";

export default function Navbar({
  isSidebarOpen,
  setIsSidebarOpen,
  handleSave,
}) {
  const [isPublishing, setIsPublishing] = useState(false);

  function handleClick() {
    setIsPublishing(true);
    handleSave();
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b-4 border-white bg-gray-800 p-4 text-white">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsSidebarOpen((is) => !is)}
          className="flex h-6 w-6 flex-col items-center justify-center"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isSidebarOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isSidebarOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isSidebarOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <h1 className="text-sm font-bold">HumanBirds</h1>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => handleClick()}
          className="flex items-center justify-between space-x-2 rounded bg-green-500 px-2 py-1 text-xs hover:bg-green-600"
        >
          <span>{isPublishing ? "Please wait..." : "Publish"}</span>
          {isPublishing && <Spinner />}
        </button>
      </div>
    </nav>
  );
}
