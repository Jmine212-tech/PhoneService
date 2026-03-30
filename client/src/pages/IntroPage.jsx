import React from "react";
import { Link } from "react-router-dom";

function IntroPage() {
  return (
    <div className="h-screen w-90 bg-base-300 overflow-hidden">
      <main className="w-full h-full">
        <div className="TopBar w-full h-15 bg-linear-to-r from-orange-500 to-amber-500"></div>
      {/* A-1 */}
      <article className="flex flex-col items-center justify-center font-bold mt-4">
        <section className="Intro-Text">
            <h3 className="text-2xl">WelCome</h3>
            <h1 className="text-4xl font-serif">Phone Service</h1>
        </section>
      </article>

      {/* A-2 */}
      <article className="flex flex-col items-center mt-5">
        <section className="w-60 h-60 rounded-full border p-4 bg-base-100">
            <div className="w-full h-full border rounded-full bg-linear-to-r from-indigo-900 to-sky-800
            flex items-center justify-center overflow-hidden">
                <Link to={"/login"} className="w-full h-full"></Link>
            </div>
        </section>
      </article>

      {/* A-3 */}
      <article className="w-full h-100 bg-linear-to-t from-black to-stone-900 mt-10 blur-xs"></article>
      </main>
    </div>
  );
}

export default IntroPage;