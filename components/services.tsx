import { Service, Status } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import StatusPill from "./status";
import { Button } from "./ui/button";

const services: Service[] = [
  {
    id: 1,
    problem: "Plumbing leak",
    status: Status.Assigned,
  },
  {
    id: 2,
    problem: "Wi-Fi outage",
    status: Status.Assigned,
  },
  {
    id: 3,
    problem: "Pests infestation",
    status: Status.Pending,
  },
  {
    id: 4,
    problem: "Broken washing machine",
    status: Status.Assigned,
  },
];

export default function Services() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Problem</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-40"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map(({ id, problem, status }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{problem}</TableCell>
              <TableCell>
                <StatusPill status={status} />
              </TableCell>
              <TableCell>
                {status === Status.Pending && <Button>Assign</Button>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
