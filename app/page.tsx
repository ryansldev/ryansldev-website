import Image from "next/image";
import { Card } from "./components/Card";
import { CardList } from "./components/CardList";

export default function Home() {
  return (
    <main className="py-24">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile pic"
          height={192}
          width={192}
          className="rounded-full mb-9"
        />
        <h1 className="text-5xl font-extrabold tracking-[-0.04px] leading-[48px]">Ryan Lima</h1>
        <h2 className="font-medium uppercase text-main-500 tracking-[-0.02px] leading-[44px]">FullStack Developer since 2018</h2>
      </div>

      <CardList>
        <Card
          title="Instagram"
          description="É um ótimo local pra compartilhar do meu dia a dia"
          href="https://www.instagram.com/ryansldev/"
        />
        <Card
          title="LinkedIn"
          description="É um ótimo local pra acompanhar publicações profissionais"
          href="https://www.linkedin.com/in/ryansldev/"
        />
        <Card
          title="Projetos"
          description="Dê uma olhada em meus projetos públicos"
          href="https://github.com/ryansldev"
        />
        <Card
          title="Currículo"
          description="É um ótimo meio para ver com mais detalhes as minhas habilidades"
          href="https://github.com/ryansldev"
        />
      </CardList>
    </main>
  );
}
