import StatusPill from "@/components/status";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import { Service, Status } from "@/lib/types";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="p-4 pt-0">
      <Tabs defaultValue="all">
        <TabsList className="w-full justify-stretch">
          <TabsTrigger value="all" className="flex-1">
            All
          </TabsTrigger>
          <TabsTrigger value="assigned" className="flex-1">
            Assigned
          </TabsTrigger>
          <TabsTrigger value="pending" className="flex-1">
            Pending
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <NavList services={services} />
        </TabsContent>
        <TabsContent value="assigned">
          <NavList
            services={services.filter((s) => s.status === Status.Assigned)}
          />
        </TabsContent>
        <TabsContent value="pending">
          <NavList
            services={services.filter((s) => s.status === Status.Pending)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function NavList({ services }: { services: Service[] }) {
  return (
    <nav className="flex flex-col gap-3">
      {services.map(({ id, problem, status, address }) => (
        <Link
          key={id}
          href={`/services/${id}`}
          className="border p-3 rounded-lg hover:bg-accent"
        >
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 justify-between items-center">
              <span className="text-sm">{problem}</span>
              <StatusPill status={status} size="small" />
            </div>
            <span className="text-muted-foreground text-xs">{address}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}
