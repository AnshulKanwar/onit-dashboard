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
import { services } from "@/lib/data";

export default function Services() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Problem</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.slice(0, 5).map(({ id, problem, status }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{problem}</TableCell>
              <TableCell>
                <StatusPill status={status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
