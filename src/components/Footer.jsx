import Button from "../ui/Button";
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
  function handleAddDate(e) {
    const newDate = {
      date: "01.01.2025",
      name: "Nom de l'event",
      location: "LIEU (45)",
      link: "",
    };
    setContent({
      ...content,
      footer: {
        ...content.footer,
        dates: [...content.footer.dates, newDate],
      },
    });
  }

  function handleDeleteDate(id) {
    const newDates = content.footer.dates.filter((item, index) => index !== id);
    setContent({ ...content, footer: { ...content.footer, dates: newDates } });
  }

  function handleAddContact(e) {
    const newContact = {
      link: "https://www.facebook.com/HumanBirdsMusic",
      icon: "fa-brands fa-square-facebook",
    };
    setContent({
      ...content,
      footer: {
        ...content.footer,
        contacts: [...content.footer.contacts, newContact],
      },
    });
  }

  function handleDeleteContact(id) {
    const newContacts = content.footer.contacts.filter(
      (item, index) => index !== id,
    );
    setContent({
      ...content,
      footer: { ...content.footer, contacts: newContacts },
    });
  }

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
      {content.footer.dates.map((date, index) => (
        <ToggleElement key={index} title={`Date N°${index + 1}`}>
          <TextInput
            title="Date"
            value={date.date}
            onChange={(e) => console.log(date)}
          />
          <TextInput
            title="Name"
            value={date.name}
            onChange={(e) => console.log(date)}
          />
          <TextInput
            title="Location"
            value={date.location}
            onChange={(e) => console.log(date)}
          />
          <TextInput
            title="Link"
            value={date.link}
            onChange={(e) => console.log(date)}
          />
          {content.footer.dates.length > 1 && (
            <>
              <hr className="my-6 border-t border-stone-400" />
              <Button type="danger" onClick={() => handleDeleteDate(index)}>
                Supprimer
              </Button>
            </>
          )}
        </ToggleElement>
      ))}
      <Button type="secondary" onClick={(e) => handleAddDate(e)}>
        Ajouter une date
      </Button>
      <hr className="my-8 border-t border-stone-400" />
      <TextInput
        title="Titre Contacts"
        value={content.footer.titleContacts}
        onChange={(e) =>
          setContent({
            ...content,
            footer: { ...content.footer, titleContacts: e.target.value },
          })
        }
      />
      {content.footer.contacts.map((contact, index) => (
        <ToggleElement key={index} title={`Contact N°${index + 1}`}>
          <TextInput
            title="Date"
            value={contact.icon}
            onChange={(e) => console.log(contact)}
          />
          <TextInput
            title="Name"
            value={contact.link}
            onChange={(e) => console.log(contact)}
          />
          {content.footer.contacts.length > 1 && (
            <>
              <hr className="my-6 border-t border-stone-400" />
              <Button type="danger" onClick={() => handleDeleteContact(index)}>
                Supprimer
              </Button>
            </>
          )}
        </ToggleElement>
      ))}
      <Button type="secondary" onClick={(e) => handleAddContact(e)}>
        Ajouter un contact
      </Button>
    </ToggleElement>
  );
}
