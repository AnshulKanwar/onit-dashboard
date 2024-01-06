import { Status } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-block text-center rounded-full font-medium px-2 py-1 w-[80px] text-xs",
        { "bg-blue-100 text-blue-700": status === Status.Assigned },
        { "bg-yellow-100 text-yellow-700": status === Status.Pending },
        { "bg-green-100 text-green-700": status === Status.Completed }
      )}
    >
      {status}
    </span>
  );
}
