function Spinner({ color = "blue-500" }) {
  return (
    <div
      className={`inset-0 h-4 w-4 animate-spin rounded-full border-4 border-${color} border-t-transparent`}
    ></div>
  );
}

export default Spinner;
