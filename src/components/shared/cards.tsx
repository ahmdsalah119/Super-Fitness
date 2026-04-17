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
      <Card className="relative w-64 h-64">
        {/* image part */}
        <div className=" h-64 w-64 rounded-lg overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        {/* bottom part */}
        <div className="absolute bottom-0 w-full bg-card/80 backdrop-blur-md p-4 ">
          <h3 className="text-left">{title}</h3>
          {/* explore button */}
          <div className=" flex items-center justify-between">
            <p className="text-primary">Explore </p>
            <Button size="icon" className="bg-primary rounded-full h-8 w-8">
              <ArrowRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
