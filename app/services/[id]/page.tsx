import StatusPill from "@/components/status";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/data";
import { Status } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { HardHat, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-10">
      <span className="text-3xl font-bold">{service.problem}</span>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
            <CardDescription>
              {`${formatDistanceToNow(new Date(service.date))} ago`}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center">
            <MapPin className="mr-2 w-5 h-5" />
            {service.address}
          </CardContent>
          <CardFooter className="font-semibold text-lg">
            ₹{service.price}
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>
            <StatusPill status={service.status} size="small" />
          </CardContent>
          <CardFooter>
            {service.status === Status.Assigned ? (
              <>
                <span className="flex items-center">
                  <HardHat className="mr-2 w-5 h-5" />
                  {service.technician!}
                </span>
                <Button className="ml-auto w-24">Reassign</Button>
              </>
            ) : (
              <Button className="ml-auto w-24">Assign</Button>
            )}
          </CardFooter>
        </Card>
      </div>
      <p>{service.detail}</p>
    </main>
  );
}

export async function generateStaticParams() {
  return services.map(({ id }) => ({ id: id.toString() }));
}
