function TextInput({ title = "", value, onChange }) {
  return (
    <div className="mt-4">
      {title && (
        <label className="text-sm font-medium text-gray-700">{title}</label>
      )}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded border p-2 text-sm"
      />
    </div>
  );
}

export default TextInput;
