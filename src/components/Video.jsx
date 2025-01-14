export default function Video({ data }) {
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
