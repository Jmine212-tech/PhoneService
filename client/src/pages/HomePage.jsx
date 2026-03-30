
import React from "react";
import toast from "react-hot-toast";
import {Link} from "react-router-dom"

function HomePage() {
  const auth = "admin"

  return (
    <div className="min-h-1000 w-90">
      <div className="topBar w-full h-15 bg-linear-to-r from-orange-500 to-amber-500"></div>

      <main>
        {/* admin btn */}
        <div className={`AdminBTN h-screen fixed right-0 flex items-center ${auth === "admin" ? ` `: `hidden`}`}>
          <Link to={"/admin"} className="w-15 h-60 bg-black rounded-2xl -translate-x-5"></Link>
        </div>
        {/* A-1 */}
        <article className="mt-5 flex flex-col items-center">
          <h1 className="text-4xl font-serif">Phone Service</h1>
          <section className="w-80 h-80 border"></section>
        </article>
        {/* A-2 */}
      </main>
    </div>
  );
}

export default HomePage