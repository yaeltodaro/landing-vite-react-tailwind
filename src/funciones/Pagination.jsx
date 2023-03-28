import React from "react";

const Pagination = ({ prev, next, onPrevius, onNext }) => {
  const handelPrevious = () => {
    onPrevius();
  };

  const handelNext = () => {
    onNext();
  };

  return (
    <nav className="m-10">
      <ul className="flex flex-row justify-center gap-6">
        {prev ? (
          <li>
            <button
              type="button"
              class="motion-safe:hover:-translate-x-0.5 motion-safe:transition text-white bg-gray-600 mt-10 p-2 px-4 text-center rounded-md"
              onClick={handelPrevious}
            >
              Preview
            </button>
          </li>
        ) : null}
        {next ? (
          <li>
            <button
              type="button"
              class="motion-safe:hover:-translate-x-0.5 motion-safe:transition text-white bg-gray-600 mt-10 p-2 px-4 text-center rounded-md"
              onClick={handelNext}
            >
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;