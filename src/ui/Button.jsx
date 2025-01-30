export default function Button({ type = "primary", children, onClick }) {
  const styles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white font-medium  rounded",
    secondary:
      "bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium  rounded",
    danger: "bg-red-500 hover:bg-red-600 text-white font-medium  rounded",
  };

  return (
    <button
      className={`${styles[type]} px-4 py-2 text-sm transition duration-200`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
