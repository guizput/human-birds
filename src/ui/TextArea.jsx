import { useLayoutEffect, useRef } from "react";

function TextArea({ title = "", value, onChange }) {
  const textbox = useRef(null);

  function adjustHeight() {
    textbox.current.style.height = "inherit";
    textbox.current.style.height = `${textbox.current.scrollHeight}px`;
  }

  useLayoutEffect(adjustHeight, []);

  function handleKeyDown(e) {
    e.preventDefault();
    adjustHeight();
    onChange(e);
  }

  return (
    <div className="mt-4">
      {title && (
        <label className="text-sm font-medium text-gray-700">{title}</label>
      )}
      <textarea
        rows="3"
        onChange={handleKeyDown}
        value={value}
        ref={textbox}
        className="mt-2 w-full rounded border p-2 text-sm"
      />
    </div>
  );
}

export default TextArea;
