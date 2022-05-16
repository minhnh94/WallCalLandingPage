import { useState } from "react";
import { Transition } from "@headlessui/react";

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="px-6 py-8 border-b border-gray-50">
      <button onClick={ () => setExpanded(!expanded) }
              className="w-full flex justify-between items-center text-left font-bold font-heading">
        <span
          className="text-2xl font-medium font-heading">{ question }</span>
        <svg
          className={ `flex-shrink-0 w-4 h-4 ml-2 transition-transform duration-300 ${ expanded ? 'rotate-180' : '' }` }
          xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
      <Transition show={ expanded }
                  enter="transition-opacity duration-150"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
      >
        <p className={ `mt-2 text-lg text-gray-500 leading-loose` }>
          { answer }</p>
      </Transition>
    </li>
  );
}

export default FAQItem;
