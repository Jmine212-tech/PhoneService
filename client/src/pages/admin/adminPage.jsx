import React from "react";
import {Link} from "react-router-dom"

function AdminPage() {
  const features = [
    { name: "repairList", path: "repairList" },
    { name: "dashboard", path: "dashboard" },
  ];
  return (
    <div className="w-90 h-screen">
      <div className="w-full h-15 bg-linear-to-r from-orange-500 to-amber-500"></div>
      <main className="flex flex-col items-center gap-3 mt-5">
        <h1 className="text-4xl font-bold">Admin</h1>
        {/* A-1 */}
        <article className="grid grid-flow-row grid-cols-3 gap-2">
          {features.map((feature, index) => {
            return (
              <div
                className={`w-25 h-25 border rounded-box 
                ${index % 2 == 0 ? `bg-stone-600` : "bg-base-300"}`}
              > <Link to={`/${feature.path}`}
              className="w-full h-full  flex items-center justify-center ">{feature.name}</Link></div>
            );
          })}
        </article>
      </main>
    </div>
  );
}

export default AdminPage;
