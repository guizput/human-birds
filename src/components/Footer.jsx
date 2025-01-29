import TextInput from "../ui/TextInput";
import ToggleElement from "../ui/ToggleElement";

export function Footer({ data }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-lg md:flex md:space-x-20">
      <div className="mb-16">
        <h2 className="mb-8 text-5xl uppercase" id="dates">
          {data.titleDates}
        </h2>
        <ul>
          {data.dates.map((item, index) =>
            item.link === "" ? (
              <li className="mb-4" key={index}>
                {item.date} - <b>{item.name}</b> -<em>{item.location}</em>
              </li>
            ) : (
              <li className="mb-4" key={index}>
                <a href={item.link} target="_blank">
                  {item.date} - <b>{item.name}</b> -<em>{item.location}</em>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
      <div>
        <h2 className="mb-8 text-5xl uppercase" id="contact">
          {data.titleContacts}
        </h2>
        <div className="h-16 md:flex md:items-center">
          {data.contacts.map((item, index) => (
            <a className="mr-8" target="_blank" href={item.link} key={index}>
              <i className={`fa-2xl ${item.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditFooter({ content, setContent }) {
  return (
    <ToggleElement title="Footer">
      <TextInput
        title="Titre Dates"
        value={content.footer.titleDates}
        onChange={(e) =>
          setContent({
            ...content,
            footer: { ...content.footer, titleDates: e.target.value },
          })
        }
      />
    </ToggleElement>
  );
}
