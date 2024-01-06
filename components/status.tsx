import { Status } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function StatusPill({
  status,
  size = "normal",
}: {
  status: Status;
  size?: "small" | "normal";
}) {
  return (
    <div
      className={cn(
        "text-center rounded-full font-medium",
        { "px-2 py-1 w-[80px] text-sm": size === "normal" },
        { "px-2 py-1 w-[70px] text-xs": size === "small" },
        { "bg-green-100 text-green-700": status === Status.Assigned },
        { "bg-red-100 text-red-700": status === Status.Pending }
      )}
    >
      {status}
    </div>
  );
}
