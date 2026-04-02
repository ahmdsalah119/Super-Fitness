import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

type PickerItem = {
  label: string;
  value: number;
};

type HorizontalPickerProps = {
  items: PickerItem[];
  value: number;
  onChange: (val: number) => void;
  title?: string;
};

export default function HorizontalPicker({
  items,
  value,
  onChange,
  title,
}: HorizontalPickerProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    dragFree: false,
  });

  // Scroll to selected
  useEffect(() => {
    if (!emblaApi) return;
    const index = items.findIndex((i) => i.value === value);
    if (index !== -1) emblaApi.scrollTo(index);
  }, [value, emblaApi, items]);

  // Update on select
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      const selected = items[index];
      if (selected) onChange(selected.value);
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, items, onChange]);

  const selectedIndex = items.findIndex((i) => i.value === value);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Title */}
      <div className="text-orange-500 text-lg">{title}</div>

      {/* Wrapper */}
      <div className="relative w-full max-w-2xl overflow-hidden">
        {/* Arrow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-orange-500" />
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex items-center py-5 px-[calc(50%-40px)]">
            {items.map((item, index) => {
              const distance = Math.abs(index - selectedIndex);

              const isActive = distance === 0;
              const isNear = distance === 1;
              const isFar = distance == 2;

              return (
                <div
                  key={item.value}
                  onClick={() => onChange(item.value)}
                  className="px-5 flex justify-center cursor-pointer"
                >
                  <div
                    className={`transition-all duration-500 font-extrabold pb-2 ease-out ${
                      isActive
                        ? "text-[#FF4100]   text-5xl scale-125"
                        : isNear
                          ? "text-[#D3D3D3] text-4xl  scale-110"
                          : isFar
                            ? "text-[#D3D3D3] text-2xl   scale-105"
                            : "text-lg bg-gradient-to-r from-[#D3D3D3] to-[#6D6D6D] bg-clip-text text-transparent "
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
