'use client'

import { Repo } from "@/types/Repository";
import { Repository } from "./Repository";

interface RepositoryListProps {
  repositories: Repo[]
  isMobile: boolean
}

export function RepositoryList({
  repositories,
  isMobile,
}: RepositoryListProps) { 
  return (
    <div className="flex flex-col items-center justify-center">
      {repositories.map((repository) => (
        <Repository key={repository.id} repository={repository} isMobile={isMobile} />
      ))}
    </div>
  )
}