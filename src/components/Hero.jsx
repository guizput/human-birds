export default function Hero({ data }) {
  return (
    <section>
      <picture>
        <source media="(max-width:768px)" srcSet={data.mobile} />
        <source media="(min-width:768px)" srcSet={data.desktop} />
        <img src={data.desktop} alt="" className="block w-full" />
      </picture>
    </section>
  );
}
