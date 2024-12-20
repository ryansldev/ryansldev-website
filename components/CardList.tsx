'use client';

interface CardListProps {
  children: React.ReactNode;
}

export function CardList({ children }: CardListProps) {
  return (
    <div className="py-4 flex gap-3 items-center justify-center max-w-[549px] mx-auto flex-wrap flex-1 px-4">
      {children}
    </div>
  )
}
