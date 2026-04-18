import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  img: string;
}
export default function Cards({ title, img }: CardProps) {
  return (
    <div className="flex items-center justify-center">
      <Card className="relative w-64 h-64 border-none shadow-lg">
        {/* image */}
        <div className="h-64 w-64 rounded-lg overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* overlay */}
        <div className="absolute h-16 bottom-0 w-full bg-card/80 backdrop-blur-md px-4 py-2 rounded-b-lg flex flex-col justify-between">
          {/* title */}
          <h3 className="text-left text-secondary text-sm font-medium truncate">
            {title}
          </h3>

          {/* explore */}
          <div className="flex items-center">
            <p className="text-primary text-xs font-semibold">Explore</p>
            <Button
              size="icon"
              className="bg-primary rounded-full h-7 w-7 ml-2 hover:bg-primary/90"
            >
              <ArrowRight
                className="h-2 w-2 text-black dark:text-white -rotate-45"
                strokeWidth={1}
              />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
