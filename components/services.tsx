import { formatDistanceToNow } from "date-fns";
import StatusPill from "./status";
import { services } from "@/lib/data";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col">
      {services.slice(0, 5).map(({ id, date, problem, status }) => (
        <Link
          key={id}
          href={`/service/${id}`}
          className="py-1 border-b last:border-0"
        >
          <div className="p-3 flex justify-between items-center rounded-lg hover:bg-muted">
            <div className="flex flex-col gap-0.5">
              <span>{problem}</span>
              <span className="text-sm text-muted-foreground">
                {`${formatDistanceToNow(new Date(date))} ago`}
              </span>
            </div>
            <StatusPill status={status} />
          </div>
        </Link>
      ))}
    </div>
  );
}
