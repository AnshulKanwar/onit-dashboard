import { Status } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-block text-center rounded-full font-medium px-2 py-1 w-[70px] text-xs",
        { "bg-green-100 text-green-700": status === Status.Assigned },
        { "bg-red-100 text-red-700": status === Status.Pending }
      )}
    >
      {status}
    </span>
  );
}
