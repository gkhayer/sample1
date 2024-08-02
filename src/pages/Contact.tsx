import {
  Menu,
  MenuButton,
  MenuItems,
  Transition,
} from "@headlessui/react";
import useFetch from "../hooks/useFetch";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Contact = () => {
  const url = "http://localhost:8001/blogs";
  const data = useFetch(url);

  console.log(data)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"></MenuButton>
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems>options</MenuItems>
      </Transition>
    </Menu>
  );
};

export default Contact;
