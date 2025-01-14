export default function Music({ data }) {
  return (
    <section
      className="mx-auto max-w-3xl px-4 pb-16 pt-0 text-center md:flex md:pt-16 md:text-left"
      id="music"
    >
      <div className="text-lg text-stone-700 md:w-1/2 md:pr-2">
        <h2 className="mb-8 text-5xl uppercase">{data.title}</h2>
        <p className="mb-8 whitespace-pre-line">{data.desc}</p>
      </div>
      <div className="flex justify-center md:block md:w-1/2 md:pl-2">
        <iframe
          style={{ border: 0, width: "400px", height: "208px" }}
          src={data.iframe.src}
          seamless
        ></iframe>
      </div>
    </section>
  );
}
