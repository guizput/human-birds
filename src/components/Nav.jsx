import { useState } from "react";
import ToggleElement from "../ui/ToggleElement";
import TextInput from "../ui/TextInput";

export function Nav({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative mx-auto my-0 max-w-7xl p-4 md:flex md:justify-center">
        <h1 className="hidden">Human Birds - Folk Songs</h1>
        <input className="peer hidden" type="checkbox" id="menu-btn" />
        <ul className="mt-2 max-h-0 list-none overflow-hidden p-0 text-center font-black uppercase peer-checked:max-h-none md:mt-0 md:flex md:max-h-none">
          <li className="p-4 md:ml-12 md:px-0 md:py-4">
            <a className="text-3xl" href="#music">
              {data[0]}
            </a>
          </li>
          <li className="border-t border-gray-600 p-4 md:ml-12 md:border-none md:px-0 md:py-4">
            <a className="text-3xl" href="#video">
              {data[1]}
            </a>
          </li>
          <li className="border-t border-gray-600 p-4 md:ml-12 md:border-none md:px-0 md:py-4">
            <a className="text-3xl" href="#dates">
              {data[2]}
            </a>
          </li>
          <li className="border-t border-gray-600 p-4 md:ml-12 md:border-none md:px-0 md:py-4">
            <a className="text-3xl" href="#contact">
              {data[3]}
            </a>
          </li>
        </ul>
        <label
          className="peer-checked:nav-active absolute right-4 top-0 p-0 md:hidden"
          htmlFor="menu-btn"
          onClick={() => setOpen((is) => !is)}
        >
          {!open && (
            <span className="material-symbols-outlined text-4xl">menu</span>
          )}
          {open && (
            <span className="material-symbols-outlined text-4xl">close</span>
          )}
        </label>
      </nav>
    </>
  );
}

export function EditNav({ content, setContent }) {
  function handleChange(e, index) {
    const newNav = [...content.nav];
    newNav[index] = e.target.value;
    setContent({ ...content, nav: newNav });
  }

  return (
    <ToggleElement title="Nav">
      {content.nav.map((item, index) => (
        <TextInput
          key={index}
          title={`Section N°${index + 1}`}
          value={item}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </ToggleElement>
  );
}
