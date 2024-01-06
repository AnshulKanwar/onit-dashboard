import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export default function Rating({
  rating,
  className,
}: {
  rating: number;
  className?: React.ReactNode;
}) {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {[...Array(rating)].map((_, idx) => (
        <Star key={idx} size={32} fill="#facc15" stroke="0" />
      ))}
      {[...Array(5 - rating)].map((_, idx) => (
        <Star key={idx} size={32} fill="#d4d4d8" stroke="0" />
      ))}
    </div>
  );
}
