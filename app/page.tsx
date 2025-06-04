import Image from "next/image";
import { Card } from "../components/Card";
import { CardList } from "../components/CardList";
import dictionary from "./dictionary.json";
import { headers } from "next/headers";
import Link from "next/link";

type Props = {
  searchParams: { lng?: "pt-br" | "en" };
};

export default function Home({ searchParams }: Props) {
  const headersList = headers();
  const broserAcceptLang = headersList.get("accept-language") || "en";
  const defaultLangFromBrowser = broserAcceptLang.startsWith("pt") ? "pt-br" : "en";

  const language: "pt-br" | "en" = searchParams.lng ?? defaultLangFromBrowser;
  const texts = dictionary[language];

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
          Software Engineer since 2022
        </h2>

        <Link
          href={`/?lng=${language === "pt-br" ? "en" : "pt-br"}`}
          className="flex items-center justify-center text-neutral-400 bg-neutral-800 px-5 h-12 rounded-lg mt-4"
        >
          {texts?.changeTo} {language === "pt-br" ? "Inglês" : "Portuguese"}
        </Link>
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
          title={texts?.projects}
          description={texts?.projectsDescription}
          href="/projects"
        />
        <Card
          title={texts?.curriculum}
          description={texts?.curriculumDescription}
          href={language === "pt-br" ? "/cv.pdf" : "/cv-en.pdf"}
          download
        />
      </CardList>
    </main>
  );
}
