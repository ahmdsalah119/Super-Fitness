import { useIntl } from "react-intl";
import { useMusclesByGroup } from "../_hooks/use-muscles";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CardSkeleton } from "../skeltons/card.skelton";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

export default function MuscleCards({ groupId }: { groupId: string | null }) {
  // Translation
  const { locale, formatMessage } = useIntl();
  const lang = locale as "en" | "ar";

  // Queries
  const { data, isLoading, isError } = useMusclesByGroup(groupId, lang);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    direction: lang === "ar" ? "rtl" : "ltr",
  });

  // State
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to split array into slides
  const chunkArray = (arr: Muscle[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Prepare slides (each slide contains 6 muscles)
  const slides = chunkArray(data?.muscles || [], 6);

  // Effect
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (!groupId) return null;

  // Loading - Error
  if (isLoading) return <CardSkeleton />;

  if (isError) return <p>{formatMessage({ id: "error-muscles" })}</p>;

  return (
    <>
      {data?.muscles.length === 0 ? (
        <p className="font-bold text-2xl text-primary">
          {formatMessage({ id: "no-muscles" })}
        </p>
      ) : (
        <div className="mt-6 px-20 mb-10">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((group, slideIndex) => (
                <div key={slideIndex} className="flex-[0_0_100%]">
                  <div className="grid grid-cols-3 gap-4">
                    {group.map((muscle) => (
                      <Link to={`/classes/${muscle._id}`} key={muscle._id}>
                        <div className="rounded-2xl h-[19.25rem] relative overflow-hidden cursor-pointer">
                          {muscle.image ? (
                            <img
                              src={muscle.image}
                              alt={muscle.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-zinc-800 text-white font-bold">
                              No Photo
                            </div>
                          )}

                          {/* Overlay */}
                          <div className="absolute bottom-0 left-0 w-full h-24 bg-[#24242480] backdrop-blur-3xl">
                            {/* Content */}
                            <div className="absolute inset-0 p-4 text-white flex flex-col items-start gap-2 z-40">
                              <h3 className="font-bold text-xl tracking-wider uppercase">
                                {muscle.name}
                              </h3>

                              <button className="flex items-center gap-2 text-primary">
                                Explore
                                <span className="bg-primary text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                  <MoveRight
                                    className="-rotate-45 text-[#171E2E]"
                                    size={6}
                                  />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {(data?.muscles.length || 0) > 6 && (
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    emblaApi?.scrollTo(
                      lang === "ar" ? slides.length - 1 - index : index,
                    )
                  }
                  className={`w-2 h-2 rounded-full transition ${
                    index === selectedIndex ? "bg-primary w-7" : "bg-white"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
