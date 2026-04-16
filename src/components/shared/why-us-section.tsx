// why us section component
export const WhyUsSection = () => {
  //text content data
  const whyUsData = [
    {
      id: "01",
      title: "Personalized Fitness Plans",
      description: "We tailor every workout to fit your unique goals...",
    },
    {
      id: "02",
      title: "Results-Driven Focus",
      description: "Everything we do is designed to help you achieve...",
    },
    {
      id: "03",
      title: "State-Of-The-Art Equipment",
      description: "We provide the latest in gym equipment...",
    },
  ];

  return (
    <section className="py-20 bg-background" id="about">
      {/* TODO: Add styled section title  */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/*Text Content */}
        <div className="flex flex-col gap-10 w-full">
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="font-bold text-3xl md:text-4xl text-foreground text-left leading-tight uppercase">
              Elevate fitness with the best way possible
            </h2>
            {/* Section Description */}
            <p className="text-muted-foreground text-foreground text-left text-lg">
              We offer a fitness journey that's tailored to your goals,
              supported by professional trainers and a welcoming community.
            </p>
          </div>

          <div className="space-y-2">
            {whyUsData.map((item, index) => (
              <div
                key={item.id}
                className="relative flex items-start gap-6 pb-10 last:pb-0"
              >
                {/* Vertical Dashed Line */}
                {index !== whyUsData.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-px border-l-2 border-dashed border-border -z-10" />
                )}

                {/* The Orange Ball */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full text-white flex items-center justify-center text-xl font-bold shadow-sm">
                  {item.id}
                </div>
                {/* Text Content */}
                <div className="flex flex-col text-left pt-2">
                  {/* text title */}
                  <h3 className="text-xl text-foreground md:text-2xl font-bold mb-1">
                    {item.title}
                  </h3>
                  {/* text description */}
                  <p className="text-muted-foreground text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="w-full grid grid-cols-2 gap-4">
          {/* Top Left */}
          <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/5]">
            <img
              src="/src/assets/why-us-section/top-left.png"
              className="object-cover w-full h-full"
              alt="top left"
            />
          </div>
          {/* Top Right */}
          <div className="mt-12 relative overflow-hidden rounded-xl shadow-lg aspect-[1/1]">
            <img
              src="/src/assets/why-us-section/top-right.png"
              className="object-cover w-full h-full"
              alt="top right"
            />
          </div>
          {/* Bottom Left */}
          <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[10/13]">
            <img
              src="/src/assets/why-us-section/bottom-left.png"
              className="object-cover w-full h-full"
              alt="bottom left"
            />
          </div>
          {/* Bottom Right */}
          <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/5]">
            <img
              src="/src/assets/why-us-section/bottom-right.png"
              className="object-cover w-full h-full"
              alt="bottom right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
