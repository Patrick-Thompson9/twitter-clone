"use client";
import LogInLogOut from "../components/LogInLogOut";

function page() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-start items-start w-full md:w-4/5 bg-slate-950 border border-sky-200/75 mt-20 rounded-lg py-2 px-4 md:py-4 md:px-6 gap-2 font-medium text-lg">
        <span className="text-5xl font-semibold place-self-center">
          Settings
        </span>
        <div className="w-full divide-y divide-sky-200/25">
          <div>Account</div>
          <div>
            <span>Theme (not yet available)</span>
          </div>
          <div>
            <span>Reduce motion</span>
          </div>
          <div>About</div>
        </div>
        <LogInLogOut />
      </div>
    </section>
  );
}

export default page;
