import { useEffect } from "react";import Section from "./components/showcase1-components/section";
import { showCase } from "./constants/showcase";
const Showcase1 = () => {
  useEffect(() => {
    document.title = "صالة عرض 1 - غلّاب";
  }, []);
  return (
    <div className="overflow-hidden">
      {showCase.map((e, i) => {
        return (
          <Section
            key={i}
            url={e.coverImage}
            href={`/projects/${e.id}`}
            title={e.city}
            desc={e.shortDescription}
            attachment={e.id % 2 !== 0 ? "bg-fixed" : ""}
          />
        );
      })}
    </div>
  );
};

export default Showcase1;
