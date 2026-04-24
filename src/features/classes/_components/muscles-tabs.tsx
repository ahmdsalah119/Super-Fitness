import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useIntl } from "react-intl";
import { useMuscleGroups } from "../_hooks/use-muscles";
import { cn } from "@/lib/utils/utils";
import { MuscleTabsSkeleton } from "../skeltons/tab.skelton";
import MuscleCards from "./muscle-cards";

export default function MuscleTabs() {
  // Translation
  const { formatMessage, locale } = useIntl();
  const lang = locale as "en" | "ar";

  // Queries
  const { data: muscles, isLoading, isError } = useMuscleGroups(lang);

  // State
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    direction: locale === "ar" ? "rtl" : "ltr",
  });

  // Functions
  const handleSelect = (id: string, index: number) => {
    setSelectedId(id);

    if (!emblaApi) return;

    emblaApi.scrollTo(index, true);
  };

  //Effect
  useEffect(() => {
    if (muscles && muscles.length > 0 && !selectedId) {
      setSelectedId(muscles[0]._id);
    }
  }, [muscles, selectedId]);

  // Loading - Error
  if (isLoading) return <MuscleTabsSkeleton />;
  if (isError) return <p>{formatMessage({ id: "error-muscles" })}</p>;

  return (
    <>
      <div
        className="overflow-hidden w-[45.438rem] mx-auto my-8"
        ref={emblaRef}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="flex gap-4">
          {muscles?.map((muscle, index) => (
            <div
              key={muscle._id}
              onClick={() => handleSelect(muscle._id, index)}
              className={cn(
                "p-2 flex-shrink-0 text-white font-bold cursor-pointer text-xl rounded-3xl transition-all duration-200",
                selectedId === muscle._id ? "bg-primary" : "",
              )}
            >
              {muscle.name}
            </div>
          ))}
        </div>
      </div>
      <MuscleCards groupId={selectedId} />
    </>
  );
}
