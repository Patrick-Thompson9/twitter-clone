import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col place-items-center">
      <span className="text-sky-100 text-6xl">ERROR</span>
      <div className="flex flex-col justify-center items-center border-sky-200/45 bg-gray-900 border shadow-xl rounded-lg my-12 py-4 px-2 w-2/3 md:w-3/5 lg:py-8 lg:px-6 lg:w-2/5">
        <div className="flex justify-center items-center gap-6 text-sky-100">
          <span className="text-3xl font-medium">404</span>
          <span>Page does not exist</span>
        </div>
        <img
          src={"confused.gif"}
          alt="confused gif"
          className="static left-0"
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
