import { Skeleton } from "@/components/ui/skeleton";

export function MuscleTabsSkeleton() {
  return (
    <div className="overflow-hidden w-[45.438rem] mx-auto my-8">
      <div className="flex gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-3xl bg-zinc-700" />
        ))}
      </div>
    </div>
  );
}
