import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6 px-20 mb-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="rounded-2xl overflow-hidden bg-zinc-700">
          <Skeleton className="h-[19.25rem] w-full" />
          <div className="p-3">
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
