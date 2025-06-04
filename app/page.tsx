'use client';

import Image from "next/image";
import { Card } from "../components/Card";
import { CardList } from "../components/CardList";
import { useEffect, useState } from "react";

import dictionary from "./dictionary.json"

export default function Home() {
  const [language, setLanguage] = useState<"pt-br" | "en">("pt-br")

  const texts = dictionary[language]

  async function changeLanguage(newLanguage: "pt-br" | "en") {
    setLanguage(newLanguage)
    localStorage.setItem("lng", newLanguage)
  }

  useEffect(() => {
    setLanguage((localStorage.getItem("lng") as "pt-br" | "en") ?? "pt-br")
  }, [])

  return (
    <main className="py-24">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/ryansldev.png"
          alt="Profile pic"
          height={192}
          width={192}
          className="rounded-full mb-9"
        />
        <h1 className="text-5xl font-extrabold tracking-[-0.04px] leading-[48px]">
          Ryan Lima
        </h1>
        <h2 className="font-medium uppercase text-main-500 tracking-[-0.02px] leading-[44px]">
          FullStack Developer since 2018
        </h2>
        <button
          type="button"
          onClick={() => changeLanguage(language === "pt-br" ? "en" : "pt-br")}
          className="text-neutral-400 bg-neutral-800 px-5 h-12 rounded-lg"
        >
          {texts?.changeTo} {language === "pt-br" ? "Inglês" : "Portuguese"}
        </button>
      </div>

      <CardList>
        <Card
          title="Instagram"
          description={texts?.instagramDescription}
          href="https://www.instagram.com/ryansldev/"
        />
        <Card
          title="LinkedIn"
          description={texts?.linkedInDescription}
          href="https://www.linkedin.com/in/ryansldev/"
        />
        <Card
          title="Projetos"
          description={texts?.projectsDescription}
          href="/projects"
        />
        <Card
          title="Currículo"
          description={texts?.curriculumDescription}
          href={language === "pt-br" ? "/cv.pdf" : "/cv-en.pdf"}
          download
        />
      </CardList>
    </main>
  );
}
