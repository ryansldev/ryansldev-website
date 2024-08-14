'use client'

import { Repo } from "@/types/Repository";
import Image from "next/image";
import { CardList } from "./CardList";
import { Card } from "./Card";

interface RepositoryProps {
  repository: Repo;
  isMobile: boolean;
}

export function Repository({
  repository,
  isMobile,
}: RepositoryProps) {
  const imageFilename = isMobile ? 'banner.jpg' : 'banner-desktop.jpg'

  return (
    <>
      <div
        key={repository.id}
      >
        <Image
          src={`https://raw.githubusercontent.com/ryansldev/${repository.name}/main/public/${imageFilename}`}
          height={1080}
          width={1432}
          alt={repository.name ?? "Project"}
          quality={80}
          priority
        />
        <div className="mt-[-100px] mb-[100px]">
          <CardList>
            <Card
              title="GitHub"
              description="Clique para ir até o projeto"
              href={repository.html_url}
            />
            {repository.homepage && repository.homepage.length > 0 && (
              <Card
                title="Deploy"
                description="Clique para ir até o deploy"
                href={repository.html_url}
              />
            )}
          </CardList>
        </div>
      </div>
    </>
  )
}