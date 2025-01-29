function ProgressBar({ text, progress }) {
  return (
    <div className="rounded-lg border border-blue-300 bg-blue-100 p-3 text-sm text-blue-700">
      {/* Barre de progression */}
      <div className="h-2.5 w-full rounded-full bg-blue-200">
        <div
          className="h-2.5 rounded-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Texte sous la barre */}
      <p className="mt-2">{text}</p>
    </div>
  );
}

export default ProgressBar;
