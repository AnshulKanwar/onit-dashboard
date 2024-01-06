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
import { Service, Status } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { HardHat, MapPin, Star } from "lucide-react";
import Rating from "./rating";

export default function DetailCards({ service }: { service: Service }) {
  return (
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
          <StatusPill status={service.status} />
        </CardContent>
        <CardFooter>
          {service.status === Status.Assigned && (
            <>
              <span className="flex items-center">
                <HardHat className="mr-2 w-5 h-5" />
                {service.technician!}
              </span>
              <Button className="ml-auto w-24">Reassign</Button>
            </>
          )}

          {service.status === Status.Pending && (
            <Button className="ml-auto w-24">Assign</Button>
          )}

          {service.status === Status.Completed && (
            <>
              <span className="flex items-center">
                <HardHat className="mr-2 w-5 h-5" />
                {service.technician!}
              </span>
              <Rating rating={service.rating!} className="ml-auto" />
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
