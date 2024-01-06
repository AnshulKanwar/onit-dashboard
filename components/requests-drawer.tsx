import { Check, MapPin, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

const requests = [
  {
    id: 1,
    problem: "Flickering lights",
    address: "29/45, Brightville, Faridabad",
    detail:
      "The lights in several rooms are flickering intermittently. It causes discomfort, strain on the eyes, and potential disruptions in daily activities",
  },
  {
    id: 2,
    problem: "Leaky faucet",
    address: "17 Main Street, Cityville",
    detail:
      "The faucet in the bathroom sink is leaking constantly, resulting in water wastage and an annoying noise.",
  },
  {
    id: 3,
    problem: "Clogged drain",
    address: "123 Oak Avenue, Springfield",
    detail:
      "The kitchen sink drain is clogged, causing slow drainage and potential backups.",
  },
];

export default function RequestsDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="text-muted-foreground hover:text-primary">
        Requests
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-3xl">
          <DrawerHeader>
            <DrawerTitle>Pending Requests</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-10">
            {requests.map(({ id, problem, address, detail }) => (
              <div key={id} className="flex gap-10 items-center">
                <div className="grow space-y-1">
                  <h2>{problem}</h2>
                  <span className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 w-4 h-4" />
                    {address}
                  </span>
                  <p className="text-sm">{detail}</p>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Check />
                    Accept
                  </Button>
                  <Button variant="destructive">
                    <X />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
