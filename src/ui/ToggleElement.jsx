import { useState } from "react";

export default function ToggleElement({ title, children, cClass }) {
  const [show, setShow] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setShow(!show);
  }

  return (
    <div className="my-2">
      <div
        className={`w-full rounded-md border px-4 py-3 transition-all duration-300 ${
          !show ? "border-gray-300 bg-gray-200" : "border-sky-700 bg-sky-100"
        }`}
      >
        <h5
          className="flex cursor-pointer items-center justify-between text-lg font-bold text-gray-700"
          onClick={handleClick}
        >
          {title}
          <span
            className={`transform transition-transform duration-300 ${
              show ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </h5>
        {show && <div className="mt-2 text-left">{children}</div>}
      </div>
    </div>
  );
}
