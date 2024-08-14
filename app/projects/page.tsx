import { RepositoryList } from "@/components/RepositoryList"
import { Repo } from "@/types/Repository"
import { isMobile } from "@/utils/isMobile";
import { headers } from "next/headers";

export default async function ProjectsPage() {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  const data: Repo[] = await fetch('https://api.github.com/users/ryansldev/repos?sort=updated', { next: { revalidate: 60*60 } }).then((res) => res.json())
  const repositories = data.filter((repository) => repository.description?.includes(':leaves:'))

  return (
    <div>
      <RepositoryList
        repositories={repositories}
        isMobile={mobileCheck}
      />
    </div>
  )
}
