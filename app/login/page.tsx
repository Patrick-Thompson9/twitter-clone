import React from "react";

function page() {
  return (
    <section className="flex flex-col place-items-center">
      <span className="text-4xl md:text-7xl mt-4 text-center tracking-tight">
        Login
      </span>
      <div className="border-black bg-slate-900 border shadow-xl rounded-lg mt-16 py-8 px-6 w-1/3 relative">
        <form>
          <div className="flex flex-col items-start justify-center gap-8">
            <div className="flex gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-black border rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-black border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-lg p-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default page;
