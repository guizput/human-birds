import FileInput from "../ui/FileInput";
import ToggleElement from "../ui/ToggleElement";

export function Hero({ data }) {
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

export function EditHero({ content, setContent }) {
  return (
    <ToggleElement title="Hero">
      <FileInput
        title="Image"
        options={{
          maxSizeMB: 1,
          maxWidthOrHeight: 1600,
          useWebWorker: true,
        }}
        onChange={(value) =>
          setContent({
            ...content,
            hero: {
              desktop: value,
              mobile: value,
            },
          })
        }
      />
    </ToggleElement>
  );
}
