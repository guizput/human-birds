import { useState } from "react";

export default function useYouTubeIdValidator() {
  const [isValid, setIsValid] = useState(null);

  const validateYouTubeId = (id) => {
    // Regex officiel de YouTube pour les IDs de vidéo (11 caractères alphanumériques)
    const youtubeRegex = /^[a-zA-Z0-9_-]{11}$/;
    setIsValid(youtubeRegex.test(id));
    return youtubeRegex.test(id);
  };

  return { isValid, validateYouTubeId };
}
