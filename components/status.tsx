import { Status } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function StatusPill({ status }: { status: Status }) {
  return (
    <div
      className={cn(
        "px-3 py-1 w-[88px] text-center rounded-full text-sm font-medium",
        { "bg-green-100 text-green-700": status === Status.Assigned },
        { "bg-red-100 text-red-700": status === Status.Pending }
      )}
    >
      {status}
    </div>
  );
}
