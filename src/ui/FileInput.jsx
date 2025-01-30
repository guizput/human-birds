import { useState } from "react";
import imageCompression from "browser-image-compression";
import ProgressBar from "./ProgressBar";

function FileInput({ title, options, onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);

  const opts = { ...options, onProgress: handleProgress };

  function handleProgress(val) {
    setLoadingProgress(val);
  }

  function readFileData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (event) {
      onChange(event.target.result);
      setIsLoading(false);
      setLoadingProgress(0);
    };
    reader.readAsDataURL(file);
  }

  async function handleImageUpload(event) {
    const imageFile = event.target.files[0];
    if (!imageFile) return;
    setIsLoading(true);

    try {
      const compressedFile = await imageCompression(imageFile, opts);
      setInfo(
        `${Math.floor((imageFile.size / 1024 / 1024) * 1000)}Ko → ${Math.floor(
          (compressedFile.size / 1024 / 1024) * 1000,
        )}Ko`,
      );

      readFileData(compressedFile);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col space-y-3">
      {/* Label */}
      <label className="text-sm font-medium text-gray-700">{title}</label>

      {/* File Input */}
      <input
        type="file"
        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleImageUpload}
        accept="image/png, image/gif, image/jpeg"
      />

      {/* Progress Bar */}
      {isLoading && (
        <ProgressBar
          progress={loadingProgress}
          text="Image en cours de traitement..."
        />
      )}

      {/* Success Message */}
      {info && !isLoading && (
        <div className="rounded-lg border border-green-300 bg-green-100 p-3 text-sm text-green-800">
          ✅ L'image a été redimensionnée avec succès ({info}).
        </div>
      )}
    </div>
  );
}

export default FileInput;
