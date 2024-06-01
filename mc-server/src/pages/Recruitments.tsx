import React, { useRef } from "react";
import Layout from "../layouts/Layout";
import Developer from "../images/developer.png";
import Helper from "../images/helper.png";
import Builder from "../images/builder.png";
import RecruitmentList from "../components/RecruitmentList";
import RecruitmentCard from "../components/RecruitmentCard";

interface ContentItem {
  title: string;
  content: string[];
}

const Recruitments: React.FC = () => {
  const builderRef = useRef<HTMLDivElement>(null);
  const helperRef = useRef<HTMLDivElement>(null);
  const developerRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const builderContent: ContentItem = {
    title: "Nábor - Builder",
    content: [
      "Nick hráče",
      "Věk",
      "Něco o sobě",
      "Množství volného času",
      "Zkušenosti se stavitelskými pluginy (world edit, armor stand edit, ...)",
      "Předcházející zkušenosti se stavěním, bývalé pozice v admin teamu na jiných projektech, tvé úspěchy",
      "Fotky staveb",
      "Mít funkční mikrofon, mít originální minecraft, být ochotný rozvíjet své stavitelské dovednosti, případně znalosti se stavitelskými pluginy.",
    ],
  };

  const helperContent: ContentItem = {
    title: "Nábor - Helper",
    content: [
      "Nick hráče",
      "Věk",
      "Něco o sobě",
      "Množství volného času",
      "Proč bychom měli vzít právě tebe",
      "Tvé zkušenosti s minecraftem, jak dlouho hraješ, tvé bývalé pozice v admin teamu na jiných projektech, tvé úspěchy",
      "Mít funkční mikrofon, mít originální minecraft, být ochotný pomáhat členům admin teamu a hráčům, kteří si neví s něčím rady, být ochotný rozvíjet své komunikační dovednosti.",
    ],
  };

  const developerContent: ContentItem = {
    title: "Nábor - Developer",
    content: [
      "Nick hráče",
      "Věk",
      "Něco o sobě",
      "Množství volného času",
      "Zkušenosti se stavitelskými pluginy (world edit, armor stand edit, ...)",
      "Předcházející zkušenosti se stavěním, bývalé pozice v admin teamu na jiných projektech, tvé úspěchy",
      "Fotky staveb",
      "Mít funkční mikrofon, mít originální minecraft, být ochotný rozvíjet své stavitelské dovednosti, případně znalosti se stavitelskými pluginy.",
    ],
  };

  return (
    <Layout>
      <div className="w-full min-h-96 flex flex-col items-center mb-24 relative">
        <h1 className="text-center text-4xl font-bold dark:text-white mb-10">
          Nábory
        </h1>
        <div className="max-w-7xl mx-5 grid grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-16">
          <RecruitmentCard
            title="Builder"
            image={Builder}
            onClick={() => scrollToRef(builderRef)}
          />
          <RecruitmentCard
            title="Helper"
            image={Helper}
            onClick={() => scrollToRef(helperRef)}
          />
          <RecruitmentCard
            title="Developer"
            image={Developer}
            onClick={() => scrollToRef(developerRef)}
          />
        </div>
        <div className="w-full flex flex-col items-center leading-loose">
          <div ref={builderRef}>
            <RecruitmentList items={builderContent.content} {...builderContent} />
          </div>

          <div ref={helperRef}>
            <RecruitmentList items={helperContent.content} {...helperContent} />
          </div>

          <div ref={developerRef}>
            <RecruitmentList items={developerContent.content} {...developerContent} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recruitments;
