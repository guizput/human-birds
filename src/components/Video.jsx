import TextInput from "../ui/TextInput";
import ToggleElement from "../ui/ToggleElement";
import useYouTubeIdValidator from "../hooks/useYouTubeIdValidator";
import { useEffect, useState } from "react";

export function Video({ data }) {
  return (
    <section className="relative h-64 bg-amber-600 md:h-[75vh]" id="video">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={`https://www.youtube.com/embed/${data.youtubeID}`}
        title={data.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export function EditVideo({ content, setContent }) {
  const { isValid, validateYouTubeId } = useYouTubeIdValidator();
  const [id, setId] = useState(content.video.youtubeID);

  useEffect(() => {
    if (isValid) {
      setContent({
        ...content,
        video: { ...content.video, youtubeID: id },
      });
    }
  }, [isValid]);

  const handleChange = (e) => {
    validateYouTubeId(e.target.value);
    setId(e.target.value);
  };

  return (
    <ToggleElement title="Video">
      <TextInput
        title="Youtube ID"
        value={id}
        onChange={(e) => handleChange(e)}
      />
      {isValid !== null && (
        <p
          className={`mt-2 font-medium ${isValid ? "text-green-600" : "text-red-600"}`}
        >
          {isValid ? "✅ ID valide !" : "❌ ID invalide !"}
        </p>
      )}
    </ToggleElement>
  );
}
