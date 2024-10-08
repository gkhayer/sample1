import { useState } from "react";
import { AccordianType } from "../../types/types";

const Accordion = ({ question, answer }: AccordianType) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className="flex justify-between w-full border-[var(--primary)] rounded-lg"
      >
        <span>{question}</span>
        <svg
          className="fill-gray-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordianOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordianOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 border-2 rounded-lg mt-2
            ${
              accordianOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
      >
        <div className="overflow-hidden p-2">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
