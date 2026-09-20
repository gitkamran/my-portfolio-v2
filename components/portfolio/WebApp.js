import { getProjects } from "@/app/lib/data";
import React from "react";
import WebAppItem from "./WebAppItem";

const WebApp = () => {
  const projects = getProjects();
  return (
    <div className="flex flex-col gap-4">
      {projects.map((p, i) => (
        <WebAppItem
          key={p.id}
          number={i + 1}
          title={p.title}
          description={p.description}
          longDescription={p.longDescription}
          url={p.url}
          tech={p.tech}
          category={p.category}
          year={p.year}
        />
      ))}
    </div>
  );
};

export default WebApp;
