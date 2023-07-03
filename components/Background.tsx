import React from "react";

const Background = () => (
  <>
    <div className="fixed inset-0 -z-10 backdrop-blur-3xl"></div>
    <div className="fixed inset-0 -z-20 dark:bg-stone-900">
      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 flex h-80 w-80 animate-pulse items-center justify-center rounded-full bg-gradient-to-l from-violet-600 to-indigo-600"></div>

        <div className="absolute left-60 top-32 h-80 w-80 animate-pulse rounded-3xl bg-sky-400"></div>

        <div className="absolute -bottom-4 -right-4 flex h-80 w-80 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-700"></div>

        <div className="absolute bottom-32 right-48 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-green-400 to-sky-400"></div>
        <div className="absolute -right-20 bottom-1/3 h-80 w-80 animate-pulse rounded-3xl bg-red-600"></div>

        <div className="absolute -right-12 -top-12 flex h-80 w-80 animate-pulse items-center justify-center rounded-full bg-gradient-to-b from-transparent to-fuchsia-600"></div>

        <div className="absolute -top-12 right-1/3 flex h-80 w-80 animate-pulse items-center justify-center rounded-full bg-gradient-to-t from-violet-600 to-sky-600"></div>

        <div className="absolute -bottom-12 left-1/3 flex h-80 w-80 animate-pulse items-center justify-center rounded-full bg-gradient-to-tr from-lime-300 to-orange-600"></div>

        <div className="absolute -bottom-4 -left-4 h-80 w-80 animate-pulse rounded-3xl bg-gradient-to-tr from-sky-400 to-green-600"></div>
      </div>
    </div>
  </>
);

export default Background;
